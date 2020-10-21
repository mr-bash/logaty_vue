<template>
  <div class="about-section">
    <div class="container">
      <div class="title-sections">
        <h4>حول التطبيق</h4>
        <p>
          ﻟﻐﺎﺗﻲ ﻫﻲ ﺧﺪﻣﺔ ﻣﺠﺎﻧﻴﺔ أو ﺑﺎﻷﺣﺮى ﻋﺪة ﺧﺪﻣﺎت واﻫﻤﻬﺎ ﺗﺴﺎﻋﺪ ﺑﺘﻌﻠﻴﻢ اﻟﻠﻐﺎت
          وﺗﺨﻠﻴﺼﻬﺎ واﻟﺮﺟﻮع ﻟﻬﺎ ﺑﺴﻬﻮﻟﺔ︀
        </p>
        <div class="row">
          <div class="col-md-6 order-2 col-sm-12 order-md-1">
            <div class="box-content">
              <h6>مذكرتك الألكترونية معك بكل مكان وزمان</h6>
              <p>
                ﺗﻌﺘﻤﺪ ﻓﻜﺮة اﻟﺘﻄﺒﻴﻖ ﻋﻠﻰ اﻷﺑﺘﻌﺎد ﻗﻠﻴﻼً ﻋﻦ اﻟﻄﺮﻳﻘﺔ اﻟﺘﻠﻘﻴﺪﻳﺔ "اﻟﻘﻠﻢ
                واﻟﺪﻓﺘﺮ" ﺑﺤﻴﺚ ﻧﺴﺎﻋﺪك ﻋﻠﻰ دراﺳﺔ ﻟﻐﺎﺗﻚ ﻋﻦ ﻃﺮﻳﻖ اﻟﺘﻄﺒﻴﻖ او اﻟﻤﻮﻗﻊ
                ﻷﺧﺘﺼﺎر اﻟﻮﻗﺖ ﻋﻨﺪ ﺗﻠﺨﻴﺺ اﻟﺪروس إذ ﻧﻘﺪم ﻟﻚ ﻗﻮاﻟﺐ ﻣﺘﻌﺪدة ﺗﺸﻤﻞ ﻛﻞ ﻣﻦ
                "ﻣﺼﻄﻠﺤﺎت, ﺟﻤﻞ, ﻣﺤﺎدﺛﺎت" وﻳﺘﻢ ﺣﻔﻈﻬﺎ ﺑﺤﺴﺎﺑﻚ اﻟﺸﺨﺼﻲ واﻷﻫﻢ ﺳﻬﻮﻟﺔ
                اﻟﺮﺟﻮع ﻟﻠﻤﻠﺨﺼﺎت ﻋﻦ ﻃﺮﻳﻖ اﻟﺒﺤﺚ او اﻷﻗﺴﺎم ﻣﻤﺎ ﻳﻌﻄﻲ ﺳﻬﻮﻟﺔ اﻟﻤﺮاﺟﻌﺔ
                ﻋﻠﻰ ﻋﻜﺲ اﻟﻄﺮﻳﻘﺔ اﻟﺘﻘﻠﻴﺪﻳﺔ .
              </p>
              <router-link tag="a" to="/register-login">أشتراك</router-link>
            </div>
          </div>
          <div class="col-md-6 order-1 col-sm-12 order-md-2">
            <div class="box-img">
              <img src="@/assets/img/about.png" alt="about photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>
