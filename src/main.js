import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
