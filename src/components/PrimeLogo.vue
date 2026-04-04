<template>
  <div class="logo-organic-container">
    <div class="logo-wrapper">
      <!-- DNA Helix Rings (Spinning) -->
      <div 
        v-for="i in 2" 
        :key="`ring-${i}`"
        class="dna-ring"
        :class="[`ring-${i}`, { 'active': isVisible }]"
      ></div>
      
      <!-- Core Logo (Growing) -->
      <div class="core-logo" :class="{ 'visible': isVisible }">
        <img src="/images/prime-logo-hd.png" alt="Prime Medical Logo - شعار برايم ميديكال" class="logo-image">
      </div>
      
      <!-- Energy Particles -->
      <div class="particles">
        <div v-for="n in 5" :key="`p-${n}`" class="particle" :style="getParticleStyle(n)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['alive']);

const isVisible = ref(false);

const getParticleStyle = (n) => {
  return {
    animationDelay: `${n * 0.5}s`,
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 80 + 10}%`
  };
};

onMounted(() => {
  // Start Organic Growth
  setTimeout(() => {
    isVisible.value = true;
    emit('alive'); // Trigger text effect
  }, 500);
});
</script>

<style scoped>
.logo-organic-container {
  position: relative;
  width: 100%;
  height: 500px; /* Increased height container */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
}

.logo-wrapper {
  position: relative;
  width: 400px; /* Increased from 350px for better visibility */
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* DNA Rings */
.dna-ring {
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent; /* Thicker borders */
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

.ring-2 { /* Middle - The "Second Circle" */
  border-bottom-color: rgba(16, 185, 129, 0.6);
  border-right-color: rgba(16, 185, 129, 0.2);
  width: 85%;
  height: 85%;
  animation: spin 5s infinite linear reverse;
}

.ring-3 { /* Outermost */
  border-top-color: rgba(5, 150, 105, 0.4);
  width: 110%;
  height: 110%;
  border-style: dashed;
  animation: spin 10s infinite linear;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Core Logo */
.core-logo {
  width: 90%; /* Increased slightly from 85% for visual alignment */
  height: 90%;
  opacity: 0;
  transform: scale(0.5);
  transition: all 1.2s ease-out 0.3s;
  z-index: 10;
  filter: drop-shadow(0 0 20px rgba(52, 211, 153, 0.5));
}

.core-logo.visible {
  opacity: 1;
  transform: scale(1);
  animation: breathing 4s infinite ease-in-out 1.2s;
}

@keyframes breathing {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px rgba(52, 211, 153, 0.5)); }
  50% { transform: scale(1.03); filter: drop-shadow(0 0 40px rgba(52, 211, 153, 0.8)); }
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Particles */
.particle {
  position: absolute;
  width: 8px; /* Larger particles */
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
