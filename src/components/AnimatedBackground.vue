<template>
  <div class="animated-bg-container">
    <canvas ref="canvas"></canvas>
    <!-- Fixed Center Watermark Logo -->
    <img src="/images/prime-logo-transparent.png" alt="Prime Medical Background Logo" class="fixed-logo" />
  </div>
</template>

<style scoped>
.animated-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Lowered to be behind everything */
  pointer-events: none; /* Crucial: Allow clicks to pass through */
  background: radial-gradient(circle at center, #ffffff 0%, #f0fdf4 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.fixed-logo {
  position: absolute;
  width: 80%;
  max-width: 600px;
  opacity: 0.1; /* Low opacity watermark */
  z-index: 0; /* Behind the grid lines (canvas is z-1, but wait layout) */
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  object-fit: contain;
}

@keyframes pulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.05; transform: scale(0.95); }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
let ctx = null;
let animationFrameId = null;
let particles = [];
let mouse = { x: null, y: null };

// Configuration for "Immersive Wireframe Grid" (Globe Structure + Inside View)
const CONFIG = {
  radius: 1000, 
  latitudes: 20, 
  longitudes: 30, 
  color: '46, 204, 113', 
  rotationSpeed: 0.0005
};

let angleY = 0;
let angleZ = 0; // Rotation angle around the Z-axis (Center)

class Point3D {
  constructor(lat, lon) {
    const phi = (lat / CONFIG.latitudes) * Math.PI; 
    const theta = (lon / CONFIG.longitudes) * Math.PI * 2; 
    
    this.x = CONFIG.radius * Math.sin(phi) * Math.cos(theta);
    this.y = CONFIG.radius * Math.sin(phi) * Math.sin(theta);
    this.z = CONFIG.radius * Math.cos(phi);
    
    this.px = 0;
    this.py = 0;
    this.scale = 0;
    this.visible = false;
  }

  project(w, h, rotZ) {
    // Rotate around Z-Axis (Circular Spin around Center)
    let x1 = this.x * Math.cos(rotZ) - this.y * Math.sin(rotZ);
    let y1 = this.x * Math.sin(rotZ) + this.y * Math.cos(rotZ);
    let z1 = this.z; // Depth remains constant relative to rotation

    const perspective = 1000;
    
    // Clip points behind camera
    if (z1 < -perspective + 50) {
      this.visible = false;
      return;
    }
    this.visible = true;

    this.scale = perspective / (perspective + z1);
    this.px = w/2 + x1 * this.scale;
    this.py = h/2 + y1 * this.scale;
  }
}

const init = () => {
  resize();
  particles = []; 
  // Massive Grid Radius
  CONFIG.radius = Math.max(canvas.value.width, canvas.value.height) * 1.2;

  for (let i = 0; i <= CONFIG.latitudes; i++) {
    for (let j = 0; j < CONFIG.longitudes; j++) {
      particles.push(new Point3D(i, j));
    }
  }
  animate();
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  
  // Z-Axis Rotation
  angleZ += CONFIG.rotationSpeed;
  
  // Mouse tilt interaction (Subtle)
  let tiltX = 0;
  if(mouse.x) tiltX = (mouse.y / canvas.value.height - 0.5) * 0.5;

  // Project Vertices
  particles.forEach(p => p.project(canvas.value.width, canvas.value.height, angleZ));

  ctx.lineWidth = 1;

  // Draw Grid Lines
  for (let i = 0; i <= CONFIG.latitudes; i++) {
    for (let j = 0; j < CONFIG.longitudes; j++) {
      let idx = i * CONFIG.longitudes + j;
      let p1 = particles[idx];
      if(!p1 || !p1.visible) continue;

      // Draw Node (Original Globe Style)
      ctx.beginPath();
      ctx.arc(p1.px, p1.py, 2 * p1.scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.color}, ${0.5 * p1.scale})`;
      ctx.fill();
      
      // Connect Longitude (Horizontal Ring)
      let nextLonIdx = i * CONFIG.longitudes + ((j + 1) % CONFIG.longitudes);
      let p2 = particles[nextLonIdx];
      
      if(p2 && p2.visible) {
         ctx.beginPath();
         let distSq = (p1.px-p2.px)**2 + (p1.py-p2.py)**2;
         if(distSq < (canvas.value.width * 1.5)**2) {
             ctx.strokeStyle = `rgba(${CONFIG.color}, ${0.3 * (p1.scale + p2.scale)})`;
             ctx.moveTo(p1.px, p1.py);
             ctx.lineTo(p2.px, p2.py);
             ctx.stroke();
         }
      }

      // Connect Latitude (Vertical Meridian)
      if (i < CONFIG.latitudes) {
        let nextLatIdx = (i + 1) * CONFIG.longitudes + j;
        let p3 = particles[nextLatIdx];
        if(p3 && p3.visible) {
           let distSq = (p1.px-p3.px)**2 + (p1.py-p3.py)**2;
           if(distSq < (canvas.value.height * 1.5)**2) {
               ctx.beginPath();
               ctx.strokeStyle = `rgba(${CONFIG.color}, ${0.3 * (p1.scale + p3.scale)})`;
               ctx.moveTo(p1.px, p1.py);
               ctx.lineTo(p3.px, p3.py);
               ctx.stroke();
           }
        }
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate);
};

const resize = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  }
};

const handleMouseMove = (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
};

const handleMouseLeave = () => {
  mouse.x = undefined;
  mouse.y = undefined;
};

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d');
    init();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
  }
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', resize);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseout', handleMouseLeave);
});
</script>

<style scoped>
.animated-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Lowered to be behind everything */
  pointer-events: none; /* Crucial: Allow clicks to pass through */
  background: radial-gradient(circle at center, #ffffff 0%, #f0fdf4 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10; /* Grid on top of logo */
}
.fixed-logo {
  position: relative; /* Centered by flex parent */
  width: 600px;
  max-width: 80vw;
  opacity: 0.08; /* Very subtle watermark */
  z-index: 1; /* Below canvas */
  animation: pulse-slow 6s ease-in-out infinite;
  filter: grayscale(100%) sepia(100%) hue-rotate(90deg) saturate(300%) contrast(0.8); /* Make it greenish to match */
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.08; transform: scale(1); }
  50% { opacity: 0.04; transform: scale(0.95); }
}
</style>
