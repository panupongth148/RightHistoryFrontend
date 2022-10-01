<template>
  <div class="container mt-5">
    <p class="header1">{{ rightDoc.title }}</p>

    <p class="mt-5 detail-header">Selected Your File</p>
    <b-input list="my-list-id" v-model="selectedDoc" @change="changeDoc"></b-input>
    <datalist id="my-list-id">
      <option v-for="file in this.rightDoc.files" :key="file.name">
        {{ file.file_name }}
      </option>
    </datalist>
    <div class="row mt-5" v-if="selectedType.includes('image')">
      <div class="col">
        <p class="detail-header">{{docShow.file_name}}</p>
        <figure class="image">
          <img
            style="height: 320px; width: 60%"
            :src="imagePath(docShow.file_path)"
            alt="Placeholder image"
          />
        </figure>
      </div>
    </div>
    <div class="row mt-5" v-if="selectedType.includes('pdf')">
      <div class="col">
        <p class="detail-header">{{docShow.file_name}}</p>
        <a :href="imagePath(docShow.file_path)" target="_blank" style="color:white" variant="info"><b-button type="button" class="mt-5" variant="info">ดูไฟล์ PDF</b-button></a>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "@/plugins/axios";
import PdfViewer from "../components/PdfViewer.vue";

export default {
  components: {
    PdfViewer,
  },
  data() {
    return {
      selectedDoc: "",
      rightDoc: null,
      selectedType: "",
      docShow: null
    };
  },
  mounted() {
    this.getDetail(this.$route.params.claimid, this.$route.params.docid);
  },
  methods: {
    
    changeDoc(){
      let temp = this.rightDoc;
      
      this.docShow = temp.files.filter((val) =>{
        return val.file_name == this.selectedDoc
      })
      this.docShow = this.docShow[0]
      this.selectedType = this.docShow.file_type
      this.selectedDoc = ""
    },
    async getDetail(cliamid, index) {
      await axios
        .get(`/rights/${cliamid}`)
        .then((res) => {

          this.rightDoc = res.data[index].Document;
         
          console.log(this.rightDoc)
          this.rightDoc = this.rightDoc[0];
          console.log(this.rightDoc)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imagePath(file_path) {
      if (file_path) {
        console.log(file_path);
        return "https://right-history.herokuapp.com/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
  },
};
</script>
  
<style>
  .header1 {
    font-family: "Kanit", sans-serif;
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