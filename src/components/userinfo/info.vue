<template>
  <div>
    <el-col>
      <el-col :span="4" class="menu-col">
        <div class="info-icon">
          <img src="../../assets/user-icon.jpg" alt="user-icon"
               style="width: 120px;height: 120px;border-radius:50%;margin-top: 5%;border:2px solid #eeeef0">
          <p style="color: darkgrey;font-size: 16px;">
            {{user.nickname}}
          </p>
        </div>
        <el-menu
          @select="handleSelect"
          class="info-menu"
          router=true>
          <el-menu-item index="/info/userrate" class="menu-item">
            <span slot="title">学习进度</span>
          </el-menu-item>
          <el-menu-item index="/info/userarticle" class="menu-item">
            <span slot="title">我的文章</span>
          </el-menu-item>
          <el-menu-item index="/info/usercomment" class="menu-item">
            <span slot="title">我的评论</span>
          </el-menu-item>
          <el-menu-item index="/info/userwrong" class="menu-item">
            <span slot="title">错题集</span>
          </el-menu-item>
          <el-menu-item index="/" class="menu-item">
            <span slot="title">注销</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div class="info-main">
      <el-col :span="20">
        <keep-alive>
          <router-view v-bind:user="user">Content</router-view>
        </keep-alive>
      </el-col>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {

    name: "info",
    data() {
      return {
        user: ''
      }
    },
    activated() {
      if (!this.$store.getters.isLogin) {
        this.$router.push('/login');
      }
    },
    created(){
      let token = this.$store.getters.getToken;
      if (token!==null){
        this.axios.get("/api/user/"+token).then(body => {
          this.user = body.data;
        });
      }

    },
    methods:{
      handleSelect(key, keyPath) {
        if (key==='/'){
          this.$store.commit("logout")
        }
      }
    }
  }
</script>

<style scoped>
  .info-menu {
    margin: 5%;
    box-shadow: 0 10px 10px rgba(.12, .12, .12, .12);
    text-align: center;
    height: 600px;
    background: #fbfbfb;
  }

  .info-icon {
    margin: 5%;
    box-shadow: 0 4px 4px rgba(.12, .12, .12, .12);
    text-align: center;
    height: 200px;
    background: #fbfbfb;
  }

  .menu-item {
    border-spacing: 10px;
  }
  .info-main{
    margin:50px
  }

</style>
