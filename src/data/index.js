import { posts1 } from './posts_1_10';
import { posts2 } from './posts_11_20';

export const navLinks = [
    // Internal sections (same page)
    { id: 1, text: 'الرئيسية', href: '/' },
    { id: 3, text: 'الجودة', href: '/#quality' },
    { id: 8, text: 'من نحن', href: '/#about' },
    { id: 5, text: 'تواصل معنا', href: '/#contact' },

    // External pages
    { id: 6, text: 'المقالات', href: '/blog' },
    { id: 9, text: 'الأسئلة الشائعة', href: '/faq' }
];

export const heroSlides = [
    {
        title: 'كمامات طبية عالية الجودة',
        description: 'حماية فائقة مع راحة طوال اليوم',
        image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&h=600&fit=crop'
    },
    {
        title: 'جوانتيات متينة ومرنة',
        description: 'مقاومة للتمزق وآمنة للاستخدام المهني',
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=600&fit=crop'
    },
    {
        title: 'أوفر هيد للحماية الكاملة',
        description: 'حماية شاملة لبيئة عمل آمنة',
        image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=600&fit=crop'
    },
    {
        title: 'أوفر شوز مقاوم للانزلاق',
        description: 'أمان إضافي في بيئات العمل الحساسة',
        image: 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&h=600&fit=crop'
    }
];

export const products = [
    // --- Masks Category (4 Colors) ---
    {
        id: 1,
        name: 'كمامة طبية (Blue)',
        description: 'كمامة زرقاء 3 طبقات حماية يومية',
        image: '/images/blue_mask_real.png',
        imageStyle: {},
        badge: 'Best Seller',
        features: ['لون أزرق', '3 طبقات', 'فلتر عالي', 'مريح']
    },
    {
        id: 15,
        name: 'كمامة بيضاء (White)',
        description: 'كمامة بيضاء ناصعة للمستشفيات',
        image: '/images/white_mask_real.jpg',
        imageStyle: {},
        badge: 'Hygiene',
        features: ['لون أبيض', 'شكل نظيف', 'لا تسبب حساسية', 'للمناطق المعقمة']
    },
    {
        id: 12,
        name: 'كمامة جراحية (Green)',
        description: 'كمامة خضراء للعمليات والجراحة',
        image: '/images/green_mask_real.png',
        imageStyle: {},
        badge: 'Surgical',
        features: ['لون أخضر', 'تعقيم عالي', 'رباط خلفي', 'لغرف العمليات']
    },
    {
        id: 9,
        name: 'كمامة سوداء (Black)',
        description: 'كمامة سوداء كاربون للحماية والأناقة',
        image: '/images/black_mask_real.png',
        imageStyle: {},
        badge: 'Stylish',
        features: ['لون أسود', 'فلتر كربوني', '4 طبقات', 'شكل انسيابي']
    },

    // --- Gloves Category (3 Colors) ---
    {
        id: 2,
        name: 'جوانتي لاتكس (White)',
        description: 'قفاز فحص مطاطي أبيض بودرة خفيفة',
        image: '/images/white_gloves_real.png',
        imageStyle: {},
        badge: 'Elastic',
        features: ['لون أبيض', 'ملمس طبيعي', 'تحكم عالي', 'عبوة 100']
    },
    {
        id: 10,
        name: 'جوانتي نيتريل (Blue)',
        description: 'قفاز نيتريل أزرق مقاوم للكيماويات',
        image: '/images/blue_gloves_real.jpg',
        imageStyle: {},
        badge: 'Chemical',
        features: ['لون أزرق', 'بدون بودرة', 'مقاوم للثقب', 'للمعامل']
    },
    {
        id: 13,
        name: 'جوانتي أسود (Black)',
        description: 'قفاز نيتريل أسود عالي المتانة',
        image: '/images/black_gloves_real.jpg',
        imageStyle: {},
        badge: 'Heavy Duty',
        features: ['لون أسود', 'سمك إضافي', 'مظهر احترافي', 'للمطاعم']
    },

    // --- Head Covers ---
    {
        id: 3,
        name: 'أوفر هيد (White)',
        description: 'غطاء رأس (بونية) أبيض',
        image: '/images/overhead_nobg.png',
        imageStyle: { filter: 'grayscale(100%) brightness(1.2)' }, // Natural White
        badge: 'Hygiene',
        features: ['لون أبيض', 'أستك مزدوج', 'مسامي', 'للمستشفيات']
    },
    {
        id: 14,
        name: 'أوفر هيد (Blue)',
        description: 'غطاء رأس (بونية) أزرق',
        image: '/images/blue_overhead_real.jpg',
        imageStyle: {},
        badge: 'Medical',
        features: ['لون أزرق', 'خامة خفيفة', 'حماية للشعر', 'للمصانع']
    },

    // --- Other items (Reordered: Shoe Cover -> Sleeve -> Gown -> Beard) ---

    {
        id: 4,
        name: 'أوفر شوز (Shoe Cover)',
        description: 'غطاء حذاء أزرق مانع للانزلاق',
        image: '/images/shoe_covers_real.jpg',
        imageStyle: {},
        badge: 'Anti-Slip',
        features: ['أزرق', 'سميك', 'بلاستيك مقوى', 'يحمي الأرضيات']
    },
    {
        id: 6,
        name: 'معصم طبي (Oversleeve)',
        description: 'غطاء ذراع بلاستيك للحماية من السوائل',
        image: '/images/arm_sleeve_real.jpg',
        imageStyle: {},
        badge: 'Protection',
        features: ['بلاستيك PE', 'مقاوم للماء', 'تغطية للكوع', 'أستك محكم']
    },
    {
        id: 5,
        name: 'بالطو زيارة (Visitor Gown)',
        description: 'روب زيارة خفيف للاستخدام مرة واحدة',
        image: '/images/isolation_gown_real.png',
        imageStyle: {},
        badge: 'Isolation',
        features: ['خامة خفيفة', 'رباط خلفي', 'أكمام محكمة', 'أزرق فاتح']
    }
];

export const certifications = [
    {
        id: 1,
        icon: '🏆',
        name: 'ISO 9001:2015',
        description: 'شهادة نظام إدارة الجودة العالمية للتصنيع والتوريد'
    },
    {
        id: 2,
        icon: '🏥',
        name: 'وزارة الصحة',
        description: 'معتمد من وزارة الصحة السعودية للمنتجات الطبية'
    },
    {
        id: 3,
        icon: '✅',
        name: 'FDA Approved',
        description: 'منتجات مطابقة لمعايير إدارة الغذاء والدواء الأمريكية'
    },
    {
        id: 4,
        icon: '🌍',
        name: 'CE Marking',
        description: 'علامة المطابقة الأوروبية لمعايير الصحة والسلامة'
    }
];

export const qualityMetrics = [
    { id: 1, icon: '⚡', value: '99.9%', label: 'نسبة الجودة' },
    { id: 2, icon: '📦', value: '24hrs', label: 'سرعة التوريد' },
    { id: 3, icon: '🔬', value: '100%', label: 'فحص الجودة' },
    { id: 4, icon: '💯', value: '500+', label: 'عميل راضي' }
];

export const b2bFeatures = [
    {
        id: 1,
        icon: '🚚',
        title: 'توصيل سريع',
        description: 'نضمن وصول الطلبات خلال 24-48 ساعة لجميع المدن الرئيسية مع خدمة تتبع شحن متقدمة'
    },
    {
        id: 2,
        icon: '🎁',
        title: 'عينات مجانية',
        description: 'نوفر عينات مجانية من جميع منتجاتنا لاختبار الجودة قبل الطلب الأساسي'
    },
    {
        id: 3,
        icon: '💰',
        title: 'أسعار الجملة',
        description: 'خصومات خاصة على الكميات الكبيرة مع أنظمة دفع مرنة تناسب احتياجاتك'
    },
    {
        id: 4,
        icon: '📞',
        title: 'دعم فني 24/7',
        description: 'فريق دعم متخصص متاح على مدار الساعة للإجابة على استفساراتك'
    },
    {
        id: 5,
        icon: '🔒',
        title: 'ضمان الجودة',
        description: 'ضمان شامل على جميع المنتجات مع إمكانية الاستبدال والاسترجاع'
    },
    {
        id: 6,
        icon: '📊',
        title: 'استشارات مجانية',
        description: 'نساعدك في اختيار المنتجات المناسبة حسب نوع نشاطك الصناعي'
    }
];

export const timelineSteps = [
    {
        id: 1,
        icon: '📞',
        title: 'الاتصال',
        description: 'تواصل معنا أو املأ النموذج'
    },
    {
        id: 2,
        icon: '💼',
        title: 'الاستشارة',
        description: 'نناقش احتياجاتك ونقترح الحلول'
    },
    {
        id: 3,
        icon: '📄',
        title: 'العرض',
        description: 'نرسل عرض سعر مفصل'
    },
    {
        id: 4,
        icon: '✅',
        title: 'التأكيد',
        description: 'توقيع العقد وتأكيد الطلب'
    },
    {
        id: 5,
        icon: '🚛',
        title: 'التسليم',
        description: 'وصول الشاحنة لموقعك'
    }
];

export const aboutUs = {
    story: {
        title: 'من نحن - شريكك الاستراتيجي في الإمداد الطبي',
        description: 'Prime Medical هي شركة رائدة في توريد وتوزيع المستلزمات الطبية ومهمات الوقاية (PPE) في مصر. نحن نمثل حلقة الوصل الموثوقة بين كبرى خطوط الإنتاج والمؤسسات الطبية والصناعية. بفضل مستودعاتنا المركزية وشبكةنا اللوجستية القوية، نضمن لعملائنا (المستشفيات، المصانع، الشركات الموردة) توافر المنتجات بكميات ضخمة، مطابقة للمواصفات، وبأسعار تنافسية.',
        vision: 'أن نكون الخيار الأول لإدارات المشتريات الباحثة عن الموثوقية، السرعة، والجودة في توريد المستلزمات الطبية.'
    },
    stats: [
        { id: 1, number: '+10', label: 'سنوات خبرة في التوريد', icon: '🚚' },
        { id: 2, number: '+50', label: 'شراكة مع مصانع', icon: '🏭' },
        { id: 3, number: '5M+', label: 'قطعة جاهزة بالمخازن', icon: '📦' },
        { id: 4, number: '100%', label: 'التزام بمواعيد التوريد', icon: '⏱️' }
    ]
};

export const blogPosts = [...posts1, ...posts2];

export const faqs = [
    {
        id: 1,
        question: 'هل يمكنكم طباعة شعار المستشفى/الشركة على المنتجات (Private Label)؟',
        answer: 'نعم، كشركة توريد كبرى، لدينا تعاقدات مع خطوط إنتاج تتيح لنا تنفيذ طلبيات خاصة (Private Label) وطباعة شعارك على العبوات للكميات الكبيرة.'
    },
    {
        id: 2,
        question: 'ما هي قدراتكم التوريدية؟ هل تستطيعون تغطية احتياجات سلسلة مستشفيات كاملة؟',
        answer: 'بفضل مخزوننا الاستراتيجي وتعاقداتنا مع مصانع متعددة، نستطيع توريد كميات ضخمة (مثلاً 500 كرتونة كمامات أسبوعياً) بانتظام وثبات في السعر والجودة، دون التأثر بتقلبات السوق اليومية.'
    },
    {
        id: 3,
        question: 'هل توفرون شهادات التوريد اللازمة؟',
        answer: 'بالتأكيد. نوفر مع كل توريد ملف كامل يحتوي على: صورة الإفراج الجمركي (للمستورد)، شهادات الجودة (ISO) الخاصة بالمصنع، وفاتورة ضريبية إلكترونية معتمدة.'
    },
    {
        id: 4,
        question: 'هل يوجد أسعار خاصة للمناقصات وعقود التوريد السنوية؟',
        answer: 'نعم، لدينا قسم مختص لدراسة المناقصات. نقدم "نظام تثبيت الأسعار" للعقود السنوية لحماية عملائنا من تقلبات السوق.'
    },
    {
        id: 5,
        question: 'ما هي شروط الدفع للشركات والمستشفيات؟',
        answer: 'نوفر تسهيلات في الدفع للعملاء المتعاقدين (آجل 30-60 يوم) بعد الدراسة الائتمانية. للطلبات الفورية، نقبل التحويل البنكي والشيكات المعتمدة.'
    },
    {
        id: 6,
        question: 'هل المنتجات معقمة (Sterile) أم غير معقمة؟',
        answer: 'نوفر النوعين. في مخازنا قسم للمنتجات المعقمة (مثل القفازات الجراحية) وقسم للمنتجات العادية (مثل كمامات الفحص)، وجميعها مخزنة في ظروف قياسية.'
    },
    {
        id: 7,
        question: 'كيف تضمنون جودة المنتجات أثناء الشحن للمحافظات؟',
        answer: 'نستخدم كراتين مضلعة خماسية الطبقات (5-ply) تتحمل الظروف الشاقة، ونتعامل مع أسطول سيارات مجهز لضمان وصول المنتجات بحالتها السليمة تماماً.'
    },
    {
        id: 8,
        question: 'هل يمكن طلب عينات معتمدة قبل فتح الاعتماد المستندي؟',
        answer: 'نعم، نرسل حقيبة عينات (Sample Kit) تحتوي على كافة خاماتنا وشهاداتنا الفنية لأي مكان في العالم عبر DHL/Aramex للمعاينة والفحص.'
    },
    {
        id: 9,
        question: 'هل لديكم موزعين في دول الخليج؟',
        answer: 'نعم، لدينا وكلاء في السعودية والإمارات. تواصل معنا لتوجيهك لأقرب موزع معتمد أو التوريد المباشر من مصر لمستودعاتكم.'
    },
    {
        id: 10,
        question: 'ما هي مواصفات "الأوفر شوز" وهل يتحمل الاستخدام الشاق؟',
        answer: 'ننتج 3 أوزان مختلفة (2 جرام، 4 جرام، 6 جرام "Heavy Duty"). للبيئات الصناعية، ننصح بوزن 6 جرام المصنوع من CPE عالي المتانة.'
    },
    {
        id: 11,
        question: 'هل توفرون زيارات لمخازنكم للتدقيق (Audit)؟',
        answer: 'نرحب بزيارات ممثلي المشتريات والجودة من عملائنا في أي وقت (بميعاد مسبق) للاطلاع على نظام التخزين ومعايير الجودة لدينا.'
    },
    {
        id: 12,
        question: 'كيف تتعاملون مع المرتجعات في حالة وجود عيب؟',
        answer: 'نطبق سياسة "No Questions Asked" لعيوب الصناعة. يتم استبدال الكمية فوراً وتحمل تكاليف الشحن، مع مراجعة المصنع المنتج لمعرفة سبب الخطأ.'
    }
];
