<template>
  <div class="container">
    <!-- <b-input-group class="mt-3">
    
      <b-input-group-text v-model="textSearch"></b-input-group-text>
   
    <b-form-input></b-form-input>
  </b-input-group> -->
  <h2 class="mt-5 detail-header">ค้นหาผู้ร้องสิทธิ</h2>
    <div class="row mt-5">
      <div class="col">
        <b-form-input v-model="textSearch" @input="searchName" placeholder="โปรดใส่ชื่อ"></b-form-input>
        
        <NameCard
          v-for="(nameinfo, index) in nameSearched"
          :key="index"
          :claimant="nameinfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import NameCard from "../components/NameBox.vue";
export default {
  components: {
    NameCard,
  },
  data() {
    return {
      textSearch: "",
      title: "test",
      nameSearched: null,
    };
  },
  methods: {
    capitalize(str) {
      const lower = str.toLowerCase();
      return str.charAt(0).toUpperCase() + lower.slice(1);
    },
    async searchName() {
      let firstname;
      let lastname;
      let result;
      // console.log(this.textSearch)
      if (this.textSearch.search(" ") !== -1) {
        // console.log("in have last name ")
        const arrSplit = this.textSearch.split(" ");
        // console.log(arrSplit)
        firstname = arrSplit[0];
        lastname = arrSplit[1];
        lastname = this.capitalize(lastname);
      } else {
        firstname = this.textSearch;
        lastname = "";
      }
      // console.log(firstname)
      firstname = this.capitalize(firstname);
      if (this.textSearch != "") {
        await axios
          .get("/searchname", {
            params: {
              Firstname: firstname,
              Lastname: lastname,
            },
          })
          .then((res) => {
            this.nameSearched = res.data;
            for (let i = 0; i < this.nameSearched.length; i++) {
              result += `<NameCard 
      :key="${i}"
      :claimant="${this.nameSearched[0]}"
      />`;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.nameSearched = null;
      }
    },
  },
  computed: {},
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