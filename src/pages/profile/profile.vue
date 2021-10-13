<template>
 <section>
   <mt-header fixed title="我的">
   
   </mt-header>
 <nav>
   <div class="denglu" @click="tologin">
     <div>
       <img src="" alt="">
     </div>
     <div>
      <span>登录/注册</span>
      <a href=""><i class="fa fa-id-badge"></i>暂无绑定手机号</a>
     </div>
   </div>
   <ul class="mid-banner">
<li><span><i>00.0</i>元</span><span>我的余额</span></li>
<li><span><i>0</i>个</span><span>我的优惠</span></li>
<li><span><i>0</i>分</span><span>我的积分</span></li>
   </ul>
   <footer>
     <li><i class="fa fa-sticky-note-o"></i>我的订单 <i class=" fa fa-angle-right"></i></li>
    <li><i class="fa fa-pie-chart"></i>积分商城<i class=" fa fa-angle-right"></i></li>
    <li><i class="fa fa-book"></i>Mint外卖会员卡<i class=" fa fa-angle-right"></i></li>  
      <li><i class="fa fa-comments-o"></i>帮助中心<i class=" fa fa-angle-right"></i></li>

    
   </footer>
   
 </nav>
 </section>
</template>

<script>
export default {
name:'profile',
methods:{
  tologin(){
this.$router.push({path:"/login"})
  }
}
}
</script>

<style lang="less" scoped>
section
{
 height: 100%;
  background-color: rgb(245,245,245);
}
header{
  
  text-align: center;
 
  color:white;
  width: 100%;
  height: 45px;
  background-color: rgb(15, 238, 15);
  display: flex;
  justify-content: space-between;
 line-height: 45px;
 :nth-child(2){
   overflow: hidden;
   width: 50%;
 }
  a{

color:white;
  }
}
.denglu{
  border-top: 1px solid rgb(158, 156, 156);
  height: 50px;
  background-color: rgb(15, 238, 15);
}
.mid-banner{
  display: flex;

  li{
    background: white;
    border: 1px solid rgba(158, 156, 156,0.1);
     &:first-child i{
      color: rgb(253, 0, 0);
    }
    &:nth-child(2) i{
      color: rgb(9, 255, 0);
    }
    &:nth-child(3) i{
      color: rgb(0, 26, 255);
    }
    span {
      font-size: 14px;
      i{
      font-style: normal;
      font-size: 30px;
    }}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: (1/3)*100%;
    height: 100px;
  }
}
footer{
  li{display: flex;
    padding: 0 10px ;
    align-items: center;
    height: 50px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(158, 156, 156,0.1);
    font-size: 18px;
     i:last-child {
       flex: 1;
       text-align: right;
      font-size: 14px;
    }
    &:first-child :first-child{
      color: rgb(8, 253, 0);
    }
    &:nth-child(2) :first-child{
      color: rgb(255, 0, 0);
    }
    &:nth-child(3) :first-child{
      color: rgb(255, 196, 0);
    }
    &:nth-child(4) :first-child{
      color: rgb(81, 255, 0);
    }
    i{
      font-size: 30px;
      margin-right: 10px;
    }
  }
}
</style>