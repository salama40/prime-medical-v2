<template>
  <main class="pt-24 min-h-screen bg-gray-50 pb-20">

    <div v-if="post" class="container mx-auto px-6">
      
      <!-- Back Button -->
      <router-link to="/blog" class="inline-flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-4 transition-all">
        <i class="fas fa-arrow-right"></i>
        <span>عودة للمقالات</span>
      </router-link>

      <!-- Article Header -->
      <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <img :src="post.image" :alt="post.title + ' - مقال Prime Medical'" class="w-full h-80 md:h-96 object-cover">
        
        <div class="p-8 md:p-12">
          <div class="flex flex-wrap gap-4 mb-6">
            <span class="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold">{{ post.category }}</span>
            <span class="text-gray-500 font-medium flex items-center gap-2"><i class="far fa-calendar"></i> {{ post.date }}</span>
            <span class="text-gray-500 font-medium flex items-center gap-2"><i class="far fa-user"></i> {{ post.author }}</span>
          </div>
          
          <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">{{ post.title }}</h1>
          
          <div class="prose prose-lg prose-emerald max-w-none text-gray-600 leading-relaxed">
            <p class="font-bold text-xl text-gray-800 mb-6">{{ post.excerpt }}</p>
            
            <div v-if="post.content" v-html="post.content"></div>
            
            <div v-if="!post.content">
              <p>نحن نعمل حالياً على إعداد هذا المقال التفصيلي. سيتضمن قريباً معلومات شاملة وبيانات فنية دقيقة.</p>
              <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">نقاط رئيسية سنغطيها:</h3>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>معايير الجودة والتوريد.</li>
                <li>التسعير الاقتصادي للكميات.</li>
                <li>نصائح عملية لمديري المشتريات.</li>
              </ul>
            </div>

            <div class="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 class="font-bold text-lg text-emerald-900 mb-2">هل تحتاج استشارة في التوريد؟</h4>
              <p class="text-emerald-700 mb-4">فريقنا جاهز للرد على استفساراتك الفنية والتجارية بخصوص هذا الموضوع.</p>
              <a href="/#contact" class="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-700 transition">تواصل معنا الآن</a>
            </div>
          </div>

        </div>
      </div>

    </div>
    
    <!-- Loading / Error State -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div v-if="loading" class="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mb-6"></div>
      <div v-else>
        <span class="text-6xl mb-4 block">😕</span>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">عفواً، لم يتم العثور على المقال</h2>
        <p class="text-gray-500 mb-8">ربما تم حذف الرابط أو أنه غير صحيح.</p>
        <router-link to="/blog" class="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg">
          تصفح كل المقالات
        </router-link>
        <div class="mt-8 p-4 bg-gray-100 rounded text-left text-xs font-mono text-gray-500 dir-ltr">
          Debug: ID={{ $route.params.id }}, Posts={{ blogPosts?.length }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { blogPosts } from '../data';

const route = useRoute();
const loading = ref(true);
const post = ref(null);

watchEffect(() => {
    loading.value = true;
    const id = route.params.id;
    if (blogPosts && id) {
        // Use loose equality to match string ID from router with number ID in data
        post.value = blogPosts.find(p => p.id == id);
    }
    loading.value = false;
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
