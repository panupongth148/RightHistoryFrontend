<template>
  <div class="container mt-5">
    <div class="row box-signup">
      <div class="col-lg-5 col-md-12">
        <img
          width="100%"
          style="padding-top: 40%"
          src="../../public/Image/SignupAcc.jpg"
        />
      </div>
      <div class="col-lg-7 col-md-12 py-5 pl-3">
        <div>
          <h3 class="tit"><b>ลงทะเบียนผู้ขอรับสิทธิรายใหม่</b></h3>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pt-3">
          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="เลขบัตรประจำตัวประชาชน"
                label-for="input-2"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.idCard"
                  placeholder="เลขบัตรประจำตัวประชาชน"
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
          <div class="row my-3">
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
          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="อายุ"
                label-for="input-2"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.age"
                  placeholder="อายุ"
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
                label="อาชีพ"
                label-for="input-2"
              >
                <b-form-input
                  class="detail"
                  id="input-2"
                  v-model="form.job"
                  placeholder="อาชีพ"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-2"></div>
          </div>

          <b-button type="submit" variant="success" class="mr-3 detail"
            >ลงทะเบียน</b-button
          >
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
        idCard: "",
        firstName: "",
        lastName: "",
        age: "",
        job: "",
        timeOfRequest: 1,
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

      const formData = new FormData();
      formData.append("EmployeeId", this.employeeId);
      formData.append("Email", this.email);
      formData.append("Password", this.password);
      formData.append("Firstname", this.firstName);
      formData.append("Lastname", this.lastName);
      const data = {
        IdCard: this.form.idCard,
        Firstname: this.form.firstName,
        Lastname: this.form.lastName,
        Age: this.form.age,
        Job: this.form.job,
        Status: "waiting",
        TimesOfRequest: this.form.timeOfRequest,
      };
      // console.log(data);
      await axios.post("/accountclaimant", data).then((val) => {
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
      this.$bvToast.toast("ลงทะเบียนผู้ขอรับสิทธิสำเร็จ", {
        title: `ข้อความแจ้งเตือน`,
        variant: variant,
        solid: true,
      });
    },
    goHomePage() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style>
.header1 {
  font-family: "Bebas Neue", cursive;
  font-size: 45px;
}
.tit {
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