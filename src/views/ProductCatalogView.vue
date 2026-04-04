<template>
  <main class="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 pb-20">
    <div class="container mx-auto px-6">
      
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-4">
          قائمة <span class="text-emerald-600">المنتجات</span> الشاملة
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          جميع المنتجات المتوفرة لدينا مقسمة حسب الفئات - للطلب أو الاستفسار تواصل معنا
        </p>
        <div class="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Note about availability -->
      <div class="max-w-4xl mx-auto mb-10 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center" data-aos="fade-up">
        <p class="text-emerald-800 font-bold text-lg">
          <i class="fas fa-info-circle ml-2"></i>
          المنتجات المتاحة حالياً بالصور موجودة في 
          <a href="/#products" class="underline hover:text-emerald-600 transition">قسم المتجر</a>
        </p>
      </div>

      <!-- Categories List -->
      <div class="max-w-5xl mx-auto space-y-8">
        
        <!-- Category 1: Head & Face Protection -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🎭</span>
            <h2 class="text-3xl font-black text-gray-900">حماية الرأس والوجه</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">كمامات طبية 3 طبقات</h3>
              <p class="text-gray-600 text-sm">متوفرة بألوان: أزرق، أبيض، أخضر، أسود - للاستخدام اليومي</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">كمامة KN95 / N95</h3>
              <p class="text-gray-600 text-sm">فلترة 95% من الجزيئات - للحماية الفائقة</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">غطاء رأس (أوفر هيد)</h3>
              <p class="text-gray-600 text-sm">بونيه طبي بألوان متعددة - للمصانع والمطاعم</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">غطاء لحية</h3>
              <p class="text-gray-600 text-sm">شبكة واقية لمنع تساقط الشعر - ضروري للمصانع الغذائية</p>
            </div>
          </div>
        </div>

        <!-- Category 2: Hand Protection -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🧤</span>
            <h2 class="text-3xl font-black text-gray-900">حماية الأيدي</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">جوانتي نيتريل</h3>
              <p class="text-gray-600 text-sm">مقاوم للكيماويات - متوفر بألوان: أزرق، أسود</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">جوانتي لاتكس</h3>
              <p class="text-gray-600 text-sm">مرونة عالية وإحساس دقيق - للفحص الطبي</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">جوانتي فينيل</h3>
              <p class="text-gray-600 text-sm">اقتصادي وسهل الاستخدام - للمطاعم والكافيهات</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">جوانتي جراحي معقم</h3>
              <p class="text-gray-600 text-sm">معقم ومغلف فردياً - للجراحات والمعامل</p>
            </div>
          </div>
        </div>

        <!-- Category 3: Body & Foot Protection -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🦺</span>
            <h2 class="text-3xl font-black text-gray-900">حماية الجسم والأرجل</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">مريلة بلاستيك</h3>
              <p class="text-gray-600 text-sm">مقاومة للماء - للمطابخ والمسالخ</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">بالطو زوار</h3>
              <p class="text-gray-600 text-sm">روب خفيف للزوار والمفتشين</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">بدلة واقية كاملة (Coverall)</h3>
              <p class="text-gray-600 text-sm">حماية شاملة من الرذاذ والكيماويات</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">أكمام بلاستيك</h3>
              <p class="text-gray-600 text-sm">لحماية الساعدين من السوائل</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">غطاء حذاء</h3>
              <p class="text-gray-600 text-sm">مقاوم للانزلاق - لحماية الأرضيات</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">ملاية سرير استخدام مرة</h3>
              <p class="text-gray-600 text-sm">للعيادات ومراكز المساج</p>
            </div>
          </div>
        </div>

        <!-- Category 4: Lab & QC -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🔬</span>
            <h2 class="text-3xl font-black text-gray-900">مستلزمات المعامل والجودة</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">أكواب عينات معقمة</h3>
              <p class="text-gray-600 text-sm">لسحب عينات المكملات للاختبار</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">أطباق بتري بلاستيك</h3>
              <p class="text-gray-600 text-sm">للاختبارات البكتيرية والميكروبية</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">ماصات بلاستيك</h3>
              <p class="text-gray-600 text-sm">لنقل السوائل المخبرية بدقة</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">مسحات معقمة</h3>
              <p class="text-gray-600 text-sm">لمسح الأسطح وأخذ عينات بيئية</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">شرائط قياس pH/Chlorine</h3>
              <p class="text-gray-600 text-sm">لقياس الوسط الكيميائي ومستوى الكلور</p>
            </div>
          </div>
        </div>

        <!-- Category 5: Sanitization & Waste -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="400">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🧹</span>
            <h2 class="text-3xl font-black text-gray-900">التطهير والنفايات</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">مناديل كحولية معقمة</h3>
              <p class="text-gray-600 text-sm">كحول 70% للتعقيم الفوري</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">أكياس نفايات طبية</h3>
              <p class="text-gray-600 text-sm">برمز Biohazard - للتخلص الآمن</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">صندوق أمان للحادات</h3>
              <p class="text-gray-600 text-sm">للتخلص الآمن من الإبر والمشارط</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">رولات ورق تعقيم</h3>
              <p class="text-gray-600 text-sm">لتغليف الأدوات قبل الأوتوكلاف</p>
            </div>
          </div>
        </div>

        <!-- Category 6: Packaging & Measuring -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="500">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">📦</span>
            <h2 class="text-3xl font-black text-gray-900">التعبئة والقياس</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">أكياس سحاب شفافة</h3>
              <p class="text-gray-600 text-sm">لحفظ عينات المكملات المرجعية</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">أكياس سيليكا جل</h3>
              <p class="text-gray-600 text-sm">ماص للرطوبة - للحفاظ على جفاف المنتجات</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">مكاييل بلاستيك</h3>
              <p class="text-gray-600 text-sm">لتسهيل الجرعات داخل عبوات المكملات</p>
            </div>
          </div>
        </div>

        <!-- Category 7: First Aid -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="600">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🩹</span>
            <h2 class="text-3xl font-black text-gray-900">الإسعافات الأولية</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">بلاستر قابل للكشف</h3>
              <p class="text-gray-600 text-sm">بشريط معدني - للمصانع الغذائية</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">قطن وشاش معقم</h3>
              <p class="text-gray-600 text-sm">لتنظيف الجروح والإسعافات</p>
            </div>
          </div>
        </div>

        <!-- Category 8: Facility Hygiene -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="700">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">🧼</span>
            <h2 class="text-3xl font-black text-gray-900">نظافة المنشآت</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">صابون طبي سائل (جراكن)</h3>
              <p class="text-gray-600 text-sm">عبوات كبيرة لإعادة تعبئة الموزعات</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">كحول جيل معقم</h3>
              <p class="text-gray-600 text-sm">تركيز 70% - للموزعات في المداخل</p>
            </div>
          </div>
        </div>

        <!-- Category 9: HSE -->
        <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="800">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-emerald-100">
            <span class="text-4xl">⚠️</span>
            <h2 class="text-3xl font-black text-gray-900">السلامة المهنية</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">سدادات أذن</h3>
              <p class="text-gray-600 text-sm">للمناطق ذات الضجيج العالي</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition">
              <h3 class="font-bold text-lg text-gray-900 mb-2">ستيكرات تحذيرية</h3>
              <p class="text-gray-600 text-sm">للمناطق الخطرة والكيماويات</p>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA Section -->
      <div class="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-10 text-center shadow-2xl" data-aos="zoom-in">
        <h3 class="text-3xl font-black text-white mb-4">هل تحتاج أي من هذه المنتجات؟</h3>
        <p class="text-emerald-50 text-lg mb-6">تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك</p>
        <a href="/#contact" class="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-lg">
          <i class="fas fa-paper-plane ml-2"></i>
          تواصل معنا الآن
        </a>
      </div>

    </div>
  </main>
</template>

<script>
import AOS from 'aos';

export default {
  name: 'ProductCatalogView',
  mounted() {
    AOS.init({
      duration: 600,
      once: true
    });
  }
};
</script>
