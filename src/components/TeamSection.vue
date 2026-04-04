<template>
  <section id="team" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      
      <!-- Header -->
      <div class="text-center mb-16 space-y-4" data-aos="fade-up">
        <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm">فريق العمل</span>
        <h2 class="text-4xl md:text-5xl font-black text-emerald-900">
          خبراء في <span class="text-emerald-600">خدمتكم</span>
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">فريق متكامل من المتخصصين لضمان أفضل جودة وخدمة</p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(member, index) in teamMembers" 
             :key="member.id"
             class="group relative"
             data-aos="fade-up"
             :data-aos-delay="index * 100">
          
          <!-- Image Wrapper -->
          <div class="relative h-96 rounded-3xl overflow-hidden mb-6 shadow-lg bg-gray-100">
            <img :src="member.image" :alt="member.name + ' - فريق عمل Prime Medical'" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500">
            
            <!-- Overlay Info -->
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
              <p class="text-sm opacity-90 leading-relaxed mb-4">{{ member.bio }}</p>
              <div class="flex gap-3">
                <a href="#" class="w-8 h-8 rounded-full bg-white/20 hover:bg-emerald-500 flex items-center justify-center transition-colors"><i class="fab fa-linkedin-in text-sm"></i></a>
                <a href="#" class="w-8 h-8 rounded-full bg-white/20 hover:bg-emerald-500 flex items-center justify-center transition-colors"><i class="fab fa-twitter text-sm"></i></a>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">{{ member.name }}</h3>
            <span class="text-sm font-bold text-gray-400 uppercase tracking-wider">{{ member.role }}</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { teamMembers } from '../data';
</script>
