<template>
  <section id="blog" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      
      <!-- Header -->
      <div class="text-center mb-16 space-y-4" data-aos="fade-up">
        <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm">المدونة الطبية</span>
        <h2 class="text-4xl md:text-5xl font-black text-emerald-900">
          أحدث <span class="text-emerald-600">المقالات</span> والنصائح
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">نشارككم أحدث المعلومات حول معايير السلامة وكيفية اختيار منتجات الوقاية المناسبة</p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link :to="'/blog/' + post.id" v-for="(post, index) in blogPosts" 
             :key="post.id" 
             class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
             data-aos="fade-up"
             :data-aos-delay="index * 100">
          
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img :src="post.image" :alt="post.title + ' - مدونة Prime Medical للمستلزمات الطبية'" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-lg">
              {{ post.category }}
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span class="text-white text-sm font-medium"><i class="far fa-clock ml-2"></i> {{ post.date }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
              {{ post.title }}
            </h3>
            <p class="text-gray-500 mb-6 leading-relaxed line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <div class="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
                  {{ post.author.charAt(0) }}
                </div>
                <span class="text-sm font-bold text-gray-700">{{ post.author }}</span>
              </div>
              <button class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <i class="fas fa-arrow-left"></i>
              </button>
            </div>
          </div>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { blogPosts } from '../data';
</script>
