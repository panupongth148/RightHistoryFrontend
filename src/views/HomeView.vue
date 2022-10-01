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
            <h5 class="detail-header"><b>ลงทะเบียนผู้ร้องสิทธิ</b></h5>
            <p class="detail pt-2">
              ลงทะเบียนผู้เรียกร้องสิทธิสำหรับผู้ร้องสิทธิที่ไม่เคยลงทะเบียนกับ
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
            <h5 class="detail-header"><b>เพิ่มข้อมูลการเรียกร้องสิทธิ</b></h5>
            <p class="detail pt-2">
              เพิ่มหัวข้อและเอกสารการเรียกร้องสิทธิ
              ของผู้มาร้องสิทธิภายในสำนักงานปลัดนายกรัฐมนตรี
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
            <h5 class="detail-header"><b>ค้นหาประวัติการเรียกร้องสิทธิ</b></h5>
            <p class="detail pt-2">
              ค้นหาประวัติการเรียกร้องสิทธิในสำนักปลัดนายกรัฐมนตรี
              ที่ได้ทำการเพิ่มข้อมูลการเรียกร้องสิทธิ
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