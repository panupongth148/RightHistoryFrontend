<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col col-lg-5 col-md-12">
        <img width="100%" src="../../public/Image/Login.jpg" style="padding-top: 30%"/>
      </div>
      <div class="col col-lg-7 col-md-12" style="padding-top: 10%;">
        <div>
          <p class="tit" style="font-size: 35px">เข้าสู่ระบบCC</p>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pt-5 mb-5">
          <div class="row">
            <!-- <div class="col-3"></div> -->

            <div class="col">
              <b-form-group
                class="detail"
                id="input-group-1"
                label="ชื่อบัญชีผู้ใช้/อีเมล"
                label-for="input-1"
              >
                <b-form-input
                  class="detail"
                  id="input-1"
                  v-model="form.email"
                  placeholder="ชื่อผู้ใช้ หรือ อีเมล"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- <div class="col-3"></div> -->
          </div>

          <div class="row my-3">
            <!-- <div class="col-3"></div> -->

            <div class="col">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="รหัสผ่าน"
                label-for="input-2"
                type="password"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.password"
                  placeholder="รหัสผ่าน"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- <div class="col-3"></div> -->
          </div>

          <b-button type="submit" variant="success" class="mr-3"
            >เข้าสู่ระบบ</b-button
          >
          <router-link to="/register"
            ><b-button type="button" class="ml-3" variant="primary"
              >สมัครบัญชีผู้ใช้</b-button
            ></router-link
          >
        </b-form>
      
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import router from "@/router";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },

  methods: {
    makeToast(variant = null, text) {
      console.log("toast");
      this.$bvToast.toast(text, {
        title: `ข้อความแจ้งเตือน`,
        variant: variant,
        autoHideDelay: 2000,
        solid: true,
      });
    },
    goHomePage() {
      this.$router.push({ path: `/` });
    },
    async onSubmit(event) {
      event.preventDefault();
      console.log("submit");
      const data = {
        email: this.form.email,
        password: this.form.password,
      };
      await axios
        .post("/login", data)
        .then((res) => {
          // this.showDismissibleAlert = true;
          const token = res.data.message.token;
          localStorage.setItem("token_right", token);
          console.log(res.data);

          this.makeToast("success", "เข้าสู่ระบบสำเร็จ");
          this.$emit("auth-change");
          setTimeout(this.goHomePage, 2000);
          router.push({ path: '/' })
          const url = new URL('/', window.location.origin)
          window.location.href = url.toString()
        })
        .catch((err) => {
          console.log(err);
          alert("ชื่อบัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง");
          // this.makeToast("success", "เข้าสู่ระบบสำเร็จ");
        });
    },
  },
};
</script>

<style>
.header1 {
  font-family: "Bebas Neue", cursive;
  font-size: 35px;
}
.tit{
  font-family: "Kanit", sans-serif;
  font-size: 28px;
  text-align: center;
}
.detail {
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  text-align: left;
}
.icon-size {
  width: 10%;
  height: 5%;
}
.box-signup {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.box-signup:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.image {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
