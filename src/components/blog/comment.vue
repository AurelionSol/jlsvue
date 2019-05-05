<template>
  <div class="comment-card">
    <div style="margin: 10px 10px">
      <p>
       {{author.nickname}}
      </p>
      <p style="color: #686868;font-size: 16px;height: 80px;overflow: hidden;line-height: 20px;text-overflow:ellipsis">
        {{comment.commentcontent}}
      </p>
      <p style="color: darkgrey;font-size: 12px;text-align: right">
        {{comment.commentdate.substring(0,10)}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",

    data() {
      return {
        author:""
      }
    },

    mounted() {
        let url = "/api/user/byId/"+this.comment.commentauthorid;
        this.axios.get(url).then(body => {
          this.author= body.data;
        });
    },

    props: ['comment']
  }
</script>

<style scoped>
  .comment-card {
    margin: 20px auto;
    height: 150px;
    border: #409EFF;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>
