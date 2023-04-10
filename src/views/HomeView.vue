<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="header1">คุณต้องการที่จะทำอะไร?</p>
      </div>
    </div>

    

    <!-- population part -->
    <template v-if="user.type != 'emp'">
    <div class="row">
      <div class="col">
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="arrow-repeat" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>ตรวจสอบสถานะคำร้องขอรับสิทธิ์</b></h5>
            <p class="detail pt-2">
              ประชาชนทั่วไปสามารถตรวจสอบสถานะคำร้องที่ทำการยื่นคำร้องขอรับสิทธิ์ไปพิจารณา
            </p>
            <router-link to="/addacc" style="color: white"
              ><b-button variant="info">ตรวจสอบ</b-button></router-link
            >
          </div>
        </div>
      </div>
    </div>

  </template>
    <!-- emp part -->
<template v-else-if="user.type == 'emp'">
    <div class="row">
      <div class="col">
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="book" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>ลงทะเบียนผู้ขอรับสิทธิ์</b></h5>
            <p class="detail pt-2">
              ลงทะเบียนผู้ขอรับสิทธิ์สำหรับผู้ขอรับสิทธิ์ที่ไม่เคยลงทะเบียนกับ
              website นี้
            </p>
            <router-link to="/addacc" style="color: white"
              ><b-button variant="info">ลงทะเบียน</b-button></router-link
            >
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="info-circle" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>เพิ่มข้อมูลการขอรับสิทธิ์</b></h5>
            <p class="detail pt-2">
              เพิ่มหัวข้อและเอกสารการขอรับสิทธิ์
              ของผู้มาขอรับสิทธิ์ภายในสำนักงานปลัดสำนักนายกรัฐมนตรี
            </p>
            <router-link to="/newright" style="color: white"
              ><b-button variant="info">เพิ่มเอกสาร</b-button></router-link
            >
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="search" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>ค้นหาประวัติการขอรับสิทธิ์</b></h5>
            <p class="detail pt-2">
              ค้นหาประวัติการขอรับสิทธิ์ในสำนักปลัดสำนักนายกรัฐมนตรี
              ที่ได้ทำการเพิ่มข้อมูลการขอรับสิทธิ์
            </p>
            <router-link to="/search" style="color: white"
              ><b-button variant="info">ค้นหา</b-button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </template>

    <!-- not login -->
  <template v-else-if="user == null">
    <div class="row">
      <div class="col">
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="arrow-repeat" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>ตรวจสอบสถานะคำร้อง</b></h5>
            <p class="detail pt-2">
              ประชาชนทั่วไปสามารถตรวจสอบสถานะคำร้องขอรับสิทธิ์ที่ทำการยื่นคำร้องขอรับสิทธิ์ไปพิจารณา
            </p>
            <router-link to="/addacc" style="color: white"
              ><b-button variant="info">ตรวจสอบ</b-button></router-link
            >
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="arrow-repeat" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>เข้าสู่ระบบ</b></h5>
            <p class="detail pt-2">
               เข้าสู่ระบบสำนักงาน
            </p>
            <router-link to="/addacc" style="color: white"
              ><b-button variant="info">ตรวจสอบ</b-button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </template>



  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "@/plugins/axios";
export default {
  // props: ["user"],
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: null,
      isLogin: false,
    };
  },
  async mounted() {
    await this.onAuthChange();
  },
  methods: {
    checkUser() {
      console.log(this.user);
    },
    onAuthChange() {
      const token = localStorage.getItem("token_right");
      if (token) {
        console.log(token)
        this.getUser();
        this.isLogin = true
      }
    },
    async getUser() {
      await axios
        .get("/user/me")
        .then((res) => {
          this.user = res.data;
          console.log(this.user);
        })
        .then((val) => {});
    },
  },
};
</script>
<style>
.header1 {
  font-family: "Bebas Neue", cursive;
  font-size: 45px;
}
.detail-header {
  font-family: "Kanit", sans-serif;
  font-size: 24px;
}
.detail {
  font-family: "Kanit", sans-serif;
  font-size: 20px;
}
.icon-size {
  width: 10%;
  height: 5%;
}
</style>
