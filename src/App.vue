<template>
<div id=app>
 <router-view></router-view>
<footercom v-if="$route.meta.showfooter"></footercom>
</div>

</template>

<script>

import footercom from './components/footer/footercom.vue'
export default {
  name: 'App',
  components:{footercom}
}
</script>

<style lang="less">
 #app{
  
  width: 100%;
  height:100%;
  background-color: #f5f5f5;
}

</style>

