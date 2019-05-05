<template>
  <el-container direction="horizontal" class="footer-container">
    <el-main>
      <img src="../assets/dog2.png" height="157" width="110" class="footer-img" />
    </el-main>
    <el-main class="footer-main" style="color: darkgray">
     <div>
       For USTC engineering practice projects only
     </div>
      <div>
       Design by qpanda
      </div>
      <div>
        Contact us :qpanda@mail.ustc.edu.cn
      </div>
    </el-main>
  </el-container>
</template>
<script>

  export default {

  }
</script>

<style scoped>
  .footer-container{
    position: relative;
    background: whitesmoke;
  }
  .footer-img{
    position: relative;
    margin-left: 150px;
  }
  .footer-main{
    position: relative;
    margin-top: 30px;
    line-height: 40px;
    margin-left: 600px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: medium;

  }


</style>
