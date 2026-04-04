<template>
  <footer class="bg-slate-900 text-slate-300 py-16 relative overflow-hidden font-cairo border-t border-slate-800">
    
    <!-- Background Glows -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-4 gap-12 mb-16">
        
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20">
              <i class="fas fa-prescription-bottle-medical"></i>
            </div>
            <h3 class="text-2xl font-black text-white tracking-wide">Prime<span class="text-emerald-400">Medical</span></h3>
          </div>
          <p class="text-slate-400 leading-relaxed mb-6 text-sm">
            شريكك الاستراتيجي في توريد المستلزمات الطبية ومهمات الوقاية. نلتزم بأعلى معايير الجودة العالمية لضمان سلامة الجميع.
          </p>
          <!-- Social Media -->
          <div class="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61586857182213" target="_blank" class="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/prim_emedical?igsh=MXkwbjl5ZHE1c2dkNw==" target="_blank" class="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6 relative inline-block">
            روابط سريعة
            <span class="absolute bottom-[-8px] right-0 w-8 h-1 bg-emerald-500 rounded-full"></span>
          </h4>
          <ul class="space-y-4">
            <li><a href="#hero" class="hover:text-emerald-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-left text-xs text-slate-600"></i> الرئيسية</a></li>
            <li><a href="#products" class="hover:text-emerald-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-left text-xs text-slate-600"></i> منتجاتنا</a></li>
            <li><a href="#quality" class="hover:text-emerald-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-left text-xs text-slate-600"></i> معايير الجودة</a></li>
            <li><a href="#features" class="hover:text-emerald-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-left text-xs text-slate-600"></i> لماذا نحن؟</a></li>
          </ul>
        </div>
        
        <!-- Products -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6 relative inline-block">
            أهم المنتجات
            <span class="absolute bottom-[-8px] right-0 w-8 h-1 bg-blue-500 rounded-full"></span>
          </h4>
          <ul class="space-y-4">
            <li class="hover:text-blue-400 transition-colors cursor-pointer">كمامات طبية 3 طبقات</li>
            <li class="hover:text-blue-400 transition-colors cursor-pointer">جوانتيات لاتكس ونيتريل</li>
            <li class="hover:text-blue-400 transition-colors cursor-pointer">أغطية رأس (Overhead)</li>
            <li class="hover:text-blue-400 transition-colors cursor-pointer">أغطية أحذية (Overshoe)</li>
            <li class="hover:text-blue-400 transition-colors cursor-pointer">أرواب جراحية معقمة</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-bold text-lg mb-6 relative inline-block">
            تواصل معنا
            <span class="absolute bottom-[-8px] right-0 w-8 h-1 bg-emerald-500 rounded-full"></span>
          </h4>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-emerald-500 shrink-0">
                <i class="fas fa-phone-flip"></i>
              </div>
              <div>
                <p class="text-xs text-slate-500 font-bold mb-1">اتصل بنا</p>
                <div class="font-mono dir-ltr text-white hover:text-emerald-400 transition-colors">+20 112 183 8060</div>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-500 shrink-0">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <p class="text-xs text-slate-500 font-bold mb-1">البريد الإلكتروني</p>
                <a href="mailto:sales@primemedical.com" class="font-mono text-white hover:text-blue-400 transition-colors">sales@primemedical.com</a>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-purple-500 shrink-0">
                <i class="fas fa-location-dot"></i>
              </div>
              <div>
                <p class="text-xs text-slate-500 font-bold mb-1">المقر الرئيسي</p>
                <p class="text-white">القاهرة، مصر</p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          © {{ new Date().getFullYear() }} <span class="text-white font-bold">Prime Medical</span>. جميع الحقوق محفوظة.
        </p>
        <div class="flex gap-6 text-sm text-slate-500">
          <a href="#" @click.prevent="openModal('privacy')" class="hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="#" @click.prevent="openModal('terms')" class="hover:text-white transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </div>

    <!-- Legal Modal -->
    <Transition name="fade">
      <div v-if="activeModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeModal"></div>
        
        <!-- Content -->
        <div class="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl relative z-10 flex flex-col animate-scale-up">
          
          <!-- Header -->
          <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 class="text-xl font-bold text-slate-800">{{ modalTitle }}</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-full bg-slate-200 hover:bg-red-100 hover:text-red-500 flex items-center justify-center transition-colors">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Body -->
          <div class="p-8 overflow-y-auto text-slate-600 leading-relaxed text-right">
            <div v-if="activeModal === 'privacy'" class="space-y-4">
              <h4 class="font-bold text-slate-800">1. جمع البيانات</h4>
              <p>نحن نقوم بجمع البيانات التي تقدمها لنا طوعاً (مثل الاسم، رقم الهاتف، والبريد الإلكتروني) لغرض تحسين تجربتك وتلبية طلباتك.</p>
              
              <h4 class="font-bold text-slate-800">2. استخدام المعلومات</h4>
              <p>نستخدم بياناتك للتواصل معك بخصوص طلباتك، ولن نقوم أبداً ببيع أو مشاركة بياناتك مع أي طرف ثالث لأغراض تسويقية دون موافقتك.</p>
              
              <h4 class="font-bold text-slate-800">3. أمن البيانات</h4>
              <p>نتبع معايير أمان صارمة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفشاء.</p>
            </div>

            <div v-if="activeModal === 'terms'" class="space-y-4">
              <h4 class="font-bold text-slate-800">1. الموافقة على الشروط</h4>
              <p>باستخدامك لموقع Prime Medical، فإنك توافق على الالتزام بهذه الشروط والأحكام.</p>
              
              <h4 class="font-bold text-slate-800">2. حقوق الملكية</h4>
              <p>جميع المحتويات المعروضة على هذا الموقع (نصوص، صور، شعارات) هي ملك لشركة Prime Medical ومحمية بقوانين حقوق النشر.</p>
              
              <h4 class="font-bold text-slate-800">3. إخلاء المسؤولية</h4>
              <p>نحن نسعى لضمان دقة المعلومات، ولكن لا نتحمل مسؤولية أي أخطاء غير مقصودة في مواصفات المنتجات أو الأسعار.</p>
            </div>
          </div>

          <!-- Footer -->
          <div class="p-6 border-t border-slate-100 bg-slate-50 text-center">
            <button @click="closeModal" class="px-8 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-bold">
              إغلاق
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </footer>

  <!-- WhatsApp Float Button -->
  <a href="https://wa.me/201155161412?text=مرحباً، أرغب في الاستفسار عن منتجات Prime Medical" 
     target="_blank"
     class="whatsapp-float fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce-slow group">
    <i class="fab fa-whatsapp text-4xl"></i>
    <!-- Tooltip -->
    <span class="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      تواصل معنا الآن 💬
    </span>
  </a>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeModal = ref(null);

const modalTitle = computed(() => {
  if (activeModal.value === 'privacy') return 'سياسة الخصوصية';
  if (activeModal.value === 'terms') return 'الشروط والأحكام';
  return '';
});

const openModal = (type) => {
  activeModal.value = type;
  document.body.style.overflow = 'hidden'; // Prevent scrolling
};

const closeModal = () => {
  activeModal.value = null;
  document.body.style.overflow = 'auto'; // Restore scrolling
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');

.font-cairo {
  font-family: 'Cairo', sans-serif;
}

.dir-ltr {
  direction: ltr;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

/* Modal Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-scale-up {
  animation: scaleUp 0.3s ease-out;
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
