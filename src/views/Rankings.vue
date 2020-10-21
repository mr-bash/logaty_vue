<template>
  <div class="rankings">
    <rankings-lang />
    <footer-global />
  </div>
</template>

<script>
import RankingsLang from "@/components/SectionsViews/RankingsLang.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "Rankings",
  components: {
    RankingsLang,
    FooterGlobal
  }
};
</script>
