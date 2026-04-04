<template>
  <section id="features" class="py-24 bg-white/90 backdrop-blur-sm relative overflow-hidden font-cairo">
    <!-- Abstract Background Shapes -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
       <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[100px] animate-pulse-slow"></div>
       <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-50/50 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <span class="inline-block py-2 px-5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 border border-blue-100">
          ✨ لماذا نحن؟
        </span>
        <h2 class="text-5xl font-black text-slate-800 mb-6 leading-tight">
          نقدم لك أكثر من مجرد منتجات<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">نقدم لك شراكة نجاح</span>
        </h2>
        <p class="text-xl text-slate-500 max-w-2xl mx-auto">
          صممنا خدماتنا خصيصاً لتلبية احتياجات المستشفيات والمراكز الطبية بأعلى كفاءة وأفضل تكلفة.
        </p>
      </div>
      
      <!-- 3D Holographic Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1: Fast Delivery -->
        <div class="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
           <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
           <div class="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl text-blue-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
             <i class="fas fa-truck-fast"></i>
           </div>
           <h3 class="text-2xl font-bold text-slate-800 mb-3">توصيل سريع (24-48 ساعة)</h3>
           <p class="text-slate-500 leading-relaxed">شبكة لوجستية ذكية تغطي جميع محافظات الجمهورية، نضمن وصول طلبيتك في وقت قياسي.</p>
        </div>

        <!-- Feature 2: Free Samples -->
        <div class="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
           <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
           <div class="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-4xl text-purple-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
             <i class="fas fa-gift"></i>
           </div>
           <h3 class="text-2xl font-bold text-slate-800 mb-3">عينات مجانية قبل الشراء</h3>
           <p class="text-slate-500 leading-relaxed">اطلب عينة مجانية من أي منتج لتتأكد من الجودة والمواصفات بنفسك قبل التعميد النهائي.</p>
        </div>

        <!-- Feature 3: Wholesale Prices -->
        <div class="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
           <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
           <div class="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-4xl text-emerald-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
             <i class="fas fa-money-bill-wave"></i>
           </div>
           <h3 class="text-2xl font-bold text-slate-800 mb-3">أسعار جملة تنافسية</h3>
           <p class="text-slate-500 leading-relaxed">نوفر لك أفضل الأسعار في السوق بفضل شراكاتنا المباشرة مع المصانع، مع مرونة في أنظمة الدفع.</p>
        </div>

        <!-- Feature 4: 24/7 Support -->
        <div class="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
           <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
           <div class="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center text-4xl text-pink-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
             <i class="fas fa-headset"></i>
           </div>
           <h3 class="text-2xl font-bold text-slate-800 mb-3">دعم فني وطبي 24/7</h3>
           <p class="text-slate-500 leading-relaxed">فريقنا يضم صيادلة ومتخصصين جاهزين للرد على استفساراتك الفنية وحل أي مشكلة فوراً.</p>
        </div>

        <!-- Feature 5: Quality Guarantee -->
        <div class="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
           <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
           <div class="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-4xl text-orange-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
             <i class="fas fa-shield-check"></i>
           </div>
           <h3 class="text-2xl font-bold text-slate-800 mb-3">ضمان استبدال واسترجاع</h3>
           <p class="text-slate-500 leading-relaxed">سياسة مرنة تضمن حقك في استبدال أو استرجاع أي منتج به عيب صناعة أو سوء تخزين.</p>
        </div>

        <!-- Feature 6: Free Consultation -->
        <div class="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
           <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
           <div class="w-20 h-20 bg-cyan-50 rounded-2xl flex items-center justify-center text-4xl text-cyan-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
             <i class="fas fa-user-doctor"></i>
           </div>
           <h3 class="text-2xl font-bold text-slate-800 mb-3">استشارات مجانية</h3>
           <p class="text-slate-500 leading-relaxed">نساعدك في اختيار المنتجات الأنسب لتخصصك والميزانية المتاحة لتعظيم أرباحك.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.1;
  }
}
</style>
