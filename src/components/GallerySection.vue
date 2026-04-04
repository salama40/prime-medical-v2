<template>
  <section id="gallery" class="py-24 bg-gray-900 relative">
    
    <!-- Header -->
    <div class="container mx-auto px-6 mb-12">
      <div class="text-center space-y-4" data-aos="fade-up">
        <span class="text-emerald-400 font-bold tracking-wider uppercase text-sm">معرض الأعمال</span>
        <h2 class="text-4xl md:text-5xl font-black text-white">
          جولة في <span class="text-emerald-500">عالمنا</span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          نقدم لكم نظرة شاملة على أحدث الأجهزة والمستلزمات الطبية التي نوفرها لعملائنا
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-4 mt-10" data-aos="fade-up" data-aos-delay="100">
        <button v-for="category in categories" 
                :key="category.value"
                @click="activeCategory = category.value"
                class="px-6 py-2 rounded-full font-bold transition-all duration-300 border-2"
                :class="activeCategory === category.value 
                  ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-emerald-500 hover:text-white'">
          {{ category.label }}
        </button>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="container mx-auto px-6">
      <transition-group name="gallery-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in filteredItems" 
             :key="item.id"
             class="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-gray-800 border border-gray-700"
             >
          
          <img :src="item.image" :alt="item.title + ' - معرض صور Prime Medical'" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">{{ getCategoryLabel(item.category) }}</span>
            <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
          </div>

          <!-- Zoom Icon -->
          <div class="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-emerald-500 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <i class="fas fa-search-plus"></i>
          </div>

        </div>
      </transition-group>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { galleryItems } from '../data';

const activeCategory = ref('all');

const categories = [
  { label: 'الكل', value: 'all' },
  { label: 'أجهزة طبية', value: 'devices' },
  { label: 'مستلزمات', value: 'supplies' },
  { label: 'تعقيم', value: 'sterilization' },
  { label: 'جراحة', value: 'surgery' }
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems;
  }
  return galleryItems.filter(item => item.category === activeCategory.value);
});

const getCategoryLabel = (catValue) => {
  const cat = categories.find(c => c.value === catValue);
  return cat ? cat.label : catValue;
};
</script>

<style scoped>
.gallery-fade-move,
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: all 0.5s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.gallery-fade-leave-active {
  position: absolute;
  width: 100%; /* Important for smooth reflow */
}
</style>
