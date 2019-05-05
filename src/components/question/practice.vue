<template>
  <div>
    <div>
      <img src="../../assets/practice_back.jpg" style="margin-top: 3px;width: 100%;display: block">
    </div>
    <practiceCard :questions="questions">

    </practiceCard>
    <el-dialog title="组卷练习" :visible.sync="dialogFormVisible" :close-on-click-modal="false"
               :close-on-press-escape="false" :show-close="false">
      <el-form>
        <el-form-item label="训练项目" :label-width="formLabelWidth">
          <el-select v-model="type" placeholder="请选择训练项目">
            <el-option label="全部" value="全部"></el-option>
            <el-option label="Java基础" value="Java基础"></el-option>
            <el-option label="Java初级" value="Java初级"></el-option>
            <el-option label="Java中级" value="Java中级"></el-option>
            <el-option label="Java高级" value="Java高级"></el-option>
            <el-option label="Java应用" value="Java应用"></el-option>
            <el-option label="前端部分" value="前端部分"></el-option>
            <el-option label="J2EE" value="J2EE"></el-option>
            <el-option label="Java框架" value="Java框架"></el-option>
            <el-option label="工具及中间件" value="工具及中间件"></el-option>
            <el-option label="数据库" value="数据库"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题目难度" :label-width="formLabelWidth">
          <el-select v-model="star" placeholder="请选择题目难度">
            <el-option label="全部" value="0"></el-option>
            <el-option label="简单" value="1"></el-option>
            <el-option label="较易" value="2"></el-option>
            <el-option label="普通" value="3"></el-option>
            <el-option label="较难" value="4"></el-option>
            <el-option label="困难" value="5"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :disabled="isExam" type="primary" @click="exam">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

  import practiceCard from './practice_card'

  export default {
    name: "practice",
    data() {
      return {
        questions: [],
        formLabelWidth: '100px',
        dialogFormVisible: true,
        index: 0,
        type: '',
        star: '',

      };
    },
    components: {practiceCard},

    activated() {
      if (!this.$store.getters.isLogin) {
        this.$router.push('/login')
      }
      if (!this.questions.length)
        this.dialogFormVisible = true;
    },
    deactivated() {
      this.dialogFormVisible = false;
    },
    computed: {
      isExam: function () {
        return !(this.type && this.star);
      },
    },
    methods: {
      exam: function () {
        this.dialogFormVisible = false;
        this.axios.get("/api/question/list/sort", {
          params: {
            type: this.type,
            star: this.star,
          }
        }).then(body => {
          this.questions = body.data;
        });
      },
    }
  }
</script>

<style>


</style>
