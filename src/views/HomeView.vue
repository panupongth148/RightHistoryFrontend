<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="header1">What You Want To Do</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12">
            <b-icon icon="book" font-scale="8"></b-icon>
          </div>
          <div class="col-lg-6 col-md-12">
            <h5 class="detail-header"><b>ลงทะเบียนผู้ขอรับสิทธิ์</b></h5>
            <p class="detail pt-2">
              ลงทะเบียนสำหรับผู้ขอรับสิทธิ์ที่ไม่เคยลงทะเบียนกับ
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
              ของผู้มาขอรับสิทธิ์ภายในสำนักงานปลัดนายกรัฐมนตรี
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
              ค้นหาประวัติการขอรับสิทธิ์ในสำนักปลัดนายกรัฐมนตรี
              ที่ได้ทำการเพิ่มข้อมูลการขอรับสิทธิ์
            </p>
            <router-link to="/search" style="color: white"
              ><b-button variant="info">ค้นหา</b-button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
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
