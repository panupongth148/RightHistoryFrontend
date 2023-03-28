import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        let date = new Date(value)
        // console.log(typeof value)
        // console.log(date)
        let min = date.getMinutes() +""
        
        if(min.length == 1){
          console.log("inif")
          min = "0"+ min
        }
        
        const nameMonth = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
        return date.getDate() + " " +nameMonth[date.getMonth()] + " " + (date.getFullYear()+543) + " เวลา "+ date.getHours()+":"+ min
    }
});

Vue.filter('request', function(value) {
  if (value) {
    let res = "";
    if(value == "waiting"){
      res = "กำลังพิจารณาคำร้อง"
    }else if(value == "success"){
      res = "คำร้องผ่านการอนุมัติ"
    }else{
      res = "คำร้องขอของท่านไม่ผ่านการอนุมัติ"
    }
     return res;
  }
});
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
