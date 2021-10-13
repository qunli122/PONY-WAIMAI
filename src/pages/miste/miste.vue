<template>
 <section>
<mt-header fixed title="天河区11111">
    <a href="" slot="left"><i class="fa fa-search"></i></a>
    
    <a href="" slot="right" >登录/注册</a>
   </mt-header>
   <div class=tianchong>

   </div>
   <nav> 
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
       
    </div>
  
    <div class="swiper-pagination"></div>
</div>

   </nav>
   <div class="store-wapper">
     <div class="title"><a href=""><i class="fa fa-bars"></i>附近商家</a></div>
  <shoplist></shoplist>
   </div>  
 </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import shoplist from '../../components/shoplist/shoplist.vue'
export default {
name:'miste',
components:{
shoplist
},
mounted(){
new Swiper ('.swiper-container', {
    // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    
  })        
}

}
</script>

<style lang="less" scoped >
section{
  overflow: auto;
}

.tianchong{
  height: 45px;
}
nav{
height: 220spx;
background-color: aqua;
.swiper-container {
   
    height: 220px;
}  
}
header{
  
  text-align: center;
  position: fixed;
  color:white;
  width: 100%;
  height: 45px;
  background-color: rgb(15, 238, 15);
 display: flex;
 box-sizing: border-box;
 padding: 0 10px;
 justify-content: space-between;
 line-height: 45px;

  a{

color:white;
  }
}
.store-wapper{
  padding:0 10px;
  .title{
    height: 30px;
    color: #000;
    font-size:20px;
    line-height: 30px;

 border-top:1px solid rgb(221, 221, 221);
  }
 

}
</style>
