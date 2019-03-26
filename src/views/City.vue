<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter" ></city-list>
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
// @ is an alias to /src
import CityHeader from '@/components/city/Header';
import CitySearch from '@/components/city/Search';
import CityList from '@/components/city/List';
import CityAlphabet from '@/components/city/Alphabet';
import axios from "axios";

export default {
  name: 'city',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  mounted(){
    this.getCityInfo();
  },
  data (){
    return{
      cities:{},
      hotCities:[],
      letter:""
    }
  },
  methods:{
    getCityInfo() {
      axios.get('/api/city.json').
      then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res){
      res=res.data;
      if(res.ret && res.data){
        const data=res.data;
        this.cities=data.cities;
        this.hotCities =data.hotCities;
      }
    },
    handleLetterChange(letter){
      this.letter=letter;
    }
  }
};
</script>

<style scoped lang="stylus">

</style>

