<template>
  <div class="about" style="text-align: center">
    <slide-home />
    <about-section />
    <download-app />
    <footer-global />
  </div>
</template>

<script>
import SlideHome from "@/components/headerComponents/SlideHome.vue";
import AboutSection from "@/components/SectionsViews/AboutSection.vue";
import DownloadApp from "@/components/SectionsViews/DownloadApp.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "About",
  components: {
    SlideHome,
    AboutSection,
    DownloadApp,
    FooterGlobal
  }
};
</script>
