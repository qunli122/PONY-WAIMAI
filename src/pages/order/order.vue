<template>
  <section>
    <mt-header fixed title="订单">
    
   </mt-header>
   <div>
     <div class=code><img src="./images/order/person.png" alt="">
     <span>登陆后查看订单</span>
     <button>立即登录</button>
     </div>
     
   </div>
  </section>
</template>

<script>
export default {
name:'order'
}
</script>

<style lang="less" scoped>
header{
  
  text-align: center;
 
  color:white;
  width: 100%;
  height: 45px;
  background-color: rgb(15, 238, 15);
  display: flex;
  justify-content: space-around;
 line-height: 45px;
 :nth-child(2){
   overflow: hidden;
   width: 50%;
 }
  a{

color:white;
  }
}
section{
  height: 100%;
  background-color: rgb(245,245,245);
}
.code{
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
span{
  color: #000;
  font-size: 20px;
}
button{
  margin-top: 20px;
   height: 30px;
       width: 30%;
       background-color: rgb(15, 238, 15);
       border: none;
       border-radius: 5px;
       color: white;
}
}

</style>