<template>
  <div class="categories-lang">
    <div class="container">
      <div class="title-sections">
        <h4>مراجع لغات عامة</h4>
        <p>
          ﻣﺮاﺟﻊ ﻋﺎﻣﺔ ﻟﻠﻐﺎت داﺧﻞ اﻟﺘﻄﺒﻴﻖ ﺣﻴﺚ ﻳﻮﺟﺪ ﻣﺼﻄﻠﺤﺎت وﺟﻤﻞ وﻣﺤﺎدﺛﺎت ﺗﻢ
          أﺿﺎﻓﺘﻬﺎ ﺑﺘﺼﺮف
        </p>
      </div>
      <div class="boxs-langs">
        <div class="row">
          <div class="col-md-4 col-sm-6 img-tr">
            <div class="box-lang">
              <router-link tag="a" to="/rankings"></router-link>
              <div class="content-box">
                <img src="@/assets/img/tr.png" alt="Flag Turkey" />
                <h5>اللغة التركية</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 img-en">
            <div class="box-lang">
              <router-link tag="a" to="/rankings"></router-link>
              <div class="content-box">
                <img src="@/assets/img/en.png" alt="Flag United Kingdom" />
                <h5>اللغة الانجليزية</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 img-gr">
            <div class="box-lang">
              <router-link tag="a" to="/rankings"></router-link>
              <div class="content-box">
                <img src="@/assets/img/gr.png" alt="Flag Germany" />
                <h5>اللغة الألمانية</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 img-is">
            <div class="box-lang">
              <router-link tag="a" to="/rankings"></router-link>
              <div class="content-box">
                <img src="@/assets/img/is.png" alt="Flag Ispanya" />
                <h5>اللغة الأسبانية</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 img-fr">
            <div class="box-lang">
              <router-link tag="a" to="/rankings"></router-link>
              <div class="content-box">
                <img src="@/assets/img/fr.png" alt="Flag France " />
                <h5>اللغة الفرنسية</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 img-ch">
            <div class="box-lang">
              <router-link tag="a" to="/rankings"></router-link>
              <div class="content-box">
                <img src="@/assets/img/ch.png" alt="Flag China " />
                <h5>اللغة الصينية</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesLang"
};
</script>
