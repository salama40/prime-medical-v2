<template>
  <section id="about" class="py-24 bg-white/90 backdrop-blur-sm overflow-hidden relative">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 skew-x-12 translate-x-20"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Title -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-black text-emerald-800 mb-4">من نحن</h2>
        <div class="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-16">
        
        <!-- Content -->
        <div class="lg:w-1/2 space-y-8" data-aos="fade-right">
          <div class="space-y-4">
            <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm">عن الشركة</span>
            <h3 class="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              {{ aboutUs.story.title.replace('من نحن - ', '') }}
            </h3>
            <div class="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
          </div>
          
          <p class="text-xl text-gray-600 leading-relaxed text-justify">
            {{ aboutUs.story.description }}
          </p>

          <div class="p-6 bg-emerald-900 text-white rounded-2xl shadow-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            <h4 class="text-xl font-bold mb-2 flex items-center gap-2">
              <i class="fas fa-eye text-emerald-400"></i> رؤيتنا
            </h4>
            <p class="text-emerald-100 leading-relaxed">{{ aboutUs.story.vision }}</p>
          </div>

          <!-- Button Removed -->
        </div>

        <!-- Stats Grid -->
        <div class="lg:w-1/2" data-aos="fade-left">
          <div class="grid grid-cols-2 gap-6">
            <div v-for="(stat, index) in aboutUs.stats" 
                 :key="stat.id"
                 class="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                 :class="{ 'mt-12': index % 2 !== 0 }">
              <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{{ stat.icon }}</div>
              <div class="text-4xl font-black text-emerald-600 mb-2 counter">{{ stat.number }}</div>
              <div class="text-gray-500 font-bold">{{ stat.label }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutUs } from '../data';
</script>
