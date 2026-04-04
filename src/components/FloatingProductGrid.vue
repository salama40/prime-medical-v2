<template>
  <div class="floating-products-showcase">
    <div class="floating-grid-container" id="floatingGrid">
      <!-- Card 1: Mask -->
      <div class="floating-card" data-index="0" data-float-speed="2">
        <div class="floating-card-inner">
          <img src="/images/mask_nobg.png" alt="كمامات طبية - Prime Medical">
          <div class="floating-label">كمامات طبية</div>
        </div>
      </div>
      
      <!-- Card 2: Gloves -->
      <div class="floating-card" data-index="1" data-float-speed="3">
        <div class="floating-card-inner">
          <img src="/images/gloves_nobg.png" alt="جوانتيات طبية - Prime Medical">
          <div class="floating-label">جوانتيات طبية</div>
        </div>
      </div>
      
      <!-- Card 3: Overhead -->
      <div class="floating-card" data-index="2" data-float-speed="2.5">
        <div class="floating-card-inner">
          <img src="/images/overhead_nobg.png" alt="أوفر هيد - Prime Medical">
          <div class="floating-label">أوفر هيد</div>
        </div>
      </div>
      
      <!-- Card 4: Shoes -->
      <div class="floating-card" data-index="3" data-float-speed="3.5">
        <div class="floating-card-inner">
          <img src="/images/shoes_nobg.png" alt="أوفر شوز - Prime Medical">
          <div class="floating-label">أوفر شوز</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

let mouseX = 0;
let mouseY = 0;
let animationId = null;

onMounted(() => {
  const container = document.getElementById('floatingGrid');
  const cards = document.querySelectorAll('.floating-card');
  
  if (!container || !cards.length) return;
  
  // Track mouse position
  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    mouseY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
  };
  
  container.addEventListener('mousemove', handleMouseMove);
  
  // Floating animation with parallax
  function animate() {
    const time = Date.now() * 0.001;
    
    cards.forEach((card, index) => {
      const floatSpeed = parseFloat(card.dataset.floatSpeed);
      const baseY = Math.sin(time * floatSpeed) * 15;
      const baseX = Math.cos(time * floatSpeed * 0.7) * 10;
      
      // Parallax effect based on mouse position
      const parallaxX = mouseX * 20 * (index % 2 === 0 ? 1 : -1);
      const parallaxY = mouseY * 20 * (index < 2 ? 1 : -1);
      
      card.style.transform = `translate(${baseX + parallaxX}px, ${baseY + parallaxY}px)`;
    });
    
    animationId = requestAnimationFrame(animate);
  }
  
  animate();
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style scoped>
.floating-products-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.floating-grid-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.floating-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
  cursor: pointer;
}

.floating-card-inner {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 15px 50px rgba(16, 185, 129, 0.15);
  border: 2px solid rgba(16, 185, 129, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Gradient overlay */
.floating-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.floating-card:hover .floating-card-inner::before {
  opacity: 1;
}

/* Glow effect on hover */
.floating-card-inner::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.floating-card:hover .floating-card-inner::after {
  opacity: 1;
}

.floating-card-inner img {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 8px 25px rgba(16, 185, 129, 0.2));
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 2;
}

.floating-card:hover .floating-card-inner img {
  transform: scale(1.15) translateY(-5px);
  filter: drop-shadow(0 15px 35px rgba(16, 185, 129, 0.35));
}

.floating-card:hover .floating-card-inner {
  box-shadow: 0 25px 70px rgba(16, 185, 129, 0.25);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-8px) scale(1.03);
}

.floating-label {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.85rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
  white-space: nowrap;
  z-index: 3;
  transition: all 0.3s ease;
}

.floating-card:hover .floating-label {
  transform: translateX(-50%) translateY(-3px);
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);
}

/* Entrance animations */
.floating-card {
  animation: floatIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

.floating-card[data-index="0"] {
  animation-delay: 0.1s;
}

.floating-card[data-index="1"] {
  animation-delay: 0.2s;
}

.floating-card[data-index="2"] {
  animation-delay: 0.3s;
}

.floating-card[data-index="3"] {
  animation-delay: 0.4s;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .floating-grid-container {
    max-width: 700px;
    height: 450px;
    gap: 1.5rem;
  }
  
  .floating-card-inner {
    padding: 1.2rem;
  }
  
  .floating-card-inner img {
    max-height: 150px;
  }
  
  .floating-label {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
}

@media (max-width: 768px) {
  .floating-grid-container {
    max-width: 400px;
    height: 550px;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .floating-card-inner {
    padding: 1rem;
  }
  
  .floating-card-inner img {
    max-height: 120px;
  }
  
  .floating-label {
    font-size: 0.75rem;
    padding: 0.4rem 0.9rem;
  }
}
</style>
