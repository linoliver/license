<template>
  <ul class="talk">
    <li v-for='item in cityList'>
      <dl>
        <dt>
          <img :src="item.img" alt="">
        </dt>
        <dd>
          <h2>{{item.title}}</h2>
          <div class="label"><span class="label1">{{item.label1}}</span><span class="label2">{{item.label2}}</span>
          <span class="fr">{{item.view}}</span></div>
          <p class="desc">{{item.description}}</p>
          <p class="author"><span></span><span>{{item.ctime}}</span></p>	 
        </dd>                
      </dl>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data(){
   return{
     cityList:[]
   }
  },
  mounted(){
    axios.get('http://localhost:8080/src/data/city.json').then(res=>{
      this.cityList=res.data
    })
   
  }
}
</script>

<style>

</style>
