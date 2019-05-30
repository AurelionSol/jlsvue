<template>
  <div>
    <div>
      <img src="../../assets/blog-back.png" style="margin-top: 3px;width: 100%">
    </div>
    <div v-for="item in currentArticle">
      <router-view>Content</router-view>
      <blog-card :article="item">
      </blog-card>
    </div>
    <router-link to="/addArticle">
    <el-button v-if="this.$store.getters.isLogin" type="primary" icon="el-icon-edit" circle class="addArticle"></el-button>
    </router-link>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="articles.length"
      style="text-align: center">
    </el-pagination>

  </div>
</template>

<script>
  import BlogCard from "./blog-card";

  export default {
    data() {
      return {
        currentPage: 1,
        pageSize: 8,
        articles: [],
        currentArticle: []
      }
    },
    mounted() {
      this.axios.get("/api/article/list").then(body => {
        this.articles = body.data;
        this.changeCurrentArticle();
      });
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        console.log(`每页 ${val} 条`);
        this.changeCurrentArticle();

      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        this.changeCurrentArticle();
      },
      changeCurrentArticle() {
        this.currentArticle = this.articles.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    },
    components: {BlogCard}

  }
</script>

<style scoped>
  .addArticle {
    position: fixed;
    right: 60px;
    top: 800px;
    width: 64px;
    height: 64px
  }
</style>
