<template>
  <div class="container">
    <template v-if="listRight != null">
      <DetailRight 
     v-for="(info, index) in listRight"
      :key="index"
      :right="info.Document"
      :cliamantId="claimantId"
      :index="index"
    /></template>
    
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import DetailRight from "../components/DetailRightShort.vue";

export default {
  components: {
    DetailRight
  },
  data() {
    return {
        listRight: null,
        claimantId: this.$route.params.id
    }
  },
  mounted() {
      this.getDetail(this.$route.params.id);
  },
  methods: {
    async getDetail (id){
      await axios
        .get(`/rights/${id}`, )
        .then((res) => {
          console.log(res.data)
          this.listRight = res.data;
          console.log(this.listRight)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>
</style>