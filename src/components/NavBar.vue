<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent', (isScrolled || route.path !== '/') ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 md:py-6']">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Right Side: Mobile Toggle & Social (Desktop) -->
        <div class="flex items-center gap-4">
           <!-- Social Icons (Desktop Only) -->
           <div class="hidden md:flex items-center gap-x-3">
              <a href="https://instagram.com/primemedical" target="_blank" 
                 class="w-9 h-9 rounded-full bg-white backdrop-blur text-emerald-600 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] hover:text-white hover:scale-110 shadow-md">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/primemedical" target="_blank" 
                 class="w-9 h-9 rounded-full bg-white backdrop-blur text-emerald-600 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:scale-110 shadow-md">
                <i class="fab fa-facebook-f"></i>
              </a>
           </div>
          
          <!-- Mobile Toggle Button -->
          <button @click="toggleMobileMenu" 
                  class="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-sm text-emerald-700 text-xl focus:outline-none transition-all active:scale-90"
                  aria-label="Toggle Menu">
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>

        <!-- Center: Desktop Menu -->
        <div class="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          <template v-for="link in navLinks" :key="link.id">
            <!-- Skip 'Contact Us' in main menu as it might be redundant or styled differently if desired, but keeping all for now based on request -->
            <router-link 
              v-if="!link.href.startsWith('#')"
              :to="link.href"
              class="text-sm font-medium transition-colors duration-300 hover:opacity-75 relative group"
              :class="isScrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
              active-class="text-emerald-600 font-bold"
            >
              {{ link.text }}
              <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </router-link>
            
            <a 
              v-else
              :href="link.href"
              class="text-sm font-medium transition-colors duration-300 hover:opacity-75 relative group"
              :class="isScrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
            >
              {{ link.text }}
              <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </template>
        </div>

        <!-- Left Side: Branding -->
        <router-link to="/" class="flex items-center gap-2 md:gap-3 group" dir="ltr">
          <div class="relative overflow-hidden w-10 h-10 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
             <img src="/images/prime-logo-hd.png" alt="Prime Medical - توريد مستلزمات طبية ومهمات وقاية" class="w-full h-full object-contain p-1 transform group-hover:scale-110 transition-transform duration-300">
          </div>
          <span class="text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300" 
             :class="isScrolled ? 'text-gray-900' : 'text-gray-800'">
            Prime<span class="text-emerald-600">Medical</span>
          </span>
        </router-link>
        
      </div>
      
      <!-- Mobile Menu Overlay (Full Screen) -->
      <transition 
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="fixed inset-0 top-[70px] bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-start pt-12 space-y-6 md:hidden overflow-y-auto">
          
          <template v-for="link in navLinks" :key="link.id">
            <router-link 
              v-if="!link.href.startsWith('#')"
              :to="link.href"
              @click="closeMobileMenu"
              class="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors w-full text-center py-2"
              active-class="text-emerald-600 bg-emerald-50"
            >
              {{ link.text }}
            </router-link>
            <a 
              v-else
              :href="link.href"
              @click="closeMobileMenu"
              class="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors w-full text-center py-2"
            >
               {{ link.text }}
            </a>
          </template>

          <div class="flex items-center gap-6 mt-8 pt-8 border-t border-gray-100 w-2/3 justify-center">
              <a href="https://instagram.com/primemedical" target="_blank" class="text-3xl text-emerald-600 hover:scale-110 transition-transform"><i class="fab fa-instagram"></i></a>
              <a href="https://facebook.com/primemedical" target="_blank" class="text-3xl text-emerald-600 hover:scale-110 transition-transform"><i class="fab fa-facebook-f"></i></a>
          </div>
          
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { navLinks } from '../data';

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent scrolling when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Close menu on route change
watch(route, () => {
  closeMobileMenu();
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
