<template>
    <el-col>
      <el-col :span="4" class="menu-col">
        <el-menu
          default-active="/learn/basic"
          class="learn-menu"
          router=true>
          <el-menu-item index="/learn/basic" class="menu-item">
            <span slot="title">Java基础</span>
          </el-menu-item>
          <el-menu-item index="/learn/junior" class="menu-item">
            <span slot="title">Java初级</span>
          </el-menu-item>
          <el-menu-item index="/learn/middle" class="menu-item">
            <span slot="title">Java中级</span>
          </el-menu-item>
          <el-menu-item index="/learn/senior" class="menu-item">
            <span slot="title">Java高级</span>
          </el-menu-item>
          <el-menu-item index="/learn/apply" class="menu-item">
            <span slot="title">Java应用</span>
          </el-menu-item>
          <el-menu-item index="/learn/fore" class="menu-item">
            <span slot="title">前端部分</span>
          </el-menu-item>
          <el-menu-item index="/learn/j2ee" class="menu-item">
            <span slot="title">J2EE</span>
          </el-menu-item>
          <el-menu-item index="/learn/frame" class="menu-item">
            <span slot="title">Java框架</span>
          </el-menu-item>
          <el-menu-item index="/learn/tool" class="menu-item">
            <span slot="title">工具及中间件</span>
          </el-menu-item>
          <el-menu-item index="/learn/database" class="menu-item">
            <span slot="title">数据库</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view>Content</router-view>
        </keep-alive>
      </el-col>
    </el-col>
</template>

<script>
  export default {}
</script>

<style scoped>


  .learn-menu {
    margin: 5%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    text-align: center;
  }

  .menu-item {
    border-spacing: 10px;
  }
</style>
