<template>
  <!-- Fullscreen Hero with Jeton-Style Layout + Original Animated Background (Transparent) -->
  <section id="hero" class="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-transparent">
    
    <!-- Transparent Background to show AnimatedBackground from App.vue -->
    <div class="absolute inset-0 bg-white/5 z-0"></div>

    <!-- Floating Logo Background Layer Removed (Moved to AnimatedBackground) -->

    <!-- Smart Responsive Container -->
    <div class="container h-full mx-auto px-4 md:px-8 relative z-10 flex flex-col md:block pt-32 md:pt-0">
      
      <!-- 2. The Title & Content (Text Side) -->
      <div class="relative md:absolute z-20 w-full md:w-auto md:top-1/2 md:-translate-y-1/2 md:left-8 text-center md:text-left flex flex-col items-center md:items-start space-y-6" dir="ltr">
        
        <!-- H1 with Typewriter Animation -->
        <h1 class="font-black leading-[0.9] transition-all duration-300 h1-hero flex flex-col items-center md:items-start" :class="{'alive': isAlive}">
          <div class="block text-emerald-800 tracking-tighter">{{ displayedText1 }}<span class="cursor" v-if="isTyping1"></span></div>
          <div class="block text-emerald-600 tracking-tighter pl-0 md:pl-12 lg:pl-16 transition-all duration-500">{{ displayedText2 }}<span class="cursor" v-if="isTyping2"></span></div>
        </h1>
        
        <p class="text-gray-600/90 text-sm md:text-lg lg:text-xl font-bold max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-in-up uppercase tracking-wide leading-relaxed" 
           style="animation-delay: 1.2s; animation-fill-mode: forwards;">
          رواد توريد المستلزمات الطبية ومهمات الوقاية الشخصية لمصانع المكملات الغذائية والمستشفيات والعيادات والمطاعم والمطابخ الصناعية
        </p>

        <!-- 3. Action Buttons - Animated Icon & Split Effect -->
        <!-- Flex Row on Mobile to keep buttons side-by-side -->
        <div class="flex flex-row items-stretch justify-center md:justify-start gap-3 opacity-0 animate-fade-in w-full md:w-auto pt-4 px-2" 
             style="animation-delay: 1.5s; animation-fill-mode: forwards;">
          
          <!-- Button 1: Catalog -->
          <router-link to="/products" 
             @touchstart="activeBtn = 'catalog'" @touchend="activeBtn = null"
             :class="{'scale-95 shadow-emerald-500/60': activeBtn === 'catalog'}"
             class="group relative flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-3 w-auto md:w-auto min-w-0 md:min-w-[220px] px-3 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-xl rounded-2xl transition-all duration-300 overflow-visible font-bold text-xs md:text-lg
                    hover:shadow-emerald-500/60 hover:scale-105 active:scale-95">
            
            <span class="relative z-10 flex items-center gap-2">
              <i class="fas fa-box-open text-base md:text-2xl transition-all duration-500 ease-out
                        group-hover:animate-bounce group-hover:rotate-12 group-hover:scale-125
                        group-active:animate-bounce group-active:rotate-12 group-active:scale-125"
                 :class="{'animate-bounce rotate-12 scale-125': activeBtn === 'catalog'}"></i>
              <span class="whitespace-nowrap">تصفح الكتالوج</span>
            </span>
            
            <span class="absolute top-1/2 left-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
          </router-link>

          <!-- Button 2: Sample -->
          <a href="#contact" 
             @touchstart="activeBtn = 'sample'" @touchend="activeBtn = null"
             :class="{'scale-95 shadow-2xl': activeBtn === 'sample'}"
             class="group relative flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-3 w-auto md:w-auto min-w-0 md:min-w-[220px] px-3 md:px-8 py-3 md:py-4 bg-white text-emerald-700 shadow-lg rounded-2xl transition-all duration-300 overflow-hidden font-bold text-xs md:text-lg border-2 border-emerald-600
                    hover:shadow-2xl hover:scale-105 active:scale-95">
            
            <div class="absolute inset-0 w-1/2 left-0 bg-emerald-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" 
                 :class="{'translate-x-0': activeBtn === 'sample'}"></div>
            <div class="absolute inset-0 w-1/2 right-0 bg-emerald-500 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
                 :class="{'translate-x-0': activeBtn === 'sample'}"></div>
            
            <span class="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300"
                  :class="{'text-white': activeBtn === 'sample'}">
              <i class="fas fa-gift text-base md:text-xl group-hover:rotate-[360deg] transition-transform duration-700"
                 :class="{'rotate-[360deg]': activeBtn === 'sample'}"></i>
              <span class="whitespace-nowrap">احصل على عينة</span>
            </span>
          </a>
        </div>
      </div>

      <!-- 1. The Floating Logo (Visual Side) -->
      <div class="relative md:absolute mt-8 md:mt-0 w-full md:w-auto flex justify-center md:block pointer-events-none z-0 
                  md:top-[20%] md:right-0 lg:right-[5%] xl:right-[10%]">
        <div class="transform scale-90 md:scale-110 lg:scale-125 xl:scale-150 origin-center md:origin-top-right transition-transform duration-500 opacity-90 md:opacity-100">
          <ProductLoop @alive="handleAlive" />
        </div>
      </div>
    
    </div>
    
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductLoop from './ProductLoop.vue';

const isAlive = ref(false);
const displayedText1 = ref('');
const displayedText2 = ref('');
const text1 = 'Prime';
const text2 = 'Medical';
const isTyping1 = ref(true);
const isTyping2 = ref(false);
const activeBtn = ref(null);

const handleAlive = () => {
  isAlive.value = true;
  startTypewriter();
};

const startTypewriter = () => {
  // Hard Reset
  displayedText1.value = '';
  displayedText2.value = '';
  isTyping1.value = true;
  isTyping2.value = false;
  
  // Internal function to type Line 1
  let i = 0;
  const typeLine1 = () => {
    if (i < text1.length) {
      displayedText1.value += text1.charAt(i);
      i++;
      setTimeout(typeLine1, 150);
    } else {
      isTyping1.value = false;
      isTyping2.value = true;
      startLine2();
    }
  };

  // Start after a slight delay to ensure DOM is ready
  setTimeout(() => {
    typeLine1();
  }, 100);
};

const startLine2 = () => {
  let j = 0;
  const typeLine2 = () => {
    if (j < text2.length) {
      displayedText2.value += text2.charAt(j);
      j++;
      setTimeout(typeLine2, 150);
    } else {
      isTyping2.value = false;
    }
  };
  typeLine2();
};

onMounted(() => {
  // Initial state logic
});
</script>

<style scoped>
/* H1 Base Styles */
.h1-hero {
  font-size: 3.5rem; /* Mobile */
  opacity: 0;
  transform: scale(0.9) translateX(-10px);
  font-weight: 900;
}

/* Alive State */
.h1-hero.alive {
  opacity: 1;
  transform: scale(1) translateX(0);
  filter: drop-shadow(0 4px 10px rgba(255,255,255,0.8));
}

@media (min-width: 768px) {
  .h1-hero {
    font-size: 5rem; /* Tablet */
    transform: scale(0.9) translateX(-15px);
  }
}

@media (min-width: 1024px) {
  .h1-hero {
    font-size: 7rem; /* Laptop */
  }
}

@media (min-width: 1280px) {
  .h1-hero {
    font-size: 9rem; /* Desktop Large */
  }
}

/* Cursor */
.cursor {
  display: inline-block;
  background-color: #059669;
  width: 10px;
  height: 0.8em;
  animation: blink 1s step-end infinite;
  margin-left: 8px; /* Left margin for RTL awareness support if mixed */
  vertical-align: baseline;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Floating Animations for Icons */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-5deg); }
}

.animate-float-slow {
  animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 7s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out 3s infinite;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
