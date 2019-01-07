<template>
  <div id="app">
  <header ref='headers' class="header">
    <router-link to='/product'>产品</router-link>
    <router-link to='/about'>关于我们</router-link>
    <router-link to='/bigdata'>大数据</router-link>
    <router-link to='/news'>新闻</router-link>
    <router-link to='/recruit'>招聘</router-link>
    <router-link to='/mall'>商城</router-link>
  </header>
  <section class="content">
    <router-view></router-view>
  </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     scrolltop:0
    }
  },
  mounted(){
    window.onscroll=function(){
      let top = document.documentElement.scrollTop
      this.scrolltop=top
      this.gets(top)
     // 
    }.bind(this)
  },
 methods:{
  gets(top){
   this.$refs.headers.className=top>100?'header fixed':'header'
   console.log(this.$refs.headers.style.height)
  }
 }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
   text-decoration: none;
}

#app{
  width: 100%;
  height: 100%;
  .header{
    width: 100%;
    display: flex;
    a{
      flex:1;
      font-size: 20px;
    }
  }
  .content{
    height: 1500px;
  }
}
@media screen and (min-width: 1000px){
  .header{
    height: 100px;
    line-height: 100px;
    background: #567DFF;
    border-bottom: 1px solid #fff;
  }
 .headerImg {
   display: flex;
   justify-content: space-between;
   img {
    position: relative;
    margin: 0;
    width:30px;
    left: -50%;
    height: 30px;
    display: none;
}

 }
 .img {
  width: 100%;
  >img{
    width: 1920px;
    height: 100%;
    display: block;
}
}
 .link{
    margin: 0 auto;
    width: 1000px;
    height: 70px;
    line-height: 70px;
  border-bottom: 1px solid #eee;
  a{
    width: 200px;
    display: inline-block;
    text-align: center;
  }
 
 }
 .talk{
    width: 100%;
    li{
      dl{
        display: flex;
         dt{
        width: 234px;
        height: 153px;
        border-radius: 15px;
        overflow: hidden;
        border:1px solid #eee;
        margin-right: 15px;
       img{
        width: 100%;
        height: 100%;
       }
     }
      }
    }
  }
}
@media screen and (max-width: 1000px){
 #app .header  {
   display: none;
}
.img>img {
    width: 200%;
    margin-left: -50%;
    height: auto;
    display: block;
}
.headerImg{
   display: flex;
   height: 44px;
   justify-content: space-between;
  img {
   width: 50px;
   height: 44px;
     display: block;
}
}
 .link {
    display: flex;
    align-items: center;
    line-height:70px;
    justify-content: space-around;
    background: #fff;
    border-bottom: 1px solid #eee;
}
.talk{
  width: 100%;
  li{
    width: 100%;
    dl{
      display: flex;
      padding: 10px;
      box-sizing: border-box;
     dt{
        width: 234px;
        height: 153px;
        border-radius: 15px;
        overflow: hidden;
        border:1px solid #eee;
        margin-right: 15px;
       img{
        width: 100%;
        height: 100%;
       }
     }
     dd{
       border-bottom: 1px solid #eee;
       flex: 1;
       h2{
         margin-bottom: 10px;
       }
       .label{
          margin-bottom: 10px;
          display: flex;
          .fr{
            flex:1;
            text-align: right;
          }
       }
       .label1{
          color: #f90;
          border: 1px solid #f90;
          padding: 2px;
          margin-right: 0;
       }
      .label2{
        color: #f66;
        border: 1px solid #f66;
        padding: 2px;
        margin-left: 5px;
      }
      p{
         margin-bottom: 10px;
      }
     }
    }
  }
}
.mark{
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: #567DFF;
  z-index: 100;
    animation: dong 1s linear;
  .showImg{
   height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 44px;
      height: 44px;
    }
  }
}
}
.fixed{
  position: fixed;
  left: 0;
  background: #fff;
  color:#567DFF;

 
}
@keyframes dong {
  0%{top:-100%}
  100%{top:0}

}
</style>
