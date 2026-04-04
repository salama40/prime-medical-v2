<template>
  <section id="contact" class="py-24 bg-white/90 backdrop-blur-sm relative overflow-hidden font-cairo">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-5xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16" data-aos="fade-up">
           <span class="inline-block py-2 px-5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm mb-6 border border-emerald-100">
            👋 تواصل معنا
          </span>
          <h2 class="text-5xl font-black text-slate-800 mb-6">ابدأ شراكتنا <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">اليوم</span></h2>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto">
            املأ النموذج التالي، وسيتم تحويل طلبك مباشرة إلى فريق المبيعات عبر واتساب لسرعة التجاوب.
          </p>
        </div>
        
        <div class="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-white/50 relative overflow-hidden" data-aos="zoom-in">
          <!-- Glossy Reflection -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <form @submit.prevent="sendToWhatsApp">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Factory Name -->
              <div class="group">
                <label class="block text-slate-700 font-bold mb-3 text-sm">اسم المنشأة الطبية / الشركة</label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <i class="fas fa-building"></i>
                  </div>
                  <input v-model="formData.factoryName" type="text" required
                         class="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400"
                         placeholder="مثال: مستشفى الأمل">
                </div>
              </div>
              
              <!-- Contact Person -->
              <div class="group">
                <label class="block text-slate-700 font-bold mb-3 text-sm">اسم المسؤول</label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <i class="fas fa-user"></i>
                  </div>
                  <input v-model="formData.contactPerson" type="text" required
                         class="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400"
                         placeholder="د. محمد علي">
                </div>
              </div>
              
              <!-- Phone -->
              <div class="group">
                <label class="block text-slate-700 font-bold mb-3 text-sm">رقم الجوال (واتساب)</label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <i class="fas fa-phone"></i>
                  </div>
                  <input v-model="formData.phone" type="tel" required
                         class="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400 font-mono dir-ltr text-right"
                         placeholder="05XXXXXXXX">
                </div>
              </div>
              
              <!-- Location -->
              <div class="group">
                <label class="block text-slate-700 font-bold mb-3 text-sm">المدينة / المنطقة</label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <i class="fas fa-location-dot"></i>
                  </div>
                  <input v-model="formData.location" type="text" required
                         class="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400"
                         placeholder="القاهرة، مدينة نصر">
                </div>
              </div>
              
              <!-- Quantity -->
              <div class="group">
                <label class="block text-slate-700 font-bold mb-3 text-sm">الكمية المطلوبة (تقريباً)</label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <i class="fas fa-layer-group"></i>
                  </div>
                  <select v-model="formData.quantity" required
                          class="w-full pr-12 pl-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400 appearance-none text-slate-600">
                    <option value="" disabled selected>اختر الكمية المتوقعة</option>
                    <option value="تجريبي (أقل من 1000)">كمية تجريبية (أقل من 1000)</option>
                    <option value="صغير (1000 - 5000)">طلب صغير (1000 - 5000)</option>
                    <option value="متوسط (5000 - 10000)">طلب متوسط (5000 - 10000)</option>
                    <option value="كبير (أكثر من 10000)">طلب كبير (أكثر من 10000)</option>
                  </select>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <i class="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

            </div>
            
            <!-- Products Selection -->
            <div class="mt-10">
              <label class="text-slate-700 font-bold mb-4 text-sm flex items-center gap-2">
                <i class="fas fa-boxes-stacked text-emerald-500"></i>
                المنتجات المهتم بها
              </label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label v-for="product in products" :key="product.id" 
                       class="relative group cursor-pointer">
                  <input type="checkbox" :value="product.name" v-model="formData.productsNeeded" class="peer sr-only">
                  <div class="p-4 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-600 text-center transition-all duration-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 font-bold hover:bg-white hover:shadow-md">
                     {{ product.name }}
                  </div>
                  <div class="absolute top-2 right-2 w-4 h-4 bg-emerald-500 rounded-full text-white text-[10px] flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                    <i class="fas fa-check"></i>
                  </div>
                </label>
              </div>
            </div>
            
            <!-- Submit Button (WhatsApp) -->
            <div class="mt-12 text-center">
              <button type="submit" 
                      class="w-full md:w-auto px-12 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-black text-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <i class="fab fa-whatsapp text-3xl"></i>
                <span>إرسال الطلب عبر واتساب</span>
              </button>
              <p class="mt-4 text-slate-400 text-sm">سيقوم التطبيق بفتح محادثة واتساب مع فريق المبيعات مباشرة</p>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { products } from '../data';

const formData = reactive({
  factoryName: '',
  contactPerson: '',
  phone: '',
  location: '',
  quantity: '',
  productsNeeded: [],
});

const sendToWhatsApp = () => {
  // Construct the message
  const productsList = formData.productsNeeded.length > 0 
    ? formData.productsNeeded.join('، ') 
    : 'غير محدد';

  const message = `
*طلب تسعير جديد من الموقع* 📄
---------------------------
👤 *الاسم:* ${formData.contactPerson}
🏢 *المنشأة:* ${formData.factoryName}
📱 *رقم الجوال:* ${formData.phone}
📍 *الموقع:* ${formData.location}

� *الكمية المطلوبة:* ${formData.quantity}
📦 *المنتجات:* ${productsList}

---------------------------
يرجى التواصل معي لإتمام الطلب.
  `.trim();

  // Encode the message
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp Link (Replace with actual admin number)
  const adminPhone = '201121838060'; // Placeholder - CHANGE THIS
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

  // Open in new tab
  window.open(whatsappUrl, '_blank');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');

.font-cairo {
  font-family: 'Cairo', sans-serif;
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

.dir-ltr {
  direction: ltr;
}
</style>
