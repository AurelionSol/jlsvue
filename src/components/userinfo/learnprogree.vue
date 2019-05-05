<template>
  <div class="progress">
    <el-row>
      <el-col span="5">
        <p style="color: darkgrey;font-size: 16px;">
         {{type}}( {{count}}/{{length}}):
        </p>
      </el-col>
      <el-col span="16">
        <el-progress :text-inside="true" :stroke-width="30" :percentage="this.percentage"
                     :status="this.status"></el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "learnprogree",
    data() {
      return {
        count: 0,
        length: 0
      }
    },
    computed: {
      percentage: function () {
        return Math.ceil(this.length===0? 0:(this.count/this.length*100));
      },
      status: function () {
        if (this.percentage<50){
          return'exception';
        }
        if (this.percentage<80){
          return 'text';
        }
        if (this.percentage>=100){
          return 'success';
        }
      }
    },
    created() {
      this.axios.get("/api/chapter/list/count/"+this.type).then(body => {
        console.log(body.data);
        this.length = body.data;
      });

      this.axios.get("/api/user/progress/list", {
        params: {
          token: this.$store.getters.getToken,
          type: this.type,
        }
      }).then(body => {
        console.log(body.data);
        this.count = body.data;
      });
    },
    props: ['type']
  }
</script>

<style scoped>
  .progress {
    margin-left: 10%;
    margin-top: 10px;
  }
</style>
