<template>
  <section id="quality" class="py-24 bg-white/90 backdrop-blur-sm relative overflow-hidden font-cairo">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <!-- HEADER: Title + Partners Pill -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6 hover:bg-blue-100 transition-colors cursor-default">
          <i class="fas fa-gem"></i>
          <span>الريادة في التوريد الطبي</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
          منظومة جودة <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">لا تقبل المساومة</span>
        </h2>
        
        <!-- Floating Partners Pill -->
        <div class="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-full shadow-2xl shadow-blue-900/5 border border-white/50 p-4 transform hover:scale-[1.01] transition-transform duration-500">
           <div class="overflow-hidden relative mask-gradient">
             <div class="flex items-center space-x-12 animate-marquee whitespace-nowrap">
                <img v-for="n in 20" :key="n" :src="`/images/partners/real_partner${n}.svg`" :alt="'شريك نجاح Prime Medical ' + n" class="h-10 opacity-100 transition-all duration-300 mx-6 filter hover:scale-110">
                <img v-for="n in 20" :key="'clone-'+n" :src="`/images/partners/real_partner${n}.svg`" :alt="'شريك نجاح Prime Medical ' + n" class="h-10 opacity-100 transition-all duration-300 mx-6 filter hover:scale-110">
             </div>
           </div>
        </div>
      </div>

      <!-- BENTO GRID LAYOUT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        
        <!-- TILE 1: The Bio-Secure Supply Chain (Large) -->
        <div class="lg:col-span-8 bg-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
           <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <i class="fas fa-network-wired text-9xl text-blue-600"></i>
           </div>
           
           <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
             <span class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600"><i class="fas fa-truck-fast"></i></span>
             رحلة التوريد الذكية
           </h3>

           <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
             <!-- Connector Line -->
             <div class="hidden md:block absolute top-8 right-0 left-0 h-0.5 bg-gradient-to-l from-transparent via-blue-100 to-transparent"></div>

             <!-- Step 1 -->
             <div class="relative z-10 text-center group/step hover:-translate-y-2 transition-transform duration-300">
               <div class="w-16 h-16 mx-auto bg-white border-4 border-blue-50 rounded-2xl flex items-center justify-center text-2xl text-blue-600 mb-4 shadow-sm group-hover/step:border-blue-500 group-hover/step:shadow-lg transition-all">
                 <i class="fas fa-globe"></i>
               </div>
               <h4 class="font-bold text-lg mb-2">وكالة حصرية</h4>
               <p class="text-sm text-slate-500">استيراد مباشر من كبرى المصانع العالمية (FDA/CE)</p>
             </div>

             <!-- Step 2 -->
             <div class="relative z-10 text-center group/step hover:-translate-y-2 transition-transform duration-300 delay-100">
               <div class="w-16 h-16 mx-auto bg-white border-4 border-emerald-50 rounded-2xl flex items-center justify-center text-2xl text-emerald-600 mb-4 shadow-sm group-hover/step:border-emerald-500 group-hover/step:shadow-lg transition-all">
                 <i class="fas fa-microscope"></i>
               </div>
               <h4 class="font-bold text-lg mb-2">فحص دقيق</h4>
               <p class="text-sm text-slate-500">مطابقة صارمة للمواصفات المصرية لكل شحنة واردة</p>
             </div>

             <!-- Step 3 -->
             <div class="relative z-10 text-center group/step hover:-translate-y-2 transition-transform duration-300 delay-200">
               <div class="w-16 h-16 mx-auto bg-white border-4 border-indigo-50 rounded-2xl flex items-center justify-center text-2xl text-indigo-600 mb-4 shadow-sm group-hover/step:border-indigo-500 group-hover/step:shadow-lg transition-all">
                 <i class="fas fa-boxes-stacked"></i>
               </div>
               <h4 class="font-bold text-lg mb-2">تخزين GDP</h4>
               <p class="text-sm text-slate-500">مستودعات مرخصة ومكيفة لضمان سلامة المنتج</p>
             </div>
           </div>
        </div>

        <!-- TILE 2: Trust Standards (Tall Sidebar) -->
        <div class="lg:col-span-4 rowspan-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500">
           <!-- Decorative Glows -->
           <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500rounded-full filter blur-[80px] opacity-30"></div>

           <div>
             <h3 class="text-2xl font-bold mb-8 flex items-center gap-3 z-10 relative">
               <span class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 backdrop-blur-sm"><i class="fas fa-shield-halved"></i></span>
               شهادات الاعتماد
             </h3>
             
             <!-- Trust Badges Grid -->
             <div class="grid grid-cols-2 gap-4 relative z-10">
                <!-- GDPR -->
                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-400/30 transition-all group/badge text-center">
                   <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover/badge:scale-110 transition-transform">
                      <i class="fas fa-user-shield text-xl"></i>
                   </div>
                   <p class="font-bold text-sm text-indigo-100 font-mono">GDPR Compliant</p>
                </div>

                <!-- ISO 9001 -->
                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all group/badge text-center">
                   <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover/badge:scale-110 transition-transform">
                      <i class="fas fa-certificate text-xl"></i>
                   </div>
                   <p class="font-bold text-sm text-blue-100 font-mono">ISO 9001:2015</p>
                </div>

                <!-- ISO 27001 -->
                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-400/30 transition-all group/badge text-center">
                   <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover/badge:scale-110 transition-transform">
                      <i class="fas fa-lock text-xl"></i>
                   </div>
                   <p class="font-bold text-sm text-emerald-100 font-mono">ISO 27001</p>
                </div>

                <!-- SSL -->
                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-slate-400/30 transition-all group/badge text-center">
                   <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-400 group-hover/badge:scale-110 transition-transform">
                      <i class="fas fa-key text-xl"></i>
                   </div>
                   <p class="font-bold text-sm text-slate-300 font-mono">SSL Secure</p>
                </div>
             </div>
           </div>
           
           <div class="relative z-10 mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-sm">
             <span class="text-slate-400">رقم الترخيص:</span>
             <span class="font-mono text-emerald-400 tracking-wider">392-104-558</span>
           </div>
        </div>

        <!-- TILE 3: Live Pulse Dashboard (Bottom Span) -->
        <div class="lg:col-span-8 bg-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500" ref="statsSection">
           <div class="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <!-- Metric 1 -->
           <div class="flex-1 text-center relative z-10">
              <div class="text-4xl md:text-5xl font-black text-slate-800 mb-2 font-mono flex justify-center items-baseline gap-1">
                {{ metrics[0].displayValue }}
                <span class="text-sm font-bold text-emerald-500 bg-emerald-100 px-2 py-1 rounded-full">+</span>
              </div>
              <p class="text-slate-500 font-bold">عميل يثق بنا</p>
           </div>
           
           <!-- Divider -->
           <div class="hidden md:block w-px h-16 bg-slate-200"></div>

           <!-- Metric 2 -->
           <div class="flex-1 text-center relative z-10">
              <div class="text-4xl md:text-5xl font-black mb-2 font-mono text-blue-600">
                {{ metrics[1].displayValue }}
              </div>
              <p class="text-slate-500 font-bold">نسبة رضاء العملاء</p>
           </div>

           <!-- Divider -->
           <div class="hidden md:block w-px h-16 bg-slate-200"></div>

           <!-- Metric 3 -->
           <div class="flex-1 text-center relative z-10">
              <div class="text-4xl md:text-5xl font-black text-slate-800 mb-2 font-mono">
                {{ metrics[2].displayValue }}
              </div>
              <p class="text-slate-500 font-bold">ساعة سرعة توريد</p>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { qualityMetrics } from '../data';

const statsSection = ref(null);
const hasAnimated = ref(false);

// Reactive metrics with initial "0" values for animation
const metrics = ref(qualityMetrics.map(m => ({
  ...m,
  displayValue: '0' 
})));

const animateValue = (idx, start, end, duration, suffix = '') => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    // Ease-out easing function
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    const currentVal = Math.floor(easeProgress * (end - start) + start);
    metrics.value[idx].displayValue = currentVal + suffix;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true;
        
        // Trigger animations for each metric
        // Metric 1: Clients (500+)
        animateValue(0, 0, 500, 2000, '');
        
        // Metric 2: Satisfaction (100%)
        animateValue(1, 0, 100, 2500, '%');
        
        // Metric 3: Delivery (24hrs)
        animateValue(2, 0, 24, 1500, ' hrs');
      }
    });
  }, { threshold: 0.3 });

  if (statsSection.value) observer.observe(statsSection.value);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); } 
}
.animate-marquee {
  display: flex;
  animation: marquee 60s linear infinite;
  width: max-content;
}

.mask-gradient {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
