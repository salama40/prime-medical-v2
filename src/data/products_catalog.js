// Comprehensive Product Catalog for Prime Medical
// Using available real images + shared images for similar products

export const productCategories = [
    {
        id: 'head-face',
        nameAr: 'حماية الرأس والوجه',
        nameEn: 'Head & Face Protection',
        icon: '🎭',
        description: 'منتجات الحماية الشخصية للرأس والوجه، مطابقة لمعايير الصحة والسلامة المهنية',
        products: [
            {
                id: 'mask-3ply-blue',
                nameAr: 'كمامة طبية 3 طبقات (أزرق)',
                nameEn: '3-Ply Surgical Mask (Blue)',
                image: '/images/blue_mask_real.png',
                description: 'كمامة طبية بأستك مرن، 3 طبقات حماية (Spunbond + Meltblown + Spunbond). مثالية للاستخدام اليومي في المصانع والمطاعم. توفر حماية من الرذاذ والغبار.',
                features: ['3 طبقات فلترة', 'أستك مريح', 'مقاومة للماء', 'عبوة 50 قطعة'],
                badge: 'Best Seller',
                variants: ['أزرق']
            },
            {
                id: 'mask-3ply-white',
                nameAr: 'كمامة طبية 3 طبقات (أبيض)',
                nameEn: '3-Ply Surgical Mask (White)',
                image: '/images/white_mask_real.jpg',
                description: 'كمامة طبية بيضاء ناصعة للمستشفيات والمناطق المعقمة. 3 طبقات حماية بأستك مرن.',
                features: ['لون أبيض', 'شكل نظيف', 'لا تسبب حساسية', 'للمناطق المعقمة'],
                badge: 'Hygiene',
                variants: ['أبيض']
            },
            {
                id: 'mask-3ply-green',
                nameAr: 'كمامة جراحية 3 طبقات (أخضر)',
                nameEn: '3-Ply Surgical Mask (Green)',
                image: '/images/green_mask_real.png',
                description: 'كمامة خضراء للعمليات والجراحة. معقمة ومطابقة لمعايير غرف العمليات.',
                features: ['لون أخضر', 'تعقيم عالي', 'رباط خلفي', 'لغرف العمليات'],
                badge: 'Surgical',
                variants: ['أخضر']
            },
            {
                id: 'mask-3ply-black',
                nameAr: 'كمامة طبية 3 طبقات (أسود)',
                nameEn: '3-Ply Surgical Mask (Black)',
                image: '/images/black_mask_real.png',
                description: 'كمامة سوداء أنيقة بفلتر كربوني. 4 طبقات حماية للحماية والأناقة معاً.',
                features: ['لون أسود', 'فلتر كربوني', '4 طبقات', 'شكل انسيابي'],
                badge: 'Stylish',
                variants: ['أسود']
            },
            {
                id: 'mask-kn95',
                nameAr: 'كمامة KN95 / N95',
                nameEn: 'KN95 Respirator',
                image: '/images/white_mask_real.jpg',
                description: 'كمامة تنفسية عالية الكفاءة، فلترة 95% من الجزيئات الدقيقة. مثالية للحماية من الأتربة والبودرة المتطايرة في مصانع المكملات الغذائية.',
                features: ['فلترة 95%', '5 طبقات', 'صمام تنفس', 'قابلة لإعادة الاستخدام'],
                badge: 'Heavy Duty',
                variants: ['أبيض', 'رمادي']
            },
            {
                id: 'bouffant-cap',
                nameAr: 'غطاء رأس "أوفر هيد"',
                nameEn: 'Bouffant Cap',
                image: '/images/blue_overhead_real.jpg',
                description: 'بونيه طبي بأستك مزدوج، خامة غير منسوجة (Non-woven) مسامية. متوفر بألوان مختلفة لتمييز الأقسام (أزرق للإنتاج، أبيض للجودة، أخضر للتعبئة).',
                features: ['أستك مزدوج', 'مسامي', 'ألوان متعددة', 'عبوة 100'],
                badge: 'Color Coded',
                variants: ['أبيض', 'أزرق', 'أخضر', 'وردي', 'أصفر']
            },
            {
                id: 'beard-cover',
                nameAr: 'غطاء لحية',
                nameEn: 'Beard Cover',
                image: '/images/beard_cover_real.jpg',
                description: 'شبكة حماية للحية لمنع سقوط الشعر في خطوط الإنتاج أو الطعام. ضروري في مصانع الأغذية والمكملات للامتثال لمعايير FDA و HACCP.',
                features: ['شبكة ناعمة', 'أستك مريح', 'لا يسبب حساسية', 'استخدام مرة واحدة'],
                badge: 'HACCP',
                variants: ['أبيض']
            }
        ]
    },
    {
        id: 'hand-protection',
        nameAr: 'حماية الأيدي',
        nameEn: 'Hand Protection',
        icon: '🧤',
        description: 'قفازات طبية وصناعية بخامات متنوعة لكل بيئة عمل',
        products: [
            {
                id: 'gloves-nitrile-blue',
                nameAr: 'جوانتي نيتريل (أزرق)',
                nameEn: 'Nitrile Gloves (Blue)',
                image: '/images/blue_gloves_real.jpg',
                description: 'قفازات نيتريل صناعي، مقاومة للثقب 3 مرات أكثر من اللاتكس. مقاومة ممتازة للكيماويات والزيوت. خالية من مسببات الحساسية (Latex-Free).',
                features: ['مقاوم للثقب', 'خالي من اللاتكس', 'بدون بودرة', 'عبوة 100'],
                badge: 'Chemical Resistant',
                variants: ['أزرق']
            },
            {
                id: 'gloves-nitrile-black',
                nameAr: 'جوانتي نيتريل (أسود)',
                nameEn: 'Nitrile Gloves (Black)',
                image: '/images/black_gloves_real.jpg',
                description: 'قفازات نيتريل أسود عالي المتانة، سمك إضافي للاستخدام الشاق في المطاعم والمصانع.',
                features: ['لون أسود', 'سمك إضافي', 'مظهر احترافي', 'للمطاعم'],
                badge: 'Heavy Duty',
                variants: ['أسود']
            },
            {
                id: 'gloves-latex-white',
                nameAr: 'جوانتي لاتكس (أبيض)',
                nameEn: 'Latex Gloves (White)',
                image: '/images/white_gloves_real.png',
                description: 'قفازات مطاط طبيعي، مرونة عالية وإحساس دقيق باللمس (Tactile Sensitivity). مثالية للفحص الطبي والأعمال الدقيقة.',
                features: ['مرونة عالية', 'إحساس دقيق', 'مطاط طبيعي', 'للفحص الطبي'],
                badge: 'Medical Grade',
                variants: ['أبيض']
            },
            {
                id: 'gloves-vinyl',
                nameAr: 'جوانتي فينيل',
                nameEn: 'Vinyl Gloves',
                image: '/images/white_gloves_real.png',
                description: 'قفازات فينيل شفافة، اقتصادية ومريحة. المفضلة في المطاعم والكافيهات لسهولة ارتدائها وخلعها.',
                features: ['شفاف', 'سعر اقتصادي', 'سهل الارتداء', 'للاستخدام العام'],
                badge: 'Economy',
                variants: ['شفاف']
            },
            {
                id: 'gloves-sterile',
                nameAr: 'جوانتي معقم',
                nameEn: 'Sterile Surgical Gloves',
                image: '/images/white_gloves_real.png',
                description: 'قفازات جراحية معقمة، مغلفة فردياً (زوج/زوج). للجراحات والتعامل المباشر مع المنتجات المعقمة في المعامل.',
                features: ['معقم ETO', 'تغليف فردي', 'مقاسات دقيقة', 'للجراحة'],
                badge: 'Sterile',
                variants: ['6.0', '6.5', '7.0', '7.5', '8.0', '8.5']
            }
        ]
    },
    {
        id: 'body-foot',
        nameAr: 'حماية الجسم والأرجل',
        nameEn: 'Body & Foot Protection',
        icon: '🦺',
        description: 'ملابس واقية وأغطية للجسم والأحذية',
        products: [
            {
                id: 'apron-plastic',
                nameAr: 'مريلة بلاستيك',
                nameEn: 'Disposable Apron',
                image: '/images/isolation_gown_real.png',
                description: 'مريلة بلاستيك (PE/CPE) لحماية الملابس من السوائل والبقع. متوفرة خفيفة (للاستخدام العام) وثقيلة (للمطابخ والمسالخ).',
                features: ['مقاومة للماء', 'ربطة رقبة وخصر', 'سماكات مختلفة', 'رول 100'],
                badge: 'Waterproof',
                variants: ['أبيض', 'أزرق', 'شفاف']
            },
            {
                id: 'visitor-coat',
                nameAr: 'بالطو زوار',
                nameEn: 'Visitor Coat',
                image: '/images/isolation_gown_real.png',
                description: 'روب زيارة من قماش غير منسوج (PP Non-woven)، بكبسولة أمامية أو سوستة. للزوار والمفتشين عند دخول مناطق الإنتاج.',
                features: ['قماش خفيف', 'كبسولة/سوستة', 'جيوب جانبية', 'مقاسات متعددة'],
                badge: 'Visitor',
                variants: ['أبيض', 'أزرق', 'أخضر']
            },
            {
                id: 'coverall',
                nameAr: 'بدلة واقية كاملة',
                nameEn: 'Disposable Coverall',
                image: '/images/isolation_gown_real.png',
                description: 'بدلة حماية كاملة للجسم (Coverall) من خامة SMS أو Tyvek. حماية شاملة من الرذاذ والغبار والمواد الكيميائية.',
                features: ['حماية كاملة', 'سوستة أمامية', 'أستك معصم وكاحل', 'Type 5/6'],
                badge: 'Full Protection',
                variants: ['أبيض', 'أزرق']
            },
            {
                id: 'sleeve-cover',
                nameAr: 'أكمام بلاستيك',
                nameEn: 'Disposable Sleeve Covers',
                image: '/images/arm_sleeve_real.jpg',
                description: 'أكمام بلاستيك طويلة لحماية الساعدين من السوائل والزيوت. بأستك علوي وسفلي لتثبيت محكم.',
                features: ['بلاستيك PE', 'أستك مزدوج', 'طول 40 سم', 'عبوة 100'],
                badge: 'Kitchen',
                variants: ['أزرق', 'شفاف']
            },
            {
                id: 'shoe-cover',
                nameAr: 'غطاء حذاء',
                nameEn: 'Shoe Cover',
                image: '/images/shoe_covers_real.jpg',
                description: 'غطاء حذاء من بلاستيك CPE (ضد الماء) أو قماش Non-woven (ضد الانزلاق). بأستك علوي لتثبيت فوق الحذاء.',
                features: ['مقاوم للانزلاق', 'أستك قوي', 'مقاسات كبيرة', 'عبوة 100'],
                badge: 'Anti-Slip',
                variants: ['أزرق', 'أبيض', 'أخضر']
            },
            {
                id: 'bed-sheet',
                nameAr: 'ملاية سرير استخدام مرة',
                nameEn: 'Disposable Bed Sheet',
                image: '/images/isolation_gown_real.png',
                description: 'رولات ملايات للأسرة الطبية، مراكز المساج، والعيادات. قماش ناعم غير منسوج، سهل القطع والاستبدال.',
                features: ['رول 80 متر', 'عرض 60/80 سم', 'ناعم ومريح', 'اقتصادي'],
                badge: 'Medical',
                variants: ['أبيض']
            }
        ]
    },
    {
        id: 'lab-qc',
        nameAr: 'مستلزمات المعامل والجودة',
        nameEn: 'QC & Lab Consumables',
        icon: '🔬',
        description: 'أدوات ومستهلكات معملية لمراقبة الجودة والاختبارات',
        products: [
            {
                id: 'specimen-cup',
                nameAr: 'أكواب عينات معقمة',
                nameEn: 'Sterile Specimen Cups',
                image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'أكواب بلاستيك شفافة معقمة بغطاء محكم، لسحب عينات المكملات الغذائية للاختبار الميكروبيولوجي والكيميائي.',
                features: ['معقمة', 'غطاء محكم', 'مدرجة', 'سعات مختلفة'],
                badge: 'Sterile',
                variants: ['30ml', '60ml', '120ml']
            },
            {
                id: 'petri-dish',
                nameAr: 'أطباق بتري بلاستيك',
                nameEn: 'Plastic Petri Dishes',
                image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'أطباق بتري بلاستيك شفافة للاختبارات البكتيرية (Microbial Testing). معقمة ومغلفة فردياً.',
                features: ['بلاستيك شفاف', 'معقمة', 'قطر 90mm', 'عبوة 20'],
                badge: 'Lab',
                variants: ['90mm', '60mm']
            },
            {
                id: 'pipette',
                nameAr: 'ماصات بلاستيك',
                nameEn: 'Transfer Pipettes',
                image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'ماصات نقل بلاستيك (Pasteur Pipettes) لنقل السوائل المخبرية بدقة. سعة 3 مل، معقمة ومغلفة فردياً.',
                features: ['بلاستيك PE', 'معقمة', 'سعة 3ml', 'مدرجة'],
                badge: 'Precision',
                variants: ['1ml', '3ml', '5ml']
            },
            {
                id: 'swab',
                nameAr: 'مسحات معقمة',
                nameEn: 'Sterile Swabs',
                image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'مسحات قطنية معقمة (خشبية أو بلاستيكية) لمسح الماكينات والأسطح وأخذ عينات بيئية (Environmental Monitoring).',
                features: ['قطن معقم', 'عصا خشب/بلاستيك', 'تغليف فردي', 'للمسح البيئي'],
                badge: 'Sterile',
                variants: ['خشبي', 'بلاستيك']
            },
            {
                id: 'test-strip',
                nameAr: 'شرائط قياس pH/Chlorine',
                nameEn: 'Test Strips',
                image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'شرائط اختبار سريعة لقياس الوسط الكيميائي (pH) ومستوى الكلور في المياه والمحاليل.',
                features: ['قراءة فورية', 'دقة عالية', 'سهل الاستخدام', 'عبوة 100'],
                badge: 'QC',
                variants: ['pH', 'Chlorine', 'Combo']
            }
        ]
    },
    {
        id: 'sanitization',
        nameAr: 'التطهير والنفايات',
        nameEn: 'Sanitization & Waste',
        icon: '🧹',
        description: 'مستلزمات التعقيم والتنظيف والتخلص الآمن من النفايات',
        products: [
            {
                id: 'alcohol-pad',
                nameAr: 'مناديل كحولية',
                nameEn: 'Alcohol Prep Pads',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'مناديل قطنية مشبعة بكحول إيثيلي 70% للتعقيم الموضعي الفوري. مغلفة فردياً، سهلة الحمل والاستخدام.',
                features: ['كحول 70%', 'تغليف فردي', 'سريع التبخر', 'عبوة 100'],
                badge: 'Sanitizer',
                variants: ['قياسي', 'كبير']
            },
            {
                id: 'biohazard-bag',
                nameAr: 'أكياس نفايات طبية',
                nameEn: 'Biohazard Bags',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'أكياس نفايات طبية خطرة (حمراء/صفراء) مطبوع عليها رمز الخطر البيولوجي. للتخلص الآمن من المخلفات الملوثة.',
                features: ['سمك عالي', 'رمز Biohazard', 'ألوان مميزة', 'أحجام مختلفة'],
                badge: 'Medical Waste',
                variants: ['أحمر', 'أصفر', 'أسود']
            },
            {
                id: 'safety-box',
                nameAr: 'صندوق أمان للحادات',
                nameEn: 'Sharps Safety Box',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'صندوق بلاستيك صلب أصفر اللون للتخلص الآمن من الإبر والمشارط والآلات الحادة. مقاوم للثقب.',
                features: ['مقاوم للثقب', 'غلق محكم', 'فتحة آمنة', 'سعات مختلفة'],
                badge: 'Safety',
                variants: ['1L', '3L', '5L']
            },
            {
                id: 'sterilization-roll',
                nameAr: 'رولات ورق تعقيم',
                nameEn: 'Sterilization Rolls',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'رولات ورق طبي + بلاستيك شفاف لتغليف الأدوات قبل وضعها في الأوتوكلاف (Autoclave). تسمح بمرور البخار.',
                features: ['ورق + بلاستيك', 'للأوتوكلاف', 'مؤشر تعقيم', 'رول 200 متر'],
                badge: 'Autoclave',
                variants: ['5cm', '10cm', '15cm', '20cm']
            }
        ]
    },
    {
        id: 'packaging-measuring',
        nameAr: 'التعبئة والقياس',
        nameEn: 'Packaging & Measuring',
        icon: '📦',
        description: 'أدوات التعبئة والقياس والتمييز لمراقبة الجودة',
        products: [
            {
                id: 'ziplock-bag',
                nameAr: 'أكياس سحاب شفافة',
                nameEn: 'Zip Lock Bags',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'أكياس بلاستيك شفافة بسحاب محكم لحفظ عينات المكملات المرجعية (Retain Samples). مقاومة للرطوبة.',
                features: ['سحاب محكم', 'شفاف', 'مقاوم للرطوبة', 'أحجام متعددة'],
                badge: 'Storage',
                variants: ['صغير', 'متوسط', 'كبير']
            },
            {
                id: 'silica-gel',
                nameAr: 'أكياس سحب الرطوبة',
                nameEn: 'Silica Gel Packets',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'أكياس سيليكا جل (مادة ماصة للرطوبة) توضع داخل عبوات المكملات للحفاظ على جفافها ومنع التكتل.',
                features: ['ماص للرطوبة', 'آمن غذائياً', 'أحجام مختلفة', 'عبوة 100'],
                badge: 'Moisture Control',
                variants: ['1g', '5g', '10g']
            },
            {
                id: 'measuring-scoop',
                nameAr: 'مكاييل بلاستيك',
                nameEn: 'Measuring Scoops',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'مكاييل بلاستيك بأحجام مختلفة (5ml, 10ml, 30ml) توضع داخل عبوات المكملات الغذائية لتسهيل الجرعات.',
                features: ['بلاستيك غذائي', 'أحجام دقيقة', 'مدرج', 'ألوان مختلفة'],
                badge: 'Supplements',
                variants: ['5ml', '10ml', '30ml', '50ml']
            }
        ]
    },
    {
        id: 'first-aid',
        nameAr: 'الإسعافات الأولية',
        nameEn: 'First Aid Refills',
        icon: '🩹',
        description: 'مستلزمات إعادة تعبئة حقائب الإسعافات الأولية',
        products: [
            {
                id: 'detectable-bandage',
                nameAr: 'بلاستر قابل للكشف',
                nameEn: 'Metal Detectable Bandages',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'بلاستر طبي أزرق اللون يحتوي على شريط معدني داخلي، يمكن لأجهزة كشف المعادن في خطوط الإنتاج اكتشافه في حال سقوطه في الطعام.',
                features: ['أزرق فاتح', 'شريط معدني', 'لاصق قوي', 'للمصانع الغذائية'],
                badge: 'Food Safety',
                variants: ['صغير', 'متوسط', 'كبير']
            },
            {
                id: 'cotton-gauze',
                nameAr: 'قطن وشاش معقم',
                nameEn: 'Sterile Cotton & Gauze',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'عبوات قطن طبي وشاش معقم بأحجام مختلفة لتنظيف الجروح والإسعافات الأولية.',
                features: ['معقم', 'تغليف فردي', 'ناعم', 'أحجام متعددة'],
                badge: 'Sterile',
                variants: ['قطن', 'شاش 5x5', 'شاش 10x10']
            }
        ]
    },
    {
        id: 'facility-hygiene',
        nameAr: 'نظافة المنشآت',
        nameEn: 'Facility Hygiene',
        icon: '🧼',
        description: 'مستلزمات النظافة والتعقيم للمنشآت الصناعية',
        products: [
            {
                id: 'liquid-soap-bulk',
                nameAr: 'صابون طبي سائل (جراكن)',
                nameEn: 'Medical Liquid Soap (Bulk)',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'صابون سائل طبي بدون رائحة (مناسب للمطاعم) في جراكن 5 لتر لإعادة تعبئة الموزعات.',
                features: ['بدون رائحة', 'طبي', 'جركن 5L', 'اقتصادي'],
                badge: 'Bulk',
                variants: ['5L', '20L']
            },
            {
                id: 'hand-sanitizer-gel',
                nameAr: 'كحول جيل معقم',
                nameEn: 'Hand Sanitizer Gel (Refill)',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'جل معقم لليدين بتركيز كحول 70%، عبوات ضغط كبيرة لإعادة تعبئة الموزعات في المداخل.',
                features: ['كحول 70%', 'جل سميك', 'عبوة 5L', 'للموزعات'],
                badge: 'Sanitizer',
                variants: ['500ml', '5L']
            }
        ]
    },
    {
        id: 'hse',
        nameAr: 'السلامة المهنية',
        nameEn: 'HSE Consumables',
        icon: '⚠️',
        description: 'مستهلكات الصحة والسلامة والبيئة',
        products: [
            {
                id: 'ear-plugs',
                nameAr: 'سدادات أذن',
                nameEn: 'Disposable Ear Plugs',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'سدادات أذن إسفنجية للاستخدام مرة واحدة في المناطق ذات الضجيج العالي (خطوط الإنتاج، المولدات).',
                features: ['إسفنج ناعم', 'تقليل ضوضاء', 'مريح', 'زوج مغلف'],
                badge: 'Safety',
                variants: ['قياسي']
            },
            {
                id: 'caution-label',
                nameAr: 'ستيكرات تحذيرية',
                nameEn: 'Caution Warning Labels',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'ملصقات لاصقة تحذيرية للمناطق الخطرة والكيماويات (خطر، قابل للاشتعال، سام، إلخ).',
                features: ['ألوان زاهية', 'لاصق دائم', 'رموز عالمية', 'رول 100'],
                badge: 'HSE',
                variants: ['خطر', 'قابل للاشتعال', 'سام']
            }
        ]
    }
];

// Helper function to get all products (flat array)
export const getAllProducts = () => {
    return productCategories.reduce((acc, category) => {
        return [...acc, ...category.products.map(p => ({ ...p, categoryId: category.id, categoryNameAr: category.nameAr }))];
    }, []);
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
    const category = productCategories.find(c => c.id === categoryId);
    return category ? category.products : [];
};
