<template>
  <div class="font-tajawal overflow-x-hidden dir-rtl" dir="rtl">
    <!-- 3D Animated Background -->
    <AnimatedBackground />
    
    <NavBar />
    
    <!-- Router View for Page Content -->
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.fullPath" />
    </router-view>

    <FooterSection />

    <!-- Back to Top Button -->
    <transition name="fade">
      <button 
        v-if="showBackToTop" 
        @click="scrollToTop" 
        class="fixed bottom-8 left-8 z-50 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 focus:outline-none"
        aria-label="Back to Top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter
import AnimatedBackground from './components/AnimatedBackground.vue';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

import AOS from 'aos';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter(); // Initialize router
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Force redirect to home on reload/initial load
  router.push('/');

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
