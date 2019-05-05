<template>
  <div class="practice_card">
    <div style="text-align: center;">
      {{index+1}}/{{questions.length}} ，类型：{{question.questiontype}}，难度：{{question.questionstar}}星
    </div>
    <hr>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="content">
          <h2>单选题</h2>
          <div>
            {{question.questioncontent}}
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="choice">
          <el-radio v-model="radio" label="A" border>A.{{question.questiona}}</el-radio>
          <el-radio v-model="radio" label="B" border>B.{{question.questionb}}</el-radio>
          <el-radio v-model="radio" label="C" border>C.{{question.questionc}}</el-radio>
          <el-radio v-model="radio" label="D" border>D.{{question.questiond}}</el-radio>
        </div>
      </el-col>
    </el-row>
    <hr>
    <el-row :gutter="20">
      <el-col :span="12">
        <div v-if="isAnalysisDisplay" class="analysis">
          <div style="height: 50px;margin-bottom: 10px">
            <el-col :span="4">
              <img v-bind:src="this.url">
            </el-col>
            <el-col :span="20">
              {{answer}}
            </el-col>
          </div>
          <div>
            解析：{{question.questionanalysis}}
          </div>
          <div class="addWrongDiv" v-if="isAddWrongDisplay">
            <el-button v-if="!isAddWrong" type="danger" icon="el-icon-edit" @click="AddWrong" round>加入错题集</el-button>
            <el-button v-if="isAddWrong" :disabled="true" type="success" icon="el-icon-check" round>已加入错题集</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="buttons">
          <div>
            <el-button :disabled="isRadio" class="submitbutton" @click="submit" type="primary" round>提交
            </el-button>
          </div>
          <div class="change">
            <el-button :disabled="isLastDisabled" class="lastbutton" @click="last" type="success" round>上一题
            </el-button>
            <el-button :disabled="isNextDisabled" class="nextbutton" @click="next" type="success" round>下一题
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import yes from '../../assets/yes.png'
  import no from '../../assets/no.png'

  export default {

    name: "practice_card",
    data() {
      return {
        radio: '',
        url: '',
        index: 0,
        isAnalysisDisplay: false,
        isAddWrong: false
      }
    },
    props: ['questions'],
    computed: {
      isLastDisabled: function () {
        return this.index <= 0;
      },
      isNextDisabled: function () {
        return this.index + 1 >= this.length;
      },
      answer: function () {
        if (this.radio === this.question.questionanswer) {
          this.url = yes;
          return '您选择的是' + this.radio + ',回答正确';
        } else {
          this.url = no;
          return '您选择的是' + this.radio + ',回答错误，正确答案是：' + this.question.questionanswer;
        }
      },
      isRadio: function () {
        if (this.isAnalysisDisplay) {
          return true;
        } else {
          return !this.radio;
        }
      },
      question: function () {
        return this.questions[this.index];
      },
      isAddWrongDisplay: function () {
        return !(this.radio === this.question.questionanswer)
      }


    },
    methods: {
      submit: function () {
        this.axios.get("/api/question/query/wrong", {
          params: {
            token: this.$store.getters.getToken,
            questionId: this.question.questionid
          }
        }).then(body => {
          console.log(body.data);
          this.isAddWrong = body.data;
        });
        this.isAnalysisDisplay = true;

      },
      next: function () {
        this.index++;
        this.isAnalysisDisplay = false;
        this.radio = '';
      },
      last: function () {
        this.index--;
        this.isAnalysisDisplay = false;
        this.radio = '';
      },
      AddWrong() {
        this.axios.post("/api/question/add/wrong", {
          token: this.$store.getters.getToken,
          questionid: this.question.questionid
        }).then(body => {
          this.isAddWrong = true;
        });
      },
    }
  }
</script>

<style scoped>
  .practice_card {
    white-space: pre-line;
    height: 850px;
    width: 60%;
    padding: 10px;
    margin: 10px auto;
    background: #fbfbfb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 500px;
    margin-left: 20%;

  }

  .choice {
    height: 500px;

  }

  .el-radio {
    font-size: 20px;
    width: 80% !important;
    height: 100px !important;
    margin-left: 10px;
    margin-top: 20px;
    text-align: center;
    white-space: pre;
    box-shadow: 0 4px 8px 0 rgba(28, 31, 33, .1);
  }

  .analysis {
    height: 300px;
    margin-left: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .buttons {
    height: 200px;
  }

  .submitbutton {
    position: absolute;
    top: 20%;
    right: 15%;
  }

  .change {
    position: absolute;
    bottom: 25%;
    right: 10%;
  }

  .addWrongDiv {
    margin-top: 20px;
    margin-bottom: 20px
  }
</style>
