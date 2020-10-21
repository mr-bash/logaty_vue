<template>
  <div class="show-lang">
    <div class="breadcrumb">
      <div class="opc"></div>
      <div class="title">
        <h3>
          النادي الرياضي <img src="@/assets/img/hand.png" alt="hand icon" />
        </h3>
      </div>
      <div class="path">
        <router-link tag="a" to="/">الرئيسية</router-link>
        <img src="@/assets/img/left-icon.png" alt="left icon" />
        <router-link tag="a" to="/categories">الأقسام</router-link>
        <img src="@/assets/img/left-icon.png" alt="left icon" />
        <router-link tag="a" to="/rankings">اللغة التركية</router-link>
        <img src="@/assets/img/left-icon.png" alt="left icon" />
        <span>النادي الرياضي</span>
      </div>
    </div>
    <div class="container">
      <div class="selectors-lang">
        <div
          class="box-select"
          @click="SelectorsActive = 'words'"
          :class="SelectorsActive == 'words' ? 'active' : ''"
        >
          <h6>مصطلحات</h6>
        </div>
        <div
          class="box-select"
          @click="SelectorsActive = 'phrases'"
          :class="SelectorsActive == 'phrases' ? 'active' : ''"
        >
          <h6>جمل</h6>
        </div>
        <div
          class="box-select"
          @click="SelectorsActive = 'talks'"
          :class="SelectorsActive == 'talks' ? 'active' : ''"
        >
          <h6>محادثات</h6>
        </div>
      </div>
      <!-- Start Talks Section -->
      <talks-lang v-if="SelectorsActive == 'talks'" />
      <!-- End Talks Section -->
      <!-- ================= -->
      <!-- Start Words Section -->
      <words-lang v-if="SelectorsActive == 'words'" />
      <!-- End Words Section -->
      <!-- ================= -->
      <!-- Start Phrases Section  -->
      <phrases-lang v-if="SelectorsActive == 'phrases'" />
      <!-- End Phrases Section  -->
      <!-- ================= -->
    </div>
  </div>
</template>

<script>
import TalksLang from "@/components/dataRankings/TalksLang.vue";
import WordsLang from "@/components/dataRankings/WordsLang.vue";
import PhrasesLang from "@/components/dataRankings/PhrasesLang.vue";
export default {
  name: "ShowRankingsLang",
  data: function() {
    return {
      SelectorsActive: "talks"
    };
  },
  components: {
    WordsLang,
    TalksLang,
    PhrasesLang
  }
};
</script>
