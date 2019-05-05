<template>
  <div>
    <div v-for="item in contents">
      <el-col :span="8">
        <el-card class="box-card" shadow="always">
          <router-link :to="{path:'chapter/'+item.chapterid}"  style="text-decoration: none;color: #262626;">
            <img :src="item.chapterimg" class="card-img">
            <h3>
              {{item.chaptername}}
            </h3>
          </router-link>
          <p style="color: darkgrey;font-size: 16px;">
            {{item.chapterintroduction}}
          </p>
        </el-card>
      </el-col>

    </div>
  </div>
</template>

<script>


  export default {
    name: "learnContent",
    data() {
      return {
        contents: []
      }
    },
    mounted() {
      this.axios.get("/api/chapter/list").then(body => {
        this.contents = body.data;
      });
    },
    watch : {
      '$route'(to,from) {
          let index = this.$route.path.lastIndexOf('\/');
          let para = this.$route.path.substring(index + 1, this.$route.path.length);
          console.log(para);
          let url = "/api/chapter/list";
          if (para !== "learn" && para !== "") {
            url += "/sort/" + para;
          }
          console.log(url);
          this.axios.get(url).then(body => {
            this.contents = body.data;
          });
        }

    },


  }
</script>

<style scoped>
  .box-card {
    margin: 10%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    text-align: center;
    width: auto;
    height: 450px;
  }

  .card-img {
    width: 100%;
    height: 80%;
  }



</style>
