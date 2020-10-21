<template>
  <div class="login-and-register">
    <div class="container">
      <div class="title-sections">
        <h4>أشتراك / دخول</h4>
        <p>
          مرحباً بك بأمكانك الأشتراك أو الدخول والأستفادة من الخدمات
        </p>
      </div>
    </div>
    <div class="area-form">
      <div class="container">
        <div class="box-form">
          <div class="row">
            <div class="col-6">
              <div
                class="sec-right"
                :style="
                  TypeActive == 'login'
                    ? 'padding: 80px 20px'
                    : 'padding: 40px 20px'
                "
              >
                <h5 v-if="TypeActive == 'login'">تسجيل الدخول</h5>
                <h5 v-if="TypeActive == 'register'">حساب جديد</h5>
                <form
                  action="login.php"
                  method="POST"
                  v-if="TypeActive == 'login'"
                  @submit="CheckLogin"
                >
                  <div class="form-group">
                    <label for="email">البريد الألكتروني</label>
                    <input
                      type="email"
                      v-model="InputEmail"
                      id="email"
                      class="form-control"
                    />
                    <img
                      src="@/assets/img/username.png"
                      width="17px"
                      alt="email icon"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">كلمة المرور</label>
                    <input
                      type="password"
                      v-model="InputPass"
                      id="password"
                      class="form-control"
                    />
                    <img
                      src="@/assets/img/password.png"
                      width="15px"
                      alt="password icon"
                    />
                  </div>
                  <div
                    v-if="Errors.length"
                    class="alert alert-danger"
                    role="alert"
                  >
                    <ul>
                      <li v-for="(Err, index) in Errors" :key="index">
                        {{ Err }}
                      </li>
                    </ul>
                  </div>
                  <button>دخول</button>
                </form>
                <form
                  action="register.php"
                  method="POST"
                  v-if="TypeActive == 'register'"
                  @submit="CheckRegister"
                >
                  <div class="form-group">
                    <label for="name">الأسم اللكامل</label>
                    <input
                      type="text"
                      v-model="InputName"
                      id="name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">البريد الألكتروني</label>
                    <input
                      type="email"
                      v-model="InputEmail"
                      id="email"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">كلمة المرور</label>
                    <input
                      type="password"
                      v-model="InputPass"
                      id="password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="confirm-password">تأكيد المرور</label>
                    <input
                      type="password"
                      v-model="InputPassConfirm"
                      id="confirm-password"
                      class="form-control"
                    />
                  </div>
                  <div
                    v-if="Errors.length"
                    class="alert alert-danger"
                    role="alert"
                  >
                    <ul>
                      <li v-for="(Err, index) in Errors" :key="index">
                        {{ Err }}
                      </li>
                    </ul>
                  </div>
                  <button>تسجيل</button>
                </form>
              </div>
            </div>
            <div class="col-6">
              <div class="sec-left">
                <div class="box-logo">
                  <img src="@/assets/img/logo-login.png" alt="container logo" />
                </div>
                <span
                  @click="
                    TypeActive = 'login';
                    Errors = [];
                  "
                  :class="TypeActive == 'login' ? 'active' : ''"
                  >تسجيل الدخول</span
                >
                <span
                  @click="
                    TypeActive = 'register';
                    Errors = [];
                  "
                  :class="TypeActive == 'register' ? 'active' : ''"
                  >حساب جديد</span
                >
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
  name: "RegisterLogin",
  data: function() {
    return {
      TypeActive: "login",
      Errors: [],
      InputName: "",
      InputEmail: "",
      InputPass: "",
      InputPassConfirm: ""
    };
  },
  methods: {
    CheckRegister: function(e) {
      this.Errors = [];
      if (!this.InputName) {
        this.Errors.push("الرجاء أدخال الأسم !");
      } else if (!this.InputEmail) {
        this.Errors.push("الرجاء أدخال البريد الألكتروني !");
      } else if (!this.InputPass) {
        this.Errors.push("الرجاء أدخال كلمة المرور !");
      } else if (
        this.InputPass &&
        this.InputPass &&
        this.InputPass != this.InputPassConfirm
      ) {
        this.Errors.push("الرجاء التاكد من تطابق كلمة المرور !");
      } else {
        return true;
      }
      e.preventDefault();
    },
    CheckLogin: function(e) {
      this.Errors = [];
      if (!this.InputEmail) {
        this.Errors.push("الرجاء أدخال البريد الألكتروني !");
      } else if (!this.InputPass) {
        this.Errors.push("الرجاء أدخال كلمة المرور !");
      } else {
        return true;
      }
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  color: #9d3a43;
  background-color: #fcdfe2;
  border-color: #fcdfe2;
  padding: 4px 30px;
  font-size: 16px;
}
</style>
