<template>
  <div class="show-rank">
    <show-rankings-lang />
    <footer-global />
  </div>
</template>

<script>
import ShowRankingsLang from "@/components/SectionsViews/ShowRankingsLang.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "ShowRanking",
  components: {
    ShowRankingsLang,
    FooterGlobal
  }
};
</script>
