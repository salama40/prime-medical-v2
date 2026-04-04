<template>
  <div class="logo-organic-container">
    <div class="logo-wrapper">
      <!-- DNA Helix Rings (Spinning) from PrimeLogo -->
      <div 
        v-for="i in 2" 
        :key="`ring-${i}`"
        class="dna-ring"
        :class="[`ring-${i}`, { 'active': isVisible }]"
      ></div>
      
      <!-- Rotating Product Showcase (Images Only) -->
      <div class="core-logo" :class="{ 'visible': isVisible }">
        <transition name="fade-scale" mode="out-in">
          <img 
            v-if="images.length > 0"
            :key="currentIndex"
            :src="images[currentIndex].value" 
            :alt="'Prime Medical - ' + images[currentIndex].label + ' - مستلزمات طبية'"
            class="logo-image"
            @error="handleImageError(currentIndex)"
          >
        </transition>
        
        <!-- Product Label -->
        <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 animate-fade-in-up" :key="`label-${currentIndex}`">
           <span v-if="images.length > 0" class="text-xl font-black text-emerald-800 bg-white/90 px-4 py-1 rounded-full shadow-sm">
             {{ images[currentIndex].label }}
           </span>
        </div>
      </div>
      
      <!-- Energy Particles -->
      <div class="particles">
        <div v-for="n in 5" :key="`p-${n}`" class="particle" :style="getParticleStyle(n)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['alive']);

const isVisible = ref(false);
const currentIndex = ref(0);
let intervalId = null;

// Available High-Quality Assets
const images = ref([
  { value: '/images/mask_nobg.png', label: 'كمامة طبية' },
  { value: '/images/gloves_nobg.png', label: 'قفازات لاتكس' },
  { value: '/images/shoes_nobg.png', label: 'أوفر شوز' },
  { value: '/images/overhead_nobg.png', label: 'أوفر هيد' }
]);

// Handle Image Load Error (Safety check)
const handleImageError = (index) => {
  images.value.splice(index, 1);
};

const getParticleStyle = (n) => {
  return {
    animationDelay: `${n * 0.5}s`,
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 80 + 10}%`
  };
};

const startCarousel = () => {
  intervalId = setInterval(() => {
    if (images.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }
  }, 1500); 
};

onMounted(() => {
  // Start Organic Growth
  setTimeout(() => {
    isVisible.value = true;
    emit('alive');
    startCarousel();
  }, 500);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.logo-organic-container {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
}

.logo-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* DNA Rings - Reused from PrimeLogo */
.dna-ring {
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
  width: 50%;
  height: 50%;
  opacity: 0;
  transition: all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dna-ring.active {
  opacity: 1;
}

.ring-1 { /* Innermost */
  border-top-color: rgba(52, 211, 153, 0.8);
  border-left-color: rgba(52, 211, 153, 0.4);
  width: 65%;
  height: 65%;
  animation: spin 3s infinite linear;
}

.ring-2 { /* Middle */
  border-bottom-color: rgba(16, 185, 129, 0.6);
  border-right-color: rgba(16, 185, 129, 0.2);
  width: 85%;
  height: 85%;
  animation: spin 5s infinite linear reverse;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Core Content */
.core-logo {
  width: 80%; 
  height: 80%;
  opacity: 0;
  transform: scale(0.5);
  transition: all 1.2s ease-out 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.core-logo.visible {
  opacity: 1;
  transform: scale(1);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Add consistent drop shadow for depth */
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
}

/* Carousel Transition */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.8) rotate(-10deg);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.1) rotate(10deg);
}

/* Particles */
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #34d399;
  border-radius: 50%;
  opacity: 0;
  animation: floatParticle 3s infinite;
}

@keyframes floatParticle {
  0% { transform: scale(0) translate(0, 0); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: scale(1.5) translate(30px, -40px); opacity: 0; }
}

/* Mobile */
@media (max-width: 1024px) {
  .logo-wrapper {
    width: 300px;
    height: 300px;
  }
}
</style>
