<template>
  <section class="py-12 bg-slate-50 border-t border-slate-200">
    <div class="container mx-auto px-6">
      <div class="text-center mb-10">
        <h3 class="text-2xl font-bold text-slate-800 mb-2 font-cairo">معايير الامتثال والجودة</h3>
        <p class="text-slate-500">نلتزم بأعلى المعايير العالمية لضمان سلامة وخصوصية عملائنا</p>
      </div>
      
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
        
        <!-- GDPR -->
        <div class="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105">
          <div class="w-20 h-20 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-indigo-500 transition-all">
            <i class="fas fa-shield-halved text-4xl text-indigo-600"></i>
          </div>
          <span class="text-sm font-bold text-slate-600 font-mono">GDPR Compliant</span>
        </div>

        <!-- ISO 9001 -->
        <div class="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105">
          <div class="w-20 h-20 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-blue-500 transition-all">
            <i class="fas fa-certificate text-4xl text-blue-600"></i>
          </div>
          <span class="text-sm font-bold text-slate-600 font-mono">ISO 9001:2015</span>
        </div>

        <!-- ISO 27001 -->
        <div class="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105">
          <div class="w-20 h-20 rounded-full bg-white border-2 border-emerald-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-emerald-500 transition-all">
            <i class="fas fa-lock text-4xl text-emerald-600"></i>
          </div>
          <span class="text-sm font-bold text-slate-600 font-mono">ISO 27001</span>
        </div>

        <!-- SSL Secure -->
        <div class="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105">
          <div class="w-20 h-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-slate-500 transition-all">
            <i class="fas fa-key text-4xl text-slate-600"></i>
          </div>
          <span class="text-sm font-bold text-slate-600 font-mono">SSL Secure</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>
