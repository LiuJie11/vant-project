<template>
    <van-nav-bar :border='false'>
       <div slot='title'>
          <van-search
            v-model="searchValue"
            placeholder="大家都在搜【王者荣耀】"
            show-action
            shape="round"
            @search="onSearch"
            >
            <div slot="action" @click="shareAdd" class='share-add-box'>
                <img src="~assets/img/share-navbar-add.png" />
            </div>
        </van-search>
       </div>
    </van-nav-bar>
</template>

<script>
 export default {
   name:'shareNavBar',
   data () {
     return {
        searchValue:''
     }
   },
   methods: {
       onSearch(){
           console.log('搜索事件')
       },
       shareAdd(){
           console.log('添加事件')
       }
   }
 }
</script>

<style lang='less'>
 .van-nav-bar__title{
     max-width: 100%;
 }
 .van-nav-bar .van-icon{
     color: #C5C5C8;
 }
 .share-add-box{
     display: flex;
     align-items: center;
     padding-left: 10px;
     &>img{
        width: 24px;
        height: 24px;
     }
 }

</style>
