<template>
  <div class="container">
    <div class="row box-signup mt-5">
      
      <div class="col mb-5">
        <div class="row" style="text-align: center;">
          <div class="col">
            <p class="mt-5 tit"><b>เพิ่มข้อมูลประวัติการขอรับสิทธิ</b></p>
          </div>
          
        </div>

        <div class="row my-3">
          <div class="col-2"></div>

          <div class="col-8">
            <p class="mt-5 detail">เลือกผู้ขอรับสิทธิ</p>
            <b-form-input
              class="detail"
              list="my-list-id"
              v-model="selectedClaimant"
            ></b-form-input>

            <datalist id="my-list-id">
              <option v-for="user in this.claimant" :key="user._id">
                {{ user.Firstname }} {{ user.Lastname }}
              </option>
            </datalist>
          </div>

          <div class="col-2"></div>
        </div>

        <b-form @submit="onSubmit" v-if="show">
          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
              <b-form-group
                class="detail"
                id="input-group-2"
                label="เรื่องขอรับสิทธิ"
                label-for="input-2"
              >
              <b-form-input
              class="detail"
              list="my-list-title"
              v-model="form.title"
            ></b-form-input>

            <datalist id="my-list-title">
              <option v-for="user in this.titleIntitial" :key="user">
                {{user}}
              </option>
            </datalist>
              </b-form-group>
            </div>

            <div class="col-2"></div>
          </div>

          <div class="row my-3">
            <div class="col-2"></div>

            <div class="col-8">
              <div class="row">
                <div class="col-9">
                  <b-form-group
                    class="detail"
                    id="input-group-2"
                    label="อับโหลด"
                    label-for="input-2"
                  >
                    <b-form-file
                      v-model="file1"
                      :state="Boolean(file1)"
                      placeholder="โปรดอัปโหลดไฟล์และกดปุ่มเพิ่มทีละไฟล์"
                      drop-placeholder="ลากไฟล์ที่นี่"
                    ></b-form-file>
                    <b-button
                      type="button"
                      @click="addFile"
                      variant="success"
                      class="mt-2 detail"
                      >เพิ่มไฟล์</b-button
                    ></b-form-group
                  >

                  <!-- <div class="mt-3">Select file: {{ file1 ? file1.name : "" }}</div> -->
                </div>
                <div class="col-3"></div>
              </div>
              <div class="mt-3 detail">ไฟล์ที่ถูกเลือก</div>
              <div
                class="mt-1 detail"
                v-for="(file, index) in files"
                :key="index"
              >
                {{ index + 1 + ". " }}{{ file.name }}
                <b-button
                  type="button"
                  @click="files.splice(index, 1)"
                  variant="danger"
                  class="ml-3"
                  >ลบ</b-button
                >
              </div>
            </div>

            <div class="col-2"></div>
          </div>

          <b-button type="submit" variant="primary" class="mr-3 mt-3 pb-2"
            >เพิ่มการร้องสิทธิ</b-button
          >
        </b-form>
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
      selectedClaimant: "",
      textSearch: "",
      title: "test",
      nameSearched: null,
      form: {
        title: "",
      },
      file1: null,
      files: [],
      claimant: [],
      titleIntitial: ["บำเหน็จความชอบ", "ค่าทดแทนและการช่วยเหลือ", "บำเหน็จความชอบ ค่าทดแทนและการช่วยเหลือ"],
      show: true,
    };
  },
  mounted() {
    this.getAllCliamant();
  },
  methods: {
    makeToast(variant = null, text) {
      this.$bvToast.toast(text, {
        title: `ข้อความแจ้งเตือน`,
        variant: variant,
        solid: true,
      });
    },
    goHomePage() {
      this.$router.push({ path: `/search` });
    },
    addFile() {
      this.files.push(this.file1);
    },
    async onSubmit(event) {
      event.preventDefault();
      // console.log("submit");
      // console.log(this.selectedClaimant);
      // console.log(this.file1);
      const id = this.claimant.filter(
        (val) => val.Firstname + " " + val.Lastname === this.selectedClaimant
      );
      const today = new Date();
      console.log(id[0]._id);
      console.log(this.file1.name);
      const formData = new FormData();
      formData.append("ClaimantId", id[0]._id);
      formData.append("Title", this.form.title);
      formData.append("Status", "waiting")
      formData.append("Date", today)
      this.files.forEach((val) => {
        formData.append("files", val);
      });
      // formData.append('File', this.file1);
      // const data = {
      //   email: this.form.email,
      //   password: this.form.password
      // }

      axios
        .post(`/righthistory/create`, formData)
        .then((res) => {
          // alert("ลงทะเบียนสำเร็จ");
          this.files = [];
          this.file1 = null;
          this.makeToast("success", "เพิ่มข้อมูลการขอรับสิทธิสำเร็จ");
          setTimeout(this.goHomePage, 2000);
          
        })
        .catch((err) => {
          alert(err.response.data.details.message);
        });
    },
    async getAllCliamant() {
      await axios
        .get("/accountclaimant")
        .then((res) => {
          this.claimant = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
        console.log("in have last name ");
        const arrSplit = this.textSearch.split(" ");
        console.log(arrSplit);
        firstname = arrSplit[0];
        lastname = arrSplit[1];
        lastname = this.capitalize(lastname);
      } else {
        firstname = this.textSearch;
        lastname = "";
      }
      console.log(firstname);
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
.tit {
  font-family: "Kanit", sans-serif;
  font-size: 26px;
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