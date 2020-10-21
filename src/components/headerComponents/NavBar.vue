<template>
  <div class="box-nav">
    <!-- Main Navbar -->
    <nav class="main-nav" id="nav-big">
      <div class="container">
        <div class="box-search">
          <form action="">
            <input type="text" name="search" placeholder="البحث عن ترجمة" />
            <button><img src="@/assets/img/search.png" alt="" /></button>
          </form>
        </div>
        <div class="box-links" style="">
          <ul>
            <router-link tag="li" to="/" exact
              ><a href="#">الرئيسية</a></router-link
            >
            <router-link tag="li" to="/about"
              ><a href="#">حول الخدمة</a></router-link
            >
            <router-link tag="li" to="/categories"
              ><a href="#">الأقسام</a></router-link
            >
            <router-link tag="li" to="/contact"
              ><a href="#">اتصل بنا</a></router-link
            >
            <router-link tag="li" to="/register-login"
              ><a href="#">أشتراك/دخول</a></router-link
            >
          </ul>
        </div>
        <div class="left-space">
          <div class="box-contact">
            <span>contact@email.com</span>
            <span>+90 534 123 4567</span>
          </div>
          <div class="box-brand">
            <img src="@/assets/img/brand.png" alt="brand logaty" />
          </div>
        </div>
      </div>
    </nav>
    <!-- Mobile Navbar -->
    <nav class="mobile-nav">
      <div class="menu" @click="StatusMenu = !StatusMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition name="bounce">
        <div class="box-links" v-if="StatusMenu">
          <div class="close-menu" @click="StatusMenu = !StatusMenu">
            <span></span>
            <span></span>
          </div>
          <div class="brand-links">
            <img src="@/assets/img/brand.png" alt="brand logaty" />
          </div>
          <ul>
            <router-link tag="li" to="/" exact
              ><a @click="StatusMenu = !StatusMenu" href="#"
                >الرئيسية</a
              ></router-link
            >
            <router-link tag="li" to="/about"
              ><a @click="StatusMenu = !StatusMenu" href="#"
                >حول الخدمة</a
              ></router-link
            >
            <router-link tag="li" to="/categories"
              ><a @click="StatusMenu = !StatusMenu" href="#"
                >الأقسام</a
              ></router-link
            >
            <router-link tag="li" to="/contact"
              ><a @click="StatusMenu = !StatusMenu" href="#"
                >اتصل بنا</a
              ></router-link
            >
            <router-link tag="li" to="/register-login"
              ><a @click="StatusMenu = !StatusMenu" href="#"
                >أشتراك/دخول</a
              ></router-link
            >
          </ul>
        </div>
      </transition>
      <div class="box-brand">
        <img src="@/assets/img/brand.png" alt="brand logaty" />
      </div>
    </nav>
  </div>
</template>

<script>
var outPositionScroll = window.pageYOffset;
window.onscroll = function() {
  var navBarEl = document.getElementById("nav-big"),
    nowScroll = window.pageYOffset;

  outPositionScroll > nowScroll
    ? (navBarEl.style.top = "0")
    : (navBarEl.style.top = "-80px");

  outPositionScroll = nowScroll;
};
export default {
  name: "NavBar",
  data: function() {
    return {
      StatusMenu: false
    };
  }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-out 0.2s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
