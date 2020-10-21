<template>
  <div class="contact-section">
    <div class="container">
      <div class="title-sections">
        <h4>اتصل بنا</h4>
        <p>
          يسرنا تواصلك معنا ومراجعة أستفساراتكم
        </p>
      </div>
    </div>
    <div class="area-form">
      <div class="container">
        <div class="box-form">
          <form action="send.html" @submit="CheckErrors" method="POST">
            <div class="form-group">
              <label class="star" for="name">الأسم</label>
              <input
                type="text"
                id="name"
                v-model="InputName"
                class="form-control"
                placeholder="الرجاء أدخال الأسم الكامل"
              />
            </div>
            <div class="form-group">
              <label class="star" for="email">البريد الألكتروني</label>
              <input
                type="email"
                id="email"
                v-model="InputEmail"
                class="form-control"
                placeholder="الرجاء أدخال البريد الألكتروني"
              />
            </div>
            <div class="form-group">
              <label for="subject">الموضوع</label>
              <input
                type="text"
                id="subject"
                v-model="InputSubject"
                class="form-control"
                placeholder="الرجاء أدخال عنوان للموضوع"
              />
            </div>
            <div class="form-group">
              <label class="star" for="message">الرسالة</label>
              <textarea
                name="message"
                id="message"
                v-model="InputMsg"
                placeholder="رسالتك ..."
              ></textarea>
            </div>
            <button>أرسال</button>
            <div v-if="Errors.length" class="alert alert-danger" role="alert">
              <ul>
                <li v-for="(Err, index) in Errors" :key="index">{{ Err }}</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  data: function() {
    return {
      Errors: [],
      InputName: "",
      InputEmail: "",
      InputSubject: "",
      InputMsg: ""
    };
  },
  methods: {
    CheckErrors: function(e) {
      this.Errors = [];
      if (!this.InputName) {
        this.Errors.push("الرجاء أدخال الأسم !");
      } else if (!this.InputEmail) {
        this.Errors.push("الرجاء أدخال البريد الألكتروني !");
      } else if (!this.InputMsg) {
        this.Errors.push("الرجاء أدخال الرسالة !");
      } else {
        return true;
      }
      e.preventDefault();
    }
  }
};
</script>
