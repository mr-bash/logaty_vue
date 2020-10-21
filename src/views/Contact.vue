<template>
  <div class="contact" style="text-align: center">
    <slide-home />
    <contact-section />
    <footer-global />
  </div>
</template>

<script>
import SlideHome from "@/components/headerComponents/SlideHome.vue";
import ContactSection from "@/components/SectionsViews/ContactSection.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "Contact",
  components: {
    SlideHome,
    ContactSection,
    FooterGlobal
  }
};
</script>
