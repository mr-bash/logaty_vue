<template>
  <div class="words-phrases">
    <div class="content content-phrases">
      <div class="col-md-12" v-for="(tabel, index) in PhrasesData" :key="index">
        <div class="table-lang">
          <h6>{{ index }}</h6>
          <div class="row no-gutters tabel-words">
            <ul class="col-6">
              <li class="co1" v-for="data in tabel[0]" :key="data">
                <span>{{ data }}</span>
              </li>
            </ul>
            <ul class="col-6">
              <li class="co2" v-for="data in tabel[1]" :key="data">
                <span>{{ data }}</span>
                <img src="@/assets/img/sound.png" alt="sound icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const objPhrases = {
  "Tabel 1": [
    [
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ"
    ],
    [
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?"
    ]
  ],
  "Tabel 2": [
    [
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ"
    ],
    [
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?"
    ]
  ],
  "Tabel 3": [
    [
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ",
      "اﻟﻰ اﻳﻦ اﻧﺖ ذاﻫﺐ؟ ، ﻣﻦ اﻳﻦ اﺗﻴﺖ"
    ],
    [
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?",
      "Nereden geldin, nereye gidiyorsun?"
    ]
  ]
};
export default {
  name: "PhrasesLang",
  data: function() {
    return {
      PhrasesData: objPhrases
    };
  }
};
</script>
