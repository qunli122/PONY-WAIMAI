import vuerouter from 'vue-router'
import miste from '../pages/miste/miste'
import order from '../pages/order/order'
import profile from '../pages/profile/profile'
import  search  from  '../pages/search/search'
import login  from '../pages/login/login'
import loginPhone from '../pages/login/login-phone'
import loginpassword from '../pages/login/login-password'
export default new vuerouter({
    routes:[{
path:'/order',
component:order,
meta:{
    showfooter:true
}
    },
    {path:'/',
    component:miste,
    meta:{
        showfooter:true
    }},
    {
        path:'/search',
component:search,
meta:{
    showfooter:true
}
    },
    {path:'/profile',
    component:profile,
    meta:{
        showfooter:true
    }
},
    {path:'/login',
    component:login,
    redirect:'/login/login-phone',
    children:[{
        path:'login-phone',
        component:loginPhone
    },
    {
        path:'login-password',
        component:loginpassword
    },

]

}],
})