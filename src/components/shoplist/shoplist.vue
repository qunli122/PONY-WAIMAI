<template>
     <ul>
       <li>
         <img src="./img/902397dda144ad348d8511cab00b9af230ad85f1.jpeg" alt="">
         <div>
           <div><i>品牌</i><span>店铺名</span> <span>保准赢</span></div>
           <div><img src="" alt=""><span>月销999</span><i>外卖专送</i></div>
           <div>20起送/配送费约5</div>
         </div>
       </li>
      
       <li></li>
     </ul>
</template>

<script>
export default {
name:"shoplist",

}
</script>

<style lang="less" scoped>
 ul {
    >li:last-child{
height:50px;
    }
    li{
      padding: 10px 0;
      display: flex;
      >img{
        width: 100px;
        height: 100px;
      } 
      >div{
        padding-left: 10px;
        i:first-child{
          background-color: rgb(241, 226, 16);
        }
        i:last-child{
         color:rgb(15, 238, 15);
          border:1px solid rgb(15, 238, 15);
        }

        >div:first-child span:nth-child(2){
color: #000;
font-size: 16px;
margin-left:10px ;
        }
        span,:last-child{
          color:rgb(161, 161, 161);
          font-size: 12px;
        }
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        :nth-child(3){
float: right;
        }
      
      }
      div{
         
        i{
          display: inline-block;
         font-size: 10px;
         border: 1px solid black;
         }
      }
    }
   
  }
</style>