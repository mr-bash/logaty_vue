<template>
  <div class="words-lang">
    <div class="content content-words">
      <div class="row">
        <div
          class="col-md-4 col-xsm-12 box-tabels"
          v-for="(tabel, index) in tabelsLang"
          :key="index"
        >
          <div class="table-lang">
            <h6>{{ index }}</h6>
            <div class="row no-gutters tabel-words">
              <ul class="col-6 t1">
                <li class="co1" v-for="data in tabel[1]" :key="data">
                  <span>{{ data }}</span>
                </li>
              </ul>
              <ul class="col-6 t1">
                <li class="co2" v-for="data in tabel[0]" :key="data">
                  <span>{{ data }}</span>
                  <img src="@/assets/img/sound.png" alt="sound icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const objWords = {
  "Tabel 1": [
    ["Abdlakader", "Albash", "Syria", "Age", "Developer"],
    ["عبدالقادر", "الباش", "سوريا", "العمر", "مطور"]
  ],
  "Tabel 2": [
    ["Merhaba2", "Merhaba2", "Merhaba2", "Merhaba2", "Merhaba2"],
    ["2مرحبا", "مرحبا2", "مرحبا2", "مرحبا2", "مرحبا2"]
  ],
  "Tabel 3": [
    ["Merhaba3", "Merhaba3", "Merhaba3", "Merhaba3", "Merhaba3"],
    ["3مرحبا", "مرحبا3", "مرحبا3", "مرحبا3", "مرحبا3"]
  ]
};
export default {
  name: "WordsLang",
  data: function() {
    return {
      tabelsLang: objWords
    };
  }
};
</script>
