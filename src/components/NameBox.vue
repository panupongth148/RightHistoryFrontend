
<template>
  <div class="m-3">
    <b-card v-bind:title="claimant.Firstname+' '+claimant.Lastname" v-bind:sub-title="claimant.Age.toString()">
    <b-card-text>
      อาชีพ : {{claimant.Job}}
    </b-card-text>
    <b-card-text> </b-card-text>
    
    <router-link :to="{name: 'detaillist', params: {id: claimant._id}}">ดูคำขอร้องสิทธิ์ที่เรียกร้องทั้งหมด</router-link> 
  </b-card>
  </div>
</template>

<script>
export default {
    props: ['claimant']
}
</script>

<style>

</style>
