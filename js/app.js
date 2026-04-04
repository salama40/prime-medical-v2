const { createApp } = Vue;

createApp({
    data() {
        return {
            // Navigation
            isScrolled: false,
            mobileMenuOpen: false,
            navLinks: [
                { id: 1, text: 'الرئيسية', href: '#hero' },
                { id: 2, text: 'المنتجات', href: '#products' },
                { id: 3, text: 'الجودة', href: '#quality' },
                { id: 4, text: 'المميزات', href: '#features' },
                { id: 5, text: 'تواصل معنا', href: '#contact' }
            ],
            
            // Hero Slider
            currentSlideIndex: 0,
            heroSlides: [
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
            ],
            
            // Products
            products: [
                {
                    id: 1,
                    name: 'كمامات طبية',
                    description: 'كمامات ثلاثية الطبقات مع فلتر عالي الكفاءة',
                    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=400&fit=crop',
                    badge: 'High Durability',
                    features: [
                        'فلتر 3 طبقات',
                        'مقاوم للماء',
                        'مطابق لمعايير FDA',
                        'متوفر بكميات كبيرة'
                    ]
                },
                {
                    id: 2,
                    name: 'جوانتيات نيتريل',
                    description: 'قفازات نيتريل خالية من اللاتكس للحماية المثالية',
                    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop',
                    badge: 'Certified Quality',
                    features: [
                        'خالي من البودرة',
                        'مقاوم للمواد الكيميائية',
                        'مرونة عالية',
                        'متوفر بجميع المقاسات'
                    ]
                },
                {
                    id: 3,
                    name: 'أوفر هيد',
                    description: 'غطاء رأس واقي مصنوع من مواد غير منسوجة',
                    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=400&fit=crop',
                    badge: 'Medical Grade',
                    features: [
                        'خامة غير منسوجة',
                        'قابل للتنفس',
                        'مقاوم للسوائل',
                        'مطاطي قابل للتمدد'
                    ]
                },
                {
                    id: 4,
                    name: 'أوفر شوز',
                    description: 'غطاء أحذية مقاوم للانزلاق ومضاد للماء',
                    image: 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=400&h=400&fit=crop',
                    badge: 'Anti-Slip',
                    features: [
                        'مقاوم للماء',
                        'مانع للانزلاق',
                        'مرن ومتين',
                        'سهل الارتداء'
                    ]
                }
            ],
            
            // Certifications
            certifications: [
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
            ],
            
            // Quality Metrics
            qualityMetrics: [
                { id: 1, icon: '⚡', value: '99.9%', label: 'نسبة الجودة' },
                { id: 2, icon: '📦', value: '24hrs', label: 'سرعة التوريد' },
                { id: 3, icon: '🔬', value: '100%', label: 'فحص الجودة' },
                { id: 4, icon: '💯', value: '500+', label: 'عميل راضي' }
            ],
            
            // B2B Features
            b2bFeatures: [
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
            ],
            
            // Timeline Steps
            timelineSteps: [
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
            ],
            
            // Contact Form
            formData: {
                factoryName: '',
                contactPerson: '',
                phone: '',
                email: '',
                industryType: '',
                quantity: '',
                productsNeeded: [],
                notes: ''
            },
            isSubmitting: false,
            showSuccessMessage: false
        }
    },
    
    computed: {
        currentSlide() {
            return this.heroSlides[this.currentSlideIndex];
        },
        currentSlideImage() {
            return this.heroSlides[this.currentSlideIndex].image;
        }
    },
    
    mounted() {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Scroll Event Listener
        window.addEventListener('scroll', this.handleScroll);
        
        // Auto Slider
        this.startAutoSlider();
        
        // GSAP Animations
        this.initGSAPAnimations();
        
        // Close mobile menu on link click
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenuOpen = false;
            });
        });
    },
    
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        if (this.sliderInterval) {
            clearInterval(this.sliderInterval);
        }
    },
    
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        
        scrollToContact() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                this.mobileMenuOpen = false;
            }
        },
        
        scrollToProducts() {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        
        startAutoSlider() {
            this.sliderInterval = setInterval(() => {
                this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
            }, 5000);
        },
        
        initGSAPAnimations() {
            // Register ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate product cards on scroll
            gsap.utils.toArray('.product-card').forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1
                });
            });
            
            // Animate timeline steps
            gsap.utils.toArray('.timeline-line').forEach(line => {
                gsap.from(line, {
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    scaleX: 0,
                    duration: 1.5,
                    ease: 'power2.out'
                });
            });
        },
        
        openProductInquiry(product) {
            // Pre-select the product in contact form
            if (!this.formData.productsNeeded.includes(product.name)) {
                this.formData.productsNeeded.push(product.name);
            }
            this.scrollToContact();
        },
        
        async handleSubmit() {
            // Validate form
            if (!this.formData.factoryName || !this.formData.contactPerson || 
                !this.formData.phone || !this.formData.email || 
                !this.formData.industryType || !this.formData.quantity) {
                alert('الرجاء ملء جميع الحقول المطلوبة');
                return;
            }
            
            if (this.formData.productsNeeded.length === 0) {
                alert('الرجاء اختيار منتج واحد على الأقل');
                return;
            }
            
            this.isSubmitting = true;
            
            // Simulate form submission (replace with actual API call)
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Log form data (for demonstration)
                console.log('Form Data Submitted:', this.formData);
                
                // Show success message
                this.showSuccessMessage = true;
                
                // Reset form
                this.formData = {
                    factoryName: '',
                    contactPerson: '',
                    phone: '',
                    email: '',
                    industryType: '',
                    quantity: '',
                    productsNeeded: [],
                    notes: ''
                };
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.showSuccessMessage = false;
                }, 5000);
                
            } catch (error) {
                console.error('Form submission error:', error);
                alert('حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.');
            } finally {
                this.isSubmitting = false;
            }
        }
    }
}).mount('#app');
