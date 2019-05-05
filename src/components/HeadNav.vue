<template>
  <el-header class="header">
    <el-row :gutter="20" style="width: 80%;margin: auto">
      <el-col span="6">
        <router-link to="/" class="head-logo">
          <img src="../assets/dog.png"/>
        </router-link>
      </el-col>
      <el-col span="10">
        <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/learn">开始学习</el-menu-item>
          <el-menu-item index="/blog">交流讨论</el-menu-item>
          <el-menu-item index="/practice">题库训练</el-menu-item>
          <el-menu-item index="/code">在线编程</el-menu-item>
        </el-menu>
      </el-col>
      <el-col span="6">

        <el-input v-model="input" placeholder="请输入内容" class="search-input" prefix-icon="el-icon-search"></el-input>

      </el-col>
      <el-col span="2">
        <div v-if="!this.$store.getters.isLogin" class="user-div">
        <router-link to="/login">
          <el-button type="text" class="login-btn">登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button type="text" class="register-btn">注册</el-button>
        </router-link>
        </div>
        <div v-if="this.$store.getters.isLogin" class="user-info">
          <router-link to="/info">
            <el-col span="8">
              <img src="../assets/user-icon.png" style="width: 40px;height: 40px;border-radius:50%" alt="user-icon">
            </el-col>
            <el-col span="16">
            <el-button type="text" class="login-btn">个人信息</el-button>
            </el-col>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>

  export default {
    data(){
      return {
        input:''
      }
    }
  }
</script>

<style scoped>
  .header {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background: white;
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  /*.head-logo {*/
  /*  margin-left: 150px;*/
  /*  margin-right: 150px;*/
  /*}*/

  .el-menu-demo {
    margin-top: -1px;
  }

  .search-input {
    margin-top: 10px;
    width: 60%;
  }

  /*.login-btn {*/
  /*  margin-top: 6px;*/
  /*  margin-left: 50px;*/
  /*}*/

  /*.register-btn {*/
  /*  margin-top: 6px;*/
  /*  margin-right: 100px;*/
  /*}*/
  .user-div{
    margin-top: 10px;
    position: absolute;
  }
  .user-info{
    margin-top: 10px;
    position: absolute;
  }

</style>
