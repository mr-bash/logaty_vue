<template>
  <div class="home" style="text-align: center">
    <slide-home />
    <categories-lang />
    <download-app />
    <footer-global />
  </div>
</template>

<script>
import SlideHome from "@/components/headerComponents/SlideHome.vue";
import CategoriesLang from "@/components/SectionsViews/CategoriesLang.vue";
import DownloadApp from "@/components/SectionsViews/DownloadApp.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "Home",
  components: {
    SlideHome,
    CategoriesLang,
    DownloadApp,
    FooterGlobal
  }
};
</script>
