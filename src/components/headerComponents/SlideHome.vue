<template>
  <header class="slide-home">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="box-content">
            <h1>
              أبدأ دراسة وتلخيص لغاتك
              <p>مع تطبيق <span>لغاتي</span></p>
            </h1>
            <div class="content-title">
              <p>
                ﻳﺴﺎﻋﺪك ﺗﻄﺒﻴﻖ ﻟﻐﺎﺗﻲ ﻋﻠﻰ ﺗﻌﻠﻢ اﻟﻠﻐﺎت ﻋﻦ ﻃﺮﻳﻖ أﻧﺸﺎء ﻣﻠﺨﺺ ﺑﺄﻛﺜﺮ ﻣﻦ
                ﻃﺮﻳﻘﺔ و أيضاً أنشاء أﻗﺴﺎم وﻣﺤﺎدﺛﺎت وﺟﻤﻞ وﻣﺼﻄﻠﺤﺎت مما يوفر ﺳﻬﻮﻟﺔ
                اﻟﻌﻮدة اﻟﻰ اﻟﻤﺮاﺟﻊ الخاصة بك .
              </p>
              <router-link tag="a" to="/register-login">أشتراك</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="box-img">
            <img src="@/assets/img/person.png" alt="Person Photo" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SlideHome"
};
</script>
