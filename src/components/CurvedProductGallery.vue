<template>
  <div class="curved-gallery-container">
    <div class="scene">
      <div class="rig" ref="rig" :style="rigStyle">
        <!-- 4 Parts arranged in a centered concave curve -->
        <div class="panel part-1">
          <img src="/images/mask_nobg.png" alt="كمامة طبية - Prime Medical" />
        </div>
        <div class="panel part-2">
          <img src="/images/gloves_nobg.png" alt="قفازات طبية - Prime Medical" />
        </div>
        <div class="panel part-3">
          <img src="/images/overhead_nobg.png" alt="غطاء رأس طبي - Prime Medical" />
        </div>
        <div class="panel part-4">
          <img src="/images/shoes_nobg.png" alt="غطاء حذاء طبي - Prime Medical" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);
const mouseX = ref(0);
const mouseY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const handleMouseMove = (e) => {
  // Localize mouse coordinates if possible, or keep global for interaction
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 2;
};

const rigStyle = computed(() => {
  // Reduced parallax effect for embedded component
  const translateY = scrollY.value * 0.05;
  const tiltX = mouseY.value * 5;
  
  return {
    transform: `translateY(${translateY}px) rotateX(${tiltX}deg)`
  };
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
.curved-gallery-container {
  position: relative;
  width: 100%;
  height: 600px; /* Fixed height for the container */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.scene {
  width: 100%;
  height: 100%;
  perspective: 1200px;
  transform: scale(0.8); /* Scale down slightly to fit */
}

.rig {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: pendulumWide 15s infinite ease-in-out alternate;
  transform-origin: center center -800px;
}

.panel {
  position: absolute;
  width: 200px; /* Fixed px width for better control in grid */
  height: 300px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel img {
  width: 100%;
  height: auto;
  opacity: 0.9; /* Higher focus opacity */
  filter: drop-shadow(0 10px 20px rgba(10, 92, 149, 0.3));
  transform: scale(0.9);
  transition: transform 0.5s;
}

@keyframes pendulumWide {
  0% { transform: rotateY(-20deg) translateX(-10%); }
  100% { transform: rotateY(20deg) translateX(10%); }
}

/* Localized Positioning */
/* Using pixels/percentages relative to the container */
.part-1  { top: 20%; left: 0%; transform: rotateY(35deg) translateZ(100px); }
.part-2  { top: 20%; left: 25%; transform: rotateY(10deg) translateZ(0px); }
.part-3  { top: 20%; left: 50%; transform: rotateY(-10deg) translateZ(0px); }
.part-4  { top: 20%; left: 75%; transform: rotateY(-35deg) translateZ(100px); }
</style>
