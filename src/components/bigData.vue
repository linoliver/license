<template>
  <div class="bigdata">
    <div class="headerImg">
      <img src="../assets/logo.png" alt="">
      <img src="../assets/caidan.png" alt="" @click="lists">
    </div>
    <div class="img">
      <img src="../assets/da.png" alt="">
    </div>
    <div class="link">
      <router-link to='/bigData/talk'>分析评论</router-link>
      <router-link to='/bigData/list'>趋势榜单</router-link>
      <router-link to='/bigData/baogao'>研究报告</router-link>
    </div>
    <div class="mark" v-show="show">
      <div class="showImg">
        <img src="../assets/logo.png" alt="">
        <p>X</p>
      </div>
      <div  class="list">
        <ul class="menu-list active">
          <li> <router-link to='/product'>产品</router-link></li>
          <li>  <router-link to='/about'>关于我们</router-link></li>
          <li> <router-link to='/bigdata'><span  @click="hide">大数据</span></router-link></li>
          <li>  <router-link to='/news'>新闻</router-link></li>
          <li> <router-link to='/recruit'>招聘</router-link></li>
          <li>  <router-link to='/mall'>商城</router-link></li>
        </ul>
      </div>
    </div>
    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'bigdata',
  data(){
    return{
      show:false
    }
  },
  methods:{
    lists(){
      this.show=true
    },
    hide(){
      console.log(1)
       this.show=false
    }
  }
}
</script >

<style lang="scss">
.menu-list li a {
    display: block;
    border-bottom: solid 1px #80ccfc;
    line-height:90px;
    font-size: 30px;
    color: #fff;
    margin: 0;
}
</style>
