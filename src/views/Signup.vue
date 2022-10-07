<template>
  <div class="container">
    <div class="row box-signup mt-5">
      <div class="col-lg-5 col-md-12">
        <img
          width="100%"
          style="padding-top: 30%"
          src="../../public/Image/signup.jpg"
          class="ml-2"
        />
      </div>
      <div class="col col-lg-7 col-md-12 py-5 pl-3">
        <p class="detail-header"><b>สมัครบัญชีผู้ใช้</b></p>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pt-3">
          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="รหัสประจำตัวพนักงาน"
                label-for="input-2"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.employeeId"
                  placeholder="รหัสประจำตัวพนักงาน"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-2"></div>
          </div>
          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
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

            <div class="col-2"></div>
          </div>

          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
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

            <div class="col-2"></div>
          </div>
          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="ชื่อ"
                label-for="input-2"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.firstName"
                  placeholder="ชื่อ"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-2"></div>
          </div>
          <div class="row mt-3 mb-4">
            <div class="col-2"></div>

            <div class="col-8">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="นามสกุล"
                label-for="input-2"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.lastName"
                  placeholder="นามสกุล"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-2"></div>
          </div>

          <b-button type="submit" variant="primary" class="mr-3"
            >ลงทะเบียน</b-button
          >
          <router-link to="/login"
            ><b-button type="button" class="ml-3" variant="primary"
              >ไปหน้าเข้าสู่ระบบ</b-button
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
        firstName: "",
        lastName: "",
        employeeId: "",
        checked: [],
      },
      showDismissibleAlert: false,
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
      // alert(JSON.stringify(this.form))

      const formData = new FormData();
      formData.append("EmployeeId", this.employeeId);
      formData.append("Email", this.email);
      formData.append("Password", this.password);
      formData.append("Firstname", this.firstName);
      formData.append("Lastname", this.lastName);
      const data = {
        EmployeeId: this.form.employeeId,
        Email: this.form.email,
        Password: this.form.password,
        Firstname: this.form.firstName,
        Lastname: this.form.lastName,
        token: "token",
      };
      console.log(data);
      await axios.post("/register", data).then((res) => {
        // this.showDismissibleAlert = true;
        this.makeToast("success");
        setTimeout(this.goHomePage, 2000);
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("ลงทะเบียนบัญชีผู้ใช้สำเร็จ", {
        title: `ข้อความแจ้งเตือน`,
        variant: variant,
        solid: true,
      });
    },
    goHomePage() {
      this.$router.push({ path: "/login" });
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