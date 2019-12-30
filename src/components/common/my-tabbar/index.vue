<template>
 <div>
      <van-tabbar
      v-model="active"
      active-color="#07c160"
      inactive-color="#AAB0B8"
      route
    >
      <van-tabbar-item
          replace
          to="/home"
      >
        <span>认证</span>
        <img slot="icon"
            slot-scope="props" 
           :src="props.active?require('assets/img/home1.png'):require('assets/img/home0.png')"
         
          >
      </van-tabbar-item>
      <van-tabbar-item
          replace
          to="/share"
      >
        <span>分享</span>
        <img slot="icon"
          slot-scope="props" 
          :src="props.active?require('assets/img/share1.png'):require('assets/img/share0.png')"
        >
      </van-tabbar-item>
      <van-tabbar-item
          replace
          to="/service"
      >
        <span>服务</span>
        <img slot="icon"
          slot-scope="props" 
          :src="props.active?require('assets/img/service1.png'):require('assets/img/service0.png')"
        >
      </van-tabbar-item>
      <van-tabbar-item
          replace
          to="/my"
      >
        <span>我的</span>
        <img slot="icon"
          slot-scope="props" 
          :src="props.active?require('assets/img/my1.png'):require('assets/img/my0.png')"
        >
      </van-tabbar-item>
     
  </van-tabbar>
 </div>
</template>

<script>
 export default {
   name:'myTabbar',
   data () {
     return {
         active:0
     }
   },
   methods: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
