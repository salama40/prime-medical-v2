export const posts2 = [
    {
        id: 11,
        title: 'طرق التعقيم الصناعي: غاز ETO مقابل أشعة جاما (Gamma)',
        excerpt: 'كيف يتم تعقيم المستلزمات قبل وصولها إليك؟ ومزايا وعيوب كل طريقة.',
        image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&fit=crop',
        date: '25 ديسمبر 2025',
        author: 'أ. استشاري تعقيم',
        category: 'تكنولوجيا طبية',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">عندما تفتح عبوة "معقمة" (Sterile Pack) في غرفة العمليات، هل تساءلت يوماً: كيف تم القضاء على جميع الميكروبات داخل هذا الكيس المغلق؟</p>
            
            <p class="mb-6 leading-relaxed">التعقيم الصناعي للمستلزمات الطبية يتم بطريقتين رئيسيتين، ولكل منهما استخداماته الخاصة. الاختيار الخاطئ قد يؤدي لتلف المنتج أو عدم كفاءة التعقيم.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">1. غاز أكسيد الإيثيلين (EtO - Ethylene Oxide)</h3>
            <p class="mb-2">هو المعيار الذهبي لتعقيم البلاستيكات الحساسة.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>الآلية:</strong> يتم ضخ الغاز داخل غرفة مغلقة، فيتغلغل عبر مسام ورق التغليف (Medical Paper) ويقتل الميكروبات بتفاعل كيميائي (Alkylation).</li>
                <li><strong>المميزات:</strong> لا يرفع درجة الحرارة، مما يجعله مثالياً للسرنجات، القسطرات، والوصلات البلاستيكية التي قد تنصهر بالحرارة.</li>
                <li><strong>العيوب:</strong> يتطلب عملية "تهوية" (Aeration) طويلة لمدة 48 ساعة لإزالة بقايا الغاز السامة من المنتج قبل شحنه.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">2. أشعة جاما (Gamma Irradiation)</h3>
            <p class="mb-2">استخدام الطاقة النووية (الكوبالت 60) للتعقيم.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>الآلية:</strong> يتم تعريض كراتين الشحن بالكامل للإشعاع، الذي يخترق العبوات ويقتل الحمض النووي (DNA) للبكتيريا فوراً.</li>
                <li><strong>المميزات:</strong> سريع جداً، لا يترك أي بقايا كيميائية، ويمكن تعقيم المنتج وهو "داخل الكرتونة النهائية".</li>
                <li><strong>العيوب:</strong> الإشعاع قد يغير خواص بعض أنواع البلاستيك (يسبب اصفرار أو ضعف في المتانة)، لذا لا يصلح لكل المنتجات.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">كيف تتأكد؟</h3>
            <p>انظر إلى علامة التعقيم على العبوة. ستجد إما رمز "STERILE EO" أو "STERILE R". وتأكد من تغير لون "الشريط الكيميائي" (Indicator Tape) من الأزرق للأسود (في حالة البخار) أو من الأحمر للأخضر (حسب نوع المؤشر) كدليل على إتمام العملية.</p>
        `
    },
    {
        id: 12,
        title: 'مستويات الحماية للجاونات (AAMI Levels)',
        excerpt: 'شرح مبسط للحماية الطبية حسب معايير AAMI.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&fit=crop',
        date: '20 ديسمبر 2025',
        author: 'فريق الجودة',
        category: 'معايير عالمية',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">ليس كل رداء طبي (Gown) يصلح لكل عملية. منظمة AAMI الأمريكية وضعت 4 مستويات قياسية لتصنيف الملابس الواقية بناءً على ضغط السوائل.</p>

            <div class="space-y-6 mb-8">
                <div class="border-l-4 border-gray-400 pl-4 py-2">
                    <strong class="text-gray-900 block text-xl mb-1">Level 1: Minimal Risk</strong>
                    <p class="text-gray-600">للحالات البسيطة جداً مثل الزيارات، الفحص المبدئي، أو نقل المرضى. يوفر حماية ضعيفة ضد السوائل.</p>
                </div>

                <div class="border-l-4 border-blue-400 pl-4 py-2">
                    <strong class="text-blue-900 block text-xl mb-1">Level 2: Low Risk</strong>
                    <p class="text-gray-600">للعمليات الصغرى (عيون، أنف وأذن)، سحب العينات، أو الخياطة البسيطة. يقاوم ضغط رذاذ منخفض.</p>
                </div>

                <div class="border-l-4 border-green-500 pl-4 py-2">
                    <strong class="text-green-900 block text-xl mb-1">Level 3: Moderate Risk</strong>
                    <p class="text-gray-600">للطوارئ (ER)، وحالات الولادة، والعمليات الجراحية الكبرى التي لا تتضمن نزيفاً غزيراً. يقاوم ضغط دم متوسط.</p>
                </div>
                
                <div class="border-l-4 border-red-600 pl-4 py-2">
                    <strong class="text-red-900 block text-xl mb-1">Level 4: High Risk (Viral Barrier)</strong>
                    <p class="text-gray-600">أعلى مستوى حماية. يجب أن يكون "Impervious" أي غير منفذ تماماً للسوائل والفيروسات حتى تحت الضغط العالي. يستخدم في عمليات العظام (Orthopedic)، القلب المفتوح، والأوبئة.</p>
                </div>
            </div>

            <p class="bg-blue-50 p-4 rounded text-blue-800 font-bold text-center">في Prime Medical، نحن نورد الجاونات الجراحية من المستوى الثالث والرابع (Level 3 & 4) فقط لضمان أقصى درجات الأمان للجراحين.</p>
        `
    },
    {
        id: 13,
        title: 'سلاسل الإمداد وقت الأزمات: دروس مستفادة',
        excerpt: 'كيف نضمن تدفق المستلزمات الطبية عند إغلاق الحدود؟',
        image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800&fit=crop',
        date: '15 ديسمبر 2025',
        author: 'أ. سلامة حمدي',
        category: 'إدارة أزمات',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">علمتنا جائحة كورونا درساً قاسياً: "سلاسل الإمداد العالمية هشة للغاية".</p>
            
            <p class="mb-6 leading-relaxed">عندما أغلقت الصين حدودها، توقفت مصانع العالم عن العمل لنقص المكونات. المستشفيات التي كانت تعتمد على "مورد واحد رخيص" وجدت نفسها عارية أمام الفيروس.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">استراتيجية "التنويع الذكي" (Smart Diversification)</h3>
            <p class="mb-4">لتحصين مؤسستك ضد الأزمة القادمة، يجب أن تعتمد استراتيجية "المحفظة المتوازنة":</p>
            <ul class="list-disc list-inside space-y-4 mb-6 text-gray-700">
                <li><strong>60% استيراد مباشر:</strong> للتعاقدات الضخمة السنوية لضمان أقل سعر (Economies of Scale).</li>
                <li><strong>30% موزع محلي قوي:</strong> (مثل Prime Medical) يمتلك مخزوناً استراتيجياً داخل الدولة لسرعة التوريد عند تعطل الشحن الدولي.</li>
                <li><strong>10% تصنيع محلي:</strong> دعم المصانع الوطنية لتكون خط الدفاع الأخير عند إغلاق الحدود تماماً.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">دور الموزع الاستراتيجي</h3>
            <p class="mb-4">نحن لا نبيع منتجات، بل نبيع "أمان الإمداد". مخازننا مصممة لتستوعب مخزون طوارئ يكفي عملاءنا المتعاقدين لمدة 6 أشهر، لنكون ممتص الصدمات (Shock Absorber) الذي يحمي المستشفيات من تقلبات السوق العالمية.</p>
        `
    },
    {
        id: 14,
        title: 'الاستيراد أم الشراء المحلي؟ دليل للمكتب العلمي',
        excerpt: 'التعقيدات الجمركية وتسجيل المنتجات.. هل يستحق العناء؟',
        image: 'https://images.unsplash.com/photo-1566576912902-1dcd47eb7952?w=800&fit=crop',
        date: '10 ديسمبر 2025',
        author: 'قسم التخليص',
        category: 'لوجستيات',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">كثيراً ما يفكر أصحاب المستشفيات الكبرى: "لماذا لا نستورد بأنفسنا ونوفر هامش ربح المورد؟".</p>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">وهم "السعر الأقل"</h3>
            <p class="mb-4">صحيح أن سعر الفاتورة المبدئية (Proforma Invoice) من المصنع الصيني قد يبدو مغرياً، لكن دعنا نحسب التكلفة الحقيقية (Landed Cost):</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>الجمارك والضرائب:</strong> 5% جمارك + 14% ضريبة قيمة مضافة + 1% ضريبة خصم.</li>
                <li><strong>مصاريف التخليص:</strong> رسوم التخليص،، النقل الداخلي، العمالة.</li>
                <li><strong>الأرضيات والغرامات (Demurrage):</strong> أي تأخير في المستخلصات (مثل موافقة هيئة الدواء) قد يكلفك آلاف الدولارات يومياً كغرامة تأخير للحاوية في الميناء.</li>
                <li><strong>المخاطر التمويلية:</strong> تجميد رأس مالك في بضاعة تستغرق 60-90 يوماً للوصول.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">الحل؟ الشراء من "المستورد المجمع"</h3>
            <p class="mb-4">شركات التوريد الكبرى (مثلنا) تقوم باستيراد مئات الحاويات سنوياً، مما يمنحها قدرة تفاوضية مع الخطوط الملاحية والمصانع لتقليل التكلفة. في النهاية، ستجد أن سعرنا "واصل مخزنك" مقارب جداً لتكلفة استيرادك بنفسك، لكن بدون أي مخاطرة أو وجع دماغ.</p>
        `
    },
    {
        id: 15,
        title: 'تصنيف الغرف النظيفة (Clean Rooms)',
        excerpt: 'ما الفرق بين Class 10,000 و Class 100,000؟',
        image: 'https://images.unsplash.com/photo-1581093458891-2f3089097f95?w=800&fit=crop',
        date: '5 ديسمبر 2025',
        author: 'م. عمر طارق',
        category: 'جودة التصنيع',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">عندما تزور مصنع مستلزمات طبية، ستسمع مصطلحات مثل "كلاس 100 ألف". ماذا يعني هذا؟</p>
            
            <p class="mb-6 leading-relaxed">الغرف النظيفة هي بيئة تصنيع معقمة يتم فيها التحكم في عدد "الجسيمات الدقيقة" (الغبار والبكتيريا) في الهواء. كلما قل عدد الجسيمات، زادت درجة النظافة.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">ISO Class 7 (Class 10,000)</h3>
            <p class="mb-2">بيئة عالية النقاء.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>يسمح بوجود 10,000 جسيم فقط (بحجم 0.5 ميكرون) في القدم المكعب من الهواء.</li>
                <li>يستخدم لتصنيع المنتجات الحساسة جداً التي تدخل جسم الإنسان: مثل القسطرات القلبية، الصمامات، والدعامات.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">ISO Class 8 (Class 100,000)</h3>
            <p class="mb-2">المعيار القياسي للمستلزمات العامة.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>يسمح بوجود 100,000 جسيم.</li>
                <li>يستخدم لتصنيع: السرنجات، الكمامات، القفازات، وأطقم الغيارات.</li>
            </ul>

            <p class="bg-indigo-50 p-4 rounded text-indigo-800 font-bold text-center">معلومة هامة: القفازات الجراحية "المعقمة" يجب أن تغلف داخل Clean Room، أما القفازات العادية (Examination) فتصنع في بيئة نظيفة عادية (Controlled Environment).</p>
        `
    },
    {
        id: 16,
        title: 'أغطية الأحذية (Shoe Covers): أهمية الـ GSM',
        excerpt: 'لماذا يتمزق الأوفر شوز بسرعة؟ دليل السماكة.',
        image: 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&fit=crop',
        date: '1 ديسمبر 2025',
        author: 'مبيعات الشركات',
        category: 'دليل منتجات',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">أكثر شكوى نسمعها من مديري المصانع: "الأوفر شوز بيتقطع والموظف بيلبس اتنين فوق بعض!".</p>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">السر في الوزن (GSM)</h3>
            <p class="mb-4">جودة البلاستيك تقاس بـ "الجرام للمتر المربع". في السوق المصري، يوجد 3 درجات:</p>
            
            <div class="space-y-4 mb-8">
                <div class="flex items-center gap-4 bg-gray-50 p-3 rounded">
                    <span class="text-2xl font-bold text-gray-400">2g</span>
                    <div>
                        <strong class="block text-gray-900">النوع الخفيف (Economic)</strong>
                        <span class="text-sm text-gray-600">رخيص جداً، لكنه يتمزق بمجرد المشي لمسافة طويلة. يصلح للزوار (قصير المدة) فقط.</span>
                    </div>
                </div>
                <div class="flex items-center gap-4 bg-gray-50 p-3 rounded">
                    <span class="text-2xl font-bold text-blue-500">4g</span>
                    <div>
                        <strong class="block text-gray-900">النوع القياسي (Standard)</strong>
                        <span class="text-sm text-gray-600">مناسب للمستشفيات والعيادات. يتحمل الحركة المتوسطة.</span>
                    </div>
                </div>
                <div class="flex items-center gap-4 bg-gray-50 p-3 rounded border border-emerald-200 shadow-sm">
                    <span class="text-2xl font-bold text-emerald-600">6g</span>
                    <div>
                        <strong class="block text-gray-900">الخدمة الشاقة (Heavy Duty)</strong>
                        <span class="text-sm text-gray-600">سميك وخشن الملمس. مصمم للمصانع، المطابخ، ومواقع الإنتاج. يتحمل الاحتكاك والأرضيات الخشنة ولا ينزلق.</span>
                    </div>
                </div>
            </div>

            <p class="font-bold">نصيحتنا: شراء النوع الـ Heavy Duty يوفر عليك المال لأنه يدوم طوال الوردية (Shift) ولا يضطر العامل لتغييره كل ساعة.</p>
        `
    },
    {
        id: 17,
        title: 'المستلزمات الطبية الصديقة للبيئة (Eco-friendly PPE)',
        excerpt: 'مستقبل البلاستيك الحيوي في الطب.',
        image: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?w=800&fit=crop',
        date: '28 نوفمبر 2025',
        author: 'قسم R&D',
        category: 'استدامة',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">العالم يتجه نحو "الرعاية الصحية الخضراء". النفايات البلاستيكية الطبية تمثل أزمة بيئية ضخمة.</p>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">البلاستيك الحيوي (Bioplastics)</h3>
            <p class="mb-4">بدأت الشركات العالمية في إنتاج مستلزمات طبية مصنوعة من الـ PLA (نشا الذرة) بدلاً من البترول. هذه المنتجات:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>قابلة للتحلل بالكامل (Biodegradable) خلال 6 أشهر في التربة.</li>
                <li>لها نفس كفاءة وحماية البلاستيك العادي.</li>
                <li>تكلفتها حالياً أعلى بنسبة 20-30%، لكنها ستنخفض مع زياد الإنتاج.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">هل نحن جاهزون؟</h3>
            <p class="mb-4">في Prime Medical، بدأنا بالفعل في استيراد "أغطية رأس" و "أكياس نفايات" صديقة للبيئة كخطوة أولى، ونشجع المستشفيات الحاصلة على شهادات LEED البيئية على تبني هذه المنتجات.</p>
        `
    },
    {
        id: 18,
        title: 'checklist لتقييم المورد الطبي: كيف تختار شريكك؟',
        excerpt: 'تأكد من هذه النقاط قبل التعاقد.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop',
        date: '25 نوفمبر 2025',
        author: 'إدارة المشتريات',
        category: 'نصائح تجارية',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">اختيار المورد الخطأ قد يكلفك سمعتك. قبل توقيع عقد التوريد السنوي، قم بزيارة مقر المورد وتأكد من الآتي:</p>
            
            <div class="space-y-4 mb-8">
                <div class="flex gap-4">
                    <span class="text-green-500 text-xl">✅</span>
                    <p><strong>الملاءة المالية:</strong> هل يستطيع المورد تحمل تكلفة المخزون الكبير؟ أم أنه "وسيط" يشتري بضاعة فقط عندما تدفع له مقدماً؟</p>
                </div>
                <div class="flex gap-4">
                    <span class="text-green-500 text-xl">✅</span>
                    <p><strong>المخازن الفعلية:</strong> هل لديه مستودعات مرخصة ومجهزة (نظيفة، مكيفة، بنظام أرفف)؟ اطلب زيارة المخزن.</p>
                </div>
                <div class="flex gap-4">
                    <span class="text-green-500 text-xl">✅</span>
                    <p><strong>أسطول النقل:</strong> هل يمتلك سيارات خاصة لضمان سرعة التوصيل؟</p>
                </div>
                <div class="flex gap-4">
                    <span class="text-green-500 text-xl">✅</span>
                    <p><strong>سابقة الأعمال:</strong> اطلب أرقام هواتف لـ 3 عملاء حاليين (مستشفيات أو مصانع) واسألهم عن التزامه بالمواعيد.</p>
                </div>
            </div>
        `
    },
    {
        id: 19,
        title: 'متى تشتري بالجملة؟ استراتيجيات التوقيت',
        excerpt: 'مواسم انخفاض الأسعار.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&fit=crop',
        date: '20 نوفمبر 2025',
        author: 'المبيعات',
        category: 'اقتصاديات',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">أسعار المستلزمات الطبية كالبورصة، تخضع للعرض والطلب العالمي. المدير الذكي يعرف متى يملأ مخازنه.</p>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">الفرصة الذهبية: الربع الثاني (Q2)</h3>
            <p class="mb-4">عادة ما تنخفض الأسعار وشحن الحاويات في الفترة بين (مارس - مايو) بعد انتهاء عطلة السنة الصينية وعودة المصانع للعمل بكامل طاقتها، وقبل موسم ذروة الشتاء والإنفلونزا.</p>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">نصيحة ذهبية</h3>
            <p class="mb-4">تفاوض على عقودك السنوية في شهر مارس. الموردون يكونون أكثر مرونة لتقديم خصومات لضمان التشغيل طوال العام.</p>
        `
    },
    {
        id: 20,
        title: 'تأثير سعر الصرف على التوريدات',
        excerpt: 'كيف تحمي ميزانيتك من تقلب الدولار؟',
        image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&fit=crop',
        date: '15 نوفمبر 2025',
        author: 'المدير المالي',
        category: 'سوق المال',
        content: `
            <p class="mb-4 text-lg font-bold leading-relaxed text-emerald-800">بما أن 70% من المستلزمات الطبية مستوردة أو تعتمد على خامات مستوردة، فإن أي تحرك في سعر الدولار ينعكس فوراً على الفاتورة.</p>
            
            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-r-4 border-emerald-500 pr-4">كيف تثبت ميزانيتك؟</h3>
            <p class="mb-4">لا تترك نفسك لتقلبات السوق اليومية. اطلب من موردك عقد <strong>"تثبيت سعر لمدة 6 أشهر"</strong>.</p>
            <p class="mb-4">نحن في Prime Medical نقدم هذه الميزة لعملائنا الاستراتيجيين. نحن نتحوط (Hedging) ضد مخاطر العملة من خلال شراء مخزون كبير مقدماً، وبالتالي نستطيع أن نضمن لك سعراً ثابتاً حتى لو ارتفع الدولار غداً، مما يسهل عليك ضبط ميزانية المستشفى.</p>
        `
    }
];
