<template>
  <div>
    <div class="blog-card">
      <el-col :span="5">
        <div :style="{background: getColor(),height:'180px',textAlign: 'center'}">
          <label style="font-size:xx-large;line-height:180px;color: #fbfbfb;overflow: hidden">
            {{article.articletype}}
          </label>
        </div>
      </el-col>
      <el-col :span="18">
        <div style="margin-left: 10px">
          <router-link :to="{path:'/article/'+article.articleid}"  style="text-decoration: none;color: #262626;" replace>
            <h3
              style="text-align: left;width: 100%;font-size: x-large;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
              {{article.articletitle}}
              <div style="text-align: left;width: 100%;color: #646464;font-size: x-small">
                {{user.nickname}} 发表于 {{article.articledate.substring(0,10)}}
              </div>
            </h3>
          </router-link>
          <div style="text-align: left;width: 100%;height: 40px;overflow: hidden">
            {{article.articleintroduction}}
          </div>
          <div style="text-align: right;width: 100%;color: #646464;margin-top: 10px">
            {{article.articlereadnum}} 阅读,{{article.articlecommentnum}} 评论
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: ""
      }
    },
    mounted() {
      this.axios.get("/api/user/byId/" + this.article.articleauthor).then(body => {
        this.user = body.data;
      });
    },
    methods: {
      getColor() {
        if (this.article.articletype === "分享") {
          return  "#409EFF";
        } else {
          return "#42b983";
        }
      }
    },
    props: ['article'],
  }
</script>

<style scoped>
  .blog-card {
    text-align: center;
    width: 50%;
    height: 180px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 10px auto;
  }
</style>
