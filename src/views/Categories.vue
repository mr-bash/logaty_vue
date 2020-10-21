<template>
  <div class="categorise" style="text-align: center">
    <slide-home />
    <categories-lang />
    <footer-global />
  </div>
</template>

<script>
import SlideHome from "@/components/headerComponents/SlideHome.vue";
import CategoriesLang from "@/components/SectionsViews/CategoriesLang.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "Categories",
  components: {
    SlideHome,
    CategoriesLang,
    FooterGlobal
  }
};
</script>
