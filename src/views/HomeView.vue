<template>
  <main>
    <HeroSection />
    <ProductsSection @inquire="handleInquire" />
    <QualitySection />
    <AboutSection id="about" />
    <ContactSection ref="contactSectionRef" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import ProductsSection from '../components/ProductsSection.vue';
import QualitySection from '../components/QualitySection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';

const contactSectionRef = ref(null);

const handleInquire = (product) => {
  const contactEl = document.getElementById('contact');
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: 'smooth' });
  }
  
  if (contactSectionRef.value) {
    contactSectionRef.value.addProduct(product.name);
  }
};
</script>
