<template>
  <div>
    <div>
      <img src="../assets/welcome-back.jpg" style="margin-top: 3px;width: 100%">
    </div>
    <div class="welcome-introduce">
    <span class="welcome-span" style="color: aliceblue;font-size: 48px;">
         Welcome to JLS
      <p style="color: aliceblue;font-size: 12px;">
           Java Learn System
      </p>
       <p style="color: aliceblue;font-size: 20px;">
           Java学习辅助系统是面向初学者的Java学习平台
      </p>
       <p style="color: aliceblue;font-size: 20px;">
           简洁，易用，高效
      </p>
          <router-link :to="toStudyLink">
             <el-button round type="primary">立即开始学习</el-button>
          </router-link>
          <el-button round type="primary">了解更多</el-button>
    </span>
    </div>
    <div class="welcome-cards">
      <el-row gutter="10">
        <el-col span="8">
          <el-card class="box-card" shadow="always">
            <img src="../assets/dog-blog.png">
            <h3>
              开始学习
            </h3>
            <p style="color: darkgrey;font-size: 16px;">
              循序渐进，由浅入深，一步一个脚印的学好Java
            </p>
          </el-card>
        </el-col>

        <el-col span="8">
          <el-card class="box-card" shadow="always">
            <img src="../assets/dog-question.png">
            <h3>
              交流讨论
            </h3>
            <p style="color: darkgrey;font-size: 16px;">
              与小伙伴们共同学习，提问分享，各抒己见
            </p>
          </el-card>
        </el-col>

        <el-col span="8">
          <el-card class="box-card" shadow="always">
            <img src="../assets/dog-code.png">
            <h3>
              题库训练
            </h3>
            <p style="color: darkgrey;font-size: 16px;">
              检验学习成果，温故而知新
            </p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      toStudyLink:function () {
        return this.$store.getters.isLogin?"/learn":"/login"
      }
    }
  }
</script>

<style scoped>

  .welcome-introduce {
    z-index: 2;
    position: absolute;
    top: 15%;
    width: auto;
    height: 500px;
    margin-left: 12%;
    font-family: Hiragino Sans GB;
  }

  .welcome-cards {
    margin-top: 10px;
    margin-left: 15%;
    margin-right: 10%;
    text-align: center;
  }

  .box-card {
    width: 70%;
    height: 300px;
    border: #409EFF;
    background: #fbfbfb;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 8px 8px 8px 8px rgba(.12, .12, .12, .12);

  }


</style>
