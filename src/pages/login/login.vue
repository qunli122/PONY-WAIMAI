<template>
<section>
<div class="backbutton" @click="backprofile"><i class="fa fa-angle-left"></i></div>
<section>
<div class="logo"> Pony外卖</div>
<div class="banner"><router-link to="/login/login-phone" active-class="active">短信登录</router-link><router-link to="/login/login-password" active-class="active">密码登录</router-link></div>
<router-view></router-view>
</section>

</section>
</template>

<script>

export default {
name:'logon',
methods:{
    backprofile(){
        this.$router.push({path:"/profile"})
    }
},

}
</script>

<style lang="less" scoped>
section{
    >section{
         display: flex;
            flex-direction: column;
            align-items: center;
            
    }
    padding: 0 10px;
    height: 100%;
    .backbutton{
        width: 45px;
        height: 45px;
        height: 45px;
        line-height: 45px;
        font-size: 30px;
        color: rgb(145, 143, 143);
    }
    
       
        
        .logo{
            color: rgb(42, 252, 0);
font-size: 50px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', ;
        }
        .banner{
            a{
                display: inline-block;
                color: #000;
                font-size: 16px;
                height: 40px;
                line-height: 40px;
                margin: 0 20px;
            }
            .active{
                border-bottom: solid 2px rgb(42, 252, 0);
                color:rgb(42, 252, 0);
            }
        }

    }

</style>>