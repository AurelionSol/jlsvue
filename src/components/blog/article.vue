<template>
  <div style="width: 50%;margin: auto">
    <div :style="{textAlign:'center',
    background: getColor(),
    position: 'relative',
    margin: '10px auto',
    height:'300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
    zIndex: '2'}">
      <h2
        style="color: aliceblue;font-size: 40px;position: relative;margin: auto;padding-top: 100px;letter-spacing: 5px">
        {{article.articletitle}}
      </h2>
      <p style="color: aliceblue;font-size: 12px;letter-spacing: 2px">
        {{user.nickname}} 发表于 {{article.articledate.substring(0,10)}}
      </p>

    </div>
    <hr>
    <div style="margin-bottom: 10px;">
      <mavon-editor
        style="z-index: 2"
        class="md"
        :value="article.articlecontent"
        :subfield="prop.subfield"
        :defaultOpen="prop.defaultOpen"
        :toolbarsFlag="prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
      ></mavon-editor>
    </div>
    <hr>
    <div style="background: #fbfbfb;width: 60%;margin: auto">
      <h5>
        共 {{this.comments.length}} 条评论
      </h5>
      <el-input
        v-model="input"
        style="margin-bottom: 10px"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        placeholder="留下你的评论"
      >
      </el-input>
      <el-row>
        <el-col span="19">
          <el-button type="primary" v-if="this.$store.getters.isLogin" @click="addComment">提交</el-button>
          <RouterLink to="/login">
            <el-button type="text" v-if="!this.$store.getters.isLogin">请先登录</el-button>
          </RouterLink>
        </el-col>
        <el-col span="5">
          <label style="color: darkgrey;font-size: 12px;">
            请限制在1000字以内
          </label>
        </el-col>
      </el-row>
      <div v-for="comment in comments">
        <comment :comment="comment">

        </comment>
      </div>
    </div>
  </div>
</template>

<script>
  import Comment from "./comment";

  export default {
    name: "article",
    components: {Comment},
    data() {
      return {
        article: "",
        user: "",
        comments: [],
        input: '',
        author: ""
      }
    },
    activated() {
      let index = this.$route.path.lastIndexOf('\/');
      let para = this.$route.path.substring(index + 1, this.$route.path.length);
      let url = "/api/article/" + para;

      this.axios.get(url).then(body => {
        this.article = body.data;
        let urlUser = "/api/user/byId/" + this.article.articleauthor;
        let urlComment = "/api/comment/list/sort/" + this.article.articleid;
        this.axios.get(urlUser).then(body => {
          this.user = body.data;
          if (this.article.articletype === "分享") {
            this.color = "#409EFF";
          }
        });
        this.axios.get(urlComment).then(body => {
          this.comments = body.data;
        })
      });


    },

    methods: {
      getColor() {
        if (this.article.articletype === "分享") {
          return "#409EFF";
        } else {
          return "#42b983";
        }
      },
      getCommentAuthor(id) {
        let url = "/api/user/" + id;
        this.axios.get(url).then(body => {
          return body.data;
        });
      },
      addComment() {
        this.axios.post("/api/comment/add", {
          content:this.input,
          articleid:this.article.articleid,
          token: this.$store.getters.getToken
        }).then(body => {
         location.reload();
        });
      }
    },
    computed: {
      prop() {
        let articledata = {
          subfield: false,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true,
        };
        return articledata
      }
    },
  }

</script>

<style scoped>

</style>
