<template>
  <div class="container">
    <div class="row box-signup" style="margin-top: 20%">
      <div class="col col-lg-5 col-md-12">
        <img width="100%"  src="../../public/Image/Login.jpg">
      </div>
      <div class="col col-lg-7 col-md-12 py-5 pl-3">
        <div>
          <h3 class="detail-header"><b>เข้าสู่ระบบ</b></h3>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pt-3">
          <div class="row">
            <div class="col-3"></div>

            <div class="col-6">
              <b-form-group
                class="detail"
                id="input-group-1"
                label="อีเมล"
                label-for="input-1"
              >
                <b-form-input
                  class="detail"
                  id="input-1"
                  v-model="form.email"
                  type="อีเมล"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-3"></div>
          </div>

          <div class="row my-3">
            <div class="col-3"></div>

            <div class="col-6">
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

            <div class="col-3"></div>
          </div>

          <b-button type="submit" variant="primary" class="mr-3"
            >เข้าสู่ระบบ</b-button
          >
          <router-link to="/register" ><b-button type="button" class="ml-3"
            variant="primary">สมัครบัญชีผู้ใช้</b-button
          ></router-link>
          
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      form: {
        email: "barry888@gmail.com",
        password: "963852",
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
    async onSubmit(event) {
      event.preventDefault();
      console.log("submit");
      const data = {
        email: this.form.email,
        password: this.form.password,
      };
      await axios.post("/login", data).then((res) => {
        // this.showDismissibleAlert = true;
        const token = res.data.message.token;
        localStorage.setItem("token_right", token);
        console.log(res.data);
        this.$emit("auth-change");
        this.$router.push({ path: "/" });
        // this.$router.push({ path: "/" }).then(() => {
        //   window.location.reload();
        // });
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
.detail-header {
  font-family: "Kanit", sans-serif;
  font-size: 20px;
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