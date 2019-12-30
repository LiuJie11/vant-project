<template>
 <div id='app'>
    <router-view />
    <my-tabbar/>
 </div>
</template>

<script>
  import myTabbar from 'components/common/my-tabbar'
 export default {
   components:{
     myTabbar
   },
   data () {
     return {
       
     }
   },
   
 }
</script>

<style>
@import './assets/less/index.less'
 
</style>

