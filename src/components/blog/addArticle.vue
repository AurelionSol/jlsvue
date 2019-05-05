<template>
  <div class="edit">
    <div>
      <el-input
        v-model="title"
        style="margin-bottom: 10px"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 6}"
        placeholder="输入标题"
      >
      </el-input>
      <el-input
        v-model="introduction"
        style="margin-bottom: 10px"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        placeholder="输入简介"
      >
      </el-input>
    </div>
    <div style="margin-bottom: 10px">
      <el-radio v-model="type" label="分享">分享</el-radio>
      <el-radio v-model="type" label="提问">提问</el-radio>
    </div>
    <div>
      <mavon-editor v-model="content"
        style="z-index: 2"
        class="md"
      ></mavon-editor>
    </div>
    <div class="submit">
      <el-button type="primary" icon="el-icon-edit" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addArticle",
    data() {
      return {
        content: '',
        title: '',
        introduction: '',
        type: ''
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
    methods: {
      submit() {
        this.axios.post("/api/article/add", {
          title:this.title,
          introduction:this.introduction,
          content: this.content,
          type: this.type,
          token: this.$store.getters.getToken
        }).then(body => {
          location.reload();
          this.$router.push("/blog");
        });
      }

    }
  }
</script>

<style scoped>
  .edit {
    margin-top: 80px !important;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .md {
    height: 800px;
  }

  .submit {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px
  }
</style>
