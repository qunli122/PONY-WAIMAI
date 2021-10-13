<template>
  <section>
    <mt-header fixed title="搜索列表">
  
   </mt-header>
   <form action="">
       <input type="text"> <button>提交</button>
   </form>
  </section>
</template>

<script >
export default {
name:'search'
}
</script>

<style lang="less" socped >


header{
  
  text-align: center;
 
  color:white;
  width: 100%;
  height: 45px;
  background-color: rgb(15, 238, 15);
  display: flex;
  justify-content: space-around;
 line-height: 45px;
 :nth-child(3){
  font-size: 14px;
 }
  a{

color:white;
  }
}
form {
    height: 100%;
    padding: 10px;
    display: flex;
    button{
        margin-left:10px ;
        height: 30px;
       width: 30%;
       background-color: rgb(15, 238, 15);
       border: none;
       border-radius: 5px;
       color: white;
    }
    input{
        width: 69%;
        height: 30px;
        background-color: rgb(197, 197, 197);
    }
}
</style>