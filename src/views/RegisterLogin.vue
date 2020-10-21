<template>
  <div class="register-login" style="text-align: center">
    <slide-home />
    <login-and-register />
    <footer-global />
  </div>
</template>

<script>
import SlideHome from "@/components/headerComponents/SlideHome.vue";
import LoginAndRegister from "@/components/SectionsViews/LoginAndRegister.vue";
import FooterGlobal from "@/components/SectionsViews/FooterGlobal.vue";
export default {
  name: "RegisterLogin",
  components: {
    SlideHome,
    LoginAndRegister,
    FooterGlobal
  }
};
</script>
