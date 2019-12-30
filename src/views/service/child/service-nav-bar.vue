<template>
  <van-nav-bar :border='false'>
        <div slot='left' class='nav-left'>服务</div>
        <div slot='right' class='nav-right'>
          <div class='news_box'>
              <img src="~assets/img/service-navbar.png">
              <div class="round">5</div>
          </div>
        </div>
    </van-nav-bar>
</template>

<script>
 export default {
   name:'service-nav-bar',  
   data () {
     return {

     }
   },
   methods: {

   }
 }
</script>

<style lang='less' scoped>
  .nav-right>div.news_box{
    padding-left: 20px;
    position: relative;
    img{
        width: 19px;
        height:19px;
    }
    .round{
        position: absolute;
        right: -8px;
        top: 8px;
        width: 14px;
        height: 14px;
        background: #FF1F41;
        text-align: center;
        line-height: 14px;
        color: #fff;
        font-size: 10px;
        border-radius: 50%;
    }
}
 
</style>
