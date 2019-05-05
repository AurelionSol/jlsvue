<template>
    <div>
      <div v-for="item in userArticle">
        <router-view>Content</router-view>
        <blog-card :article="item">
        </blog-card>
      </div>
    </div>
</template>

<script>
  import BlogCard from "../blog/blog-card";

    export default {
        name: "userarticle",
      data(){
          return{
            userArticle:[]
          }
      },
      components: {BlogCard},
      created() {
        this.axios.get("/api/article/list/sort/author/" + this.$store.getters.getToken).then(body => {
          this.userArticle = body.data;
        });
      }
    }
</script>

<style scoped>

</style>
