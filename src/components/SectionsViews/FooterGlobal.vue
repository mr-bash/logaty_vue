<template>
  <footer class="box-footer">
    <div class="container">
      <ul class="links">
        <router-link tag="li" to="/" exact
          ><a href="#">الرئيسية</a></router-link
        >
        <router-link tag="li" to="/about"
          ><a href="#">حول الخدمة</a></router-link
        >
        <router-link tag="li" to="/categorise"
          ><a href="#">الأقسام</a></router-link
        >
        <router-link tag="li" to="/contact"
          ><a href="#">اتصل بنا</a></router-link
        >
        <router-link tag="li" to="/register-login"
          ><a href="#">أشتراك/دخول</a></router-link
        >
      </ul>
      <hr />
      <div class="box-social">
        <a href="#"><img src="@/assets/img/face.png" alt="icon facebok"/></a>
        <a href="#"><img src="@/assets/img/insta.png" alt="icon instagram"/></a>
        <a href="#"><img src="@/assets/img/youtube.png" alt="icon youtube"/></a>
        <a href="#"><img src="@/assets/img/twt.png" alt="icon twitter"/></a>
      </div>
      <div class="copy">جميع الحقوق محفوظة &copy; 2020</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterGlobal"
};
</script>
