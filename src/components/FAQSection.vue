<template>
  <section id="faq" class="py-24 bg-emerald-900 relative overflow-hidden">
    <!-- Decor -->
    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div class="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 border-4 border-white rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-start">
        
        <!-- Header -->
        <div class="lg:w-1/3 text-white space-y-6 lg:sticky lg:top-32">
          <span class="text-emerald-400 font-bold tracking-wider uppercase text-sm">الأسئلة الشائعة</span>
          <h2 class="text-4xl md:text-5xl font-black leading-tight">
            هل لديك <br class="hidden lg:block"/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">استفسارات؟</span>
          </h2>
          <p class="text-emerald-100/80 text-lg leading-relaxed">
            جمعنا لك إجابات لأكثر الأسئلة شيوعاً. إذا لم تجد إجابتك، لا تتردد في التواصل معنا مباشرة.
          </p>
          <a href="#contact" class="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            تواصل معنا الآن
          </a>
        </div>

        <!-- FAQ List -->
        <div class="lg:w-2/3 w-full space-y-4">
          <div v-for="(faq, index) in faqs" 
               :key="faq.id"
               class="bg-emerald-800/50 backdrop-blur border border-emerald-700 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-emerald-800"
               data-aos="fade-up"
               :data-aos-delay="index * 50">
            
            <button @click="toggleFaq(faq.id)" 
                    class="w-full px-8 py-6 flex items-center justify-between text-right text-white font-bold text-lg hover:text-emerald-200 transition-colors focus:outline-none">
              <span>{{ faq.question }}</span>
              <span class="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center transition-transform duration-300"
                    :class="{ 'rotate-180 bg-emerald-500': openFaq === faq.id }">
                <i class="fas fa-chevron-down text-sm"></i>
              </span>
            </button>
            
            <div class="transition-all duration-300 ease-in-out overflow-hidden"
                 :style="{ maxHeight: openFaq === faq.id ? '200px' : '0' }">
              <div class="px-8 pb-8 text-emerald-100 leading-relaxed border-t border-emerald-700/50 pt-4">
                {{ faq.answer }}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { faqs } from '../data';

const openFaq = ref(1); // First one open by default

const toggleFaq = (id) => {
  openFaq.value = openFaq.value === id ? null : id;
};
</script>
