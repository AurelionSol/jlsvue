<template>
  <div id="app">
    <el-container direction="vertical">
      <HeadNav v-if="header_show">Header</HeadNav>
      <keep-alive>
        <router-view v-on:public_header="public_header"
                     v-on:public_footer="public_footer" style="margin-top: 55px"
        >Main</router-view>
      </keep-alive>
      <myfooter v-if="footer_show">footer</myfooter>
    </el-container>
  </div>
</template>

<script>
  import HeadNav from './components/HeadNav'
  import myfooter from './components/footer'



  export default {
    name: 'App',
    data(){
      return {
        header_show:true,
        footer_show:true,
      }
    },
    components: {
      HeadNav,
      myfooter
    },
    methods:{
      //是否显示头部
      public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      public_footer:function (bool) {
        this.footer_show = bool;
      },

    }



  }
</script>

<style>
  #app {
    padding: 0;

    margin: 0;

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    height: 100%;

    border: hidden;
  }
</style>
