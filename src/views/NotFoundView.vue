<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="text-center relative z-10 max-w-lg mx-auto">
      <div class="mb-8 relative inline-block">
        <h1 class="text-9xl font-black text-emerald-100 select-none">404</h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <i class="fas fa-search text-6xl text-emerald-600 opacity-80 animate-pulse"></i>
        </div>
      </div>
      
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-tajawal">هذه الصفحة غير موجودة</h2>
      
      <p class="text-gray-600 text-lg mb-8 leading-relaxed font-tajawal">
        عذراً، يبدو أنك طلبت صفحة غير صحيحة أو تم حذفها.
        <br>يمكنك العودة للصفحة الرئيسية لمتابعة تصفح منتجاتنا.
      </p>

      <router-link 
        to="/" 
        class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 font-bold text-lg group"
      >
        <i class="fas fa-home group-hover:scale-110 transition-transform"></i>
        <span>العودة للرئيسية</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple view
</script>

<style scoped>
.font-tajawal {
  font-family: 'Tajawal', sans-serif;
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

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
