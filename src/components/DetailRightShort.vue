<template>
  
    <div class="m-3">
    <b-card
      
      header-tag="header"
      footer-tag="footer"
      class="detail-header"
      v-bind:title="right[0].title"
    >

    <router-link :to="{ name: 'detailright', params: { claimid: cliamantId, docid: index} }"><b-button  variant="primary">ดูเอกสารการเรียกร้องสิทธิ</b-button></router-link>
    <!-- <b-button type="button" @click="deleteById()" variant="warning" class="ml-3">Delete</b-button> -->
    <!-- <router-link :to="{ path: '/detailright/'+ cliamantId, params: {  }}"><b-button  variant="primary">Detail Right</b-button></router-link> -->
    </b-card>


  </div>
</template>

<script>
  import axios from "@/plugins/axios";
export default {
  
     props: ['right', 'cliamantId', 'index'],
    data() {
    return {
    }
  },
  methods:{
    async deleteById(){
      console.log("delete")
      await axios.delete("/rights/"+this.right[0]._id).then((val) =>{
        alert("delete success")
      }).catch((err) =>{
        console.log(err)
      });
    }
  }
}
</script>

<style>

</style>