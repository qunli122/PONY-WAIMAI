<template>
  <div class="footer-com">
<router-link to="/" class="guide-item" active-class="on">
  <span class="item-icon" >
  <i class="fa fa-paper-plane-o"></i>
  </span>
  <span>外卖</span>
</router-link>
<router-link to="/search" class="guide-item " active-class="on">
  <span class="item-icon" >
  <i class="fa fa-mixcloud"></i>
  </span>
  <span>搜索</span>
</router-link>
<router-link to="/order" class="guide-item " active-class="on">
  <span class="item-icon" >
  <i class="fa fa-sticky-note-o"></i>
  </span>
  <span>订单</span>
</router-link>
<router-link to="/profile" class="guide-item " active-class="on">
  <span class="item-icon" >
  <i class="fa fa-user-o"></i>
  </span>
  <span>我的</span>
</router-link>
  </div>
</template>

<script>
export default {
name:'footercom'
}
</script>

<style lang="less" >
.footer-com{
  z-index: 9999;
  background-color:white ;
position: fixed;
  width: 100%;
  bottom: 0;
 border-top: 1px solid rgb(221, 221, 221) ;
  height: 50px;
 align-content: center;
 padding: 5px;
  box-sizing: border-box;
  display: flex;
  
justify-content: space-around;
  .guide-item{
   
    text-align: center;
    display: block;
    :nth-child(2){
      font-size: 14px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,FangSong;
    }
    span{
      display: block;
      i{
       
        font-size: 25px;
        font-weight: 100;
      }
    }
    a{
      color: rgb(49, 48, 48);
    }
    .item-icon{
      margin-bottom: 3px;
    }
  }
}
.on{
 
  color: rgb(15, 238, 15) !important;
}
</style>