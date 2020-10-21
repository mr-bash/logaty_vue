<template>
  <div class="talks-langs">
    <div
      class="content content-talks"
      v-for="(tabel, index) in tabelsLang"
      :key="index"
    >
      <h6>{{ index }}</h6>
      <div class="row" v-for="tabel2 in tabel" :key="tabel2">
        <div class="col-md-12 style-box" v-for="data in tabel2" :key="data">
          <div class="table-lang">
            <input type="hidden" :value="(nameAvatar = data[2][0] + '.png')" />
            <img class="img-profile" :src="getAvatar()" alt="face icon" />
            <div class="talk">
              <p>{{ data[0][0] }}</p>
              <hr />
              <p>{{ data[1][0] }}</p>
              <div class="box-icon">
                <img
                  class="icon-sound"
                  src="@/assets/img/sound.png"
                  alt="sound icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const objTalks = {
  "محادثة رقم 1": [
    [
      [["Aile fertlerin kimlerden oluşur"], ["ﻣﻤﻦ ﺗﺘﻜﻮن ﻋﺎﺋﻠﺘﻚ ؟"], ["face-1"]],
      [
        [
          "Babam, annem, erkek kardeşlerim, kız kardeşlerim, amcalarım, dayılarım ve diğerleri."
        ],
        ["ﻣﻦ أﺑﻲ وأﻣﻲ وإﺧﻮاﻧﻲ وأﺧﻮاﺗﻲ وأﻋﻤﺎﻣﻲ وأﺧﻮاﻟﻲ وﻏﻴﺮﻫﻢ"],
        ["face-2"]
      ],
      [["Aile fertlerin kimlerden oluşur"], ["ﻣﻤﻦ ﺗﺘﻜﻮن ﻋﺎﺋﻠﺘﻚ ؟"], ["face-1"]],
      [
        [
          "Babam, annem, erkek kardeşlerim, kız kardeşlerim, amcalarım, dayılarım ve diğerleri."
        ],
        ["ﻣﻦ أﺑﻲ وأﻣﻲ وإﺧﻮاﻧﻲ وأﺧﻮاﺗﻲ وأﻋﻤﺎﻣﻲ وأﺧﻮاﻟﻲ وﻏﻴﺮﻫﻢ"],
        ["face-2"]
      ],
      [["Aile fertlerin kimlerden oluşur"], ["ﻣﻤﻦ ﺗﺘﻜﻮن ﻋﺎﺋﻠﺘﻚ ؟"], ["face-1"]],
      [
        [
          "Babam, annem, erkek kardeşlerim, kız kardeşlerim, amcalarım, dayılarım ve diğerleri."
        ],
        ["ﻣﻦ أﺑﻲ وأﻣﻲ وإﺧﻮاﻧﻲ وأﺧﻮاﺗﻲ وأﻋﻤﺎﻣﻲ وأﺧﻮاﻟﻲ وﻏﻴﺮﻫﻢ"],
        ["face-2"]
      ]
    ]
  ],
  "محادثة رقم 2": [
    [
      [["Aile fertlerin kimlerden oluşur"], ["ﻣﻤﻦ ﺗﺘﻜﻮن ﻋﺎﺋﻠﺘﻚ ؟"], ["face-1"]],
      [
        [
          "Babam, annem, erkek kardeşlerim, kız kardeşlerim, amcalarım, dayılarım ve diğerleri."
        ],
        ["ﻣﻦ أﺑﻲ وأﻣﻲ وإﺧﻮاﻧﻲ وأﺧﻮاﺗﻲ وأﻋﻤﺎﻣﻲ وأﺧﻮاﻟﻲ وﻏﻴﺮﻫﻢ"],
        ["face-2"]
      ],
      [["Aile fertlerin kimlerden oluşur"], ["ﻣﻤﻦ ﺗﺘﻜﻮن ﻋﺎﺋﻠﺘﻚ ؟"], ["face-1"]],
      [
        [
          "Babam, annem, erkek kardeşlerim, kız kardeşlerim, amcalarım, dayılarım ve diğerleri."
        ],
        ["ﻣﻦ أﺑﻲ وأﻣﻲ وإﺧﻮاﻧﻲ وأﺧﻮاﺗﻲ وأﻋﻤﺎﻣﻲ وأﺧﻮاﻟﻲ وﻏﻴﺮﻫﻢ"],
        ["face-2"]
      ]
    ]
  ]
};
export default {
  name: "TalksLang",
  data: function() {
    return {
      tabelsLang: objTalks,
      nameAvatar: ""
    };
  },
  methods: {
    getAvatar: function() {
      return require("@/assets/img/" + this.nameAvatar);
    }
  }
};
</script>
