<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
  import DetailBanner from "@/components/detail/Banner";
  import DetailHeader from "@/components/detail/Header";
  import DetailList from "@/components/detail/List";
  import axios from 'axios';

  export default {
    name: 'Detail',
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data(){
      return{
        sightName:"",
        bannerImg:"",
        gallaryImgs:[],
        list: []
      }
    },
    mounted (){
      this.getDetailInfo();
    },
    methods:{
      getDetailInfo (){
        axios.get("/api/detail.json",{
          params:{id:this.$route.params.id}
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        if(res){
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
 .content{
   height: 40rem;
 }
</style>

