<template>
  <div class="routercom">
<div class="inputwapper"><input type="text" placeholder="手机号"><button>获取验证码 </button></div>
<input class="yanzhengma" type="text" placeholder="验证码">
<span>温馨提示：未注册外卖账号的手机号，登陆时自动注册，切代表已同意<a>《用户服务协议》</a></span>
<button>登录</button>
<span>关于我们</span>
</div>
</template>

<script>
export default {
name:"loginPhone"
}
</script>

<style lang="less" scoped>
.routercom{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        height: 40%;
            span{
                font-size: 12px;
            }
        }
      
            .inputwapper{
            width: 80%;
            font-size: 14px;
            background-color:white ;
           border: 1px solid rgba(158, 156, 156,0.5);
           border-radius: 8px;
            input{
                outline: inherit;
               width: 70%;
                height: 45px;
                border: none;
            }
            button{
                width: 30%;
                border: none;
                background-color:transparent;
            }
        }
        .yanzhengma{
            height:45px ;
            width: 80%;
            font-size: 14px;
            background-color:white ;
           border: 1px solid rgba(158, 156, 156,0.5);
           border-radius: 8px;
           outline: inherit
           ;
        }
        .routercom{
        
       >button{
width: 80%;
background-color: rgb(42, 252, 0);
border:rgba(158, 156, 156,0.5) ;
height: 40px;
border-radius: 8px;
        }
       
       
        }
</style>