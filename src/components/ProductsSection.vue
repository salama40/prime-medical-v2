<template>
  <section id="products" class="py-24 bg-white/90 backdrop-blur-sm">
    <div class="container mx-auto px-6">
      
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-black text-emerald-900">
          متجر <span class="text-emerald-600">المستلزمات</span>
        </h2>
        <p class="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          هذه المنتجات متاحة حالياً في مخازننا للتسليم الفوري.
          <br class="hidden md:block">
          للاطلاع على باقي المنتجات والمواصفات الكاملة، يرجى زيارة الكتالوج.
        </p>
        <div class="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="product in products" 
             :key="product.id"
             class="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
             data-aos="fade-up"
             :data-aos-delay="product.id * 100">
          
          <!-- Image Area (Store Style) -->
          <div class="relative h-72 bg-gradient-to-tr from-emerald-50 to-white flex items-center justify-center p-8 group-hover:bg-emerald-50/50 transition-colors duration-300 overflow-hidden">
            <img :src="product.image" 
                 :alt="product.name + ' - توريد جملة - Prime Medical'" 
                 :style="product.imageStyle"
                 class="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500 will-change-transform">
            
            <!-- Badge -->
            <div class="absolute top-6 right-6 bg-white/90 backdrop-blur text-emerald-700 px-3 py-1 rounded-lg text-sm font-bold shadow-sm ring-1 ring-emerald-100">
              {{ product.badge }}
            </div>
            
            <!-- Quick View Action (Overlay) -->
            <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
               <button @click="$emit('inquire', product)" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors">
                 <i class="fas fa-eye"></i> نظرة سريعة
               </button>
            </div>
          </div>
          
          <!-- Content Area -->
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-2xl font-bold text-gray-900 mb-2 truncate">{{ product.name }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 h-10">{{ product.description }}</p>
            
            <div class="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
              <!-- Fake Price/Action -->
              <div class="flex flex-col">
                <span class="text-xs text-gray-400 font-bold uppercase">الحالة</span>
                <span class="text-emerald-600 font-bold flex items-center gap-1">
                  <i class="fas fa-check-circle text-xs"></i> متوفر بالمخزن
                </span>
              </div>
              
              <button @click="$emit('inquire', product)" 
                      class="bg-gray-900 hover:bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md group-hover:scale-110">
                <i class="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Browse Full Catalog Button (New Addition) -->
      <div class="mt-16 text-center" data-aos="fade-up">
        <router-link to="/products" class="inline-flex items-center gap-3 px-8 py-4 bg-emerald-100 text-emerald-800 rounded-full font-bold text-lg hover:bg-emerald-200 transition-colors shadow-sm hover:shadow-md group">
          <span>عرض باقي المنتجات في الكتالوج</span>
          <i class="fas fa-arrow-left transform group-hover:-translate-x-1 transition-transform"></i>
        </router-link>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { products } from '../data';

defineEmits(['inquire']);
</script>
