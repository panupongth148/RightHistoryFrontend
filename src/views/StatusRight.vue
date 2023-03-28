<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <p class="header1">ข้อมูลการขอรับสิทธิ</p>
        <hr />
        <div class="row mt-5">
          <div class="col">
            <div class="header-tab">
              <p>คำร้องการขอรับสิทธิ</p>
            </div>
            <div class="mt-4">
              <div v-for="(doc, index) in docData" :key="index">
                <div class="mb-4">
                  <div>
                    <p class="title-content-card">
                      {{ doc.Document[0].title }}
                    </p>
                    <p class="description-content">
                      ร้องขอเมื่อ : {{ doc.Document[0].time | formatDate }}
                    </p>
                  </div>
                  <div class="mt-2">
                    <p class="content-in-card">
                      สถานะคำร้อง : {{ doc.Document[0].state | request }}
                    </p>
                  </div>

                  <div>
                    <router-link
                      :to="{
                        name: 'detailright',
                        params: { claimid: accData._id, docid: index},
                      }"
                      ><p class="content-in-card-link">
                        ดูรายละเอียดคำร้องขอ
                      </p></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="header-tab">
              <p>ข้อมูลผู้ขอรับสิทธิ</p>
            </div>
            <div class="mt-4">
              <p class="detail-header">
                {{ accData.Firstname }} {{ accData.Lastname }}
              </p>
            </div>
            <div>
              <p class="detail">อายุ : {{ accData.Age }} ปี</p>
            </div>
            <div>
              <p class="detail">อาชีพ : {{ accData.Job }}</p>
            </div>
          </div>
        </div>
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
      accData: null,
      docData: null,
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.getStatus(this.$route.params.id);
  },

  methods: {
    capitalize(str) {
      const lower = str.toLowerCase();
      return str.charAt(0).toUpperCase() + lower.slice(1);
    },
    async getStatus(cliamid) {
      await axios
        .get(`/accbyid/${cliamid}`)
        .then((res) => {
          console.log(res.data);
          this.accData = res.data.accData;
          this.docData = res.data.docData;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    dateFormat(date) {
      return "date";
    },
  },
};
</script>
  
  <style>
.header1 {
  font-family: "Kanit", sans-serif;
  font-size: 28px;
}
.detail-header {
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  text-align: left;
}
.header-tab {
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  text-align: left;
}
.title-content-card {
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  text-align: left;
  font-weight: bold;
}
.content-in-card {
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  text-align: left;
}
.content-in-card-link {
  font-family: "Kanit", sans-serif;
  font-size: 14px;
  text-align: left;
  font-weight: lighter;
  color: gray;
}
.description-content {
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  text-align: left;
  font-weight: lighter;
  margin-top: -4%;
  color: gray;
}
.detail {
  font-family: "Kanit", sans-serif;
  font-size: 18px;
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
.button-tab {
  position: absolute;
  left: 0;
  width: 120px;
}
</style>