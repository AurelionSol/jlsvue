<template>
  <div>
    <div>
      <img src="../../assets/code-back.png" style="margin-top: 3px;width: 100%">
    </div>
    <div style="  text-align: center;
    width: 60%;
    margin: auto;">
      <div>
        <el-button type="success" icon="el-icon-caret-right"@click="runCode" round style="margin: 10px;">运行</el-button>
        <el-input
          class="returnInput"
          style="margin-bottom: 10px"
          type="textarea"
          readonly="readonly"
          :autosize="{ minRows: 4, maxRows: 6}"
          :value="returnValue"
        >
        </el-input>
      </div>
      <div class="ace-container">
        <div class="ace-editor" ref="ace" v-model="value"></div>
        <div class="config-panel" v-show="toggle">
          <div>
            <div class="item">
              <label class="title">语言</label>
              <el-select class="value" v-model="modePath" @change="handleModelPathChange" size="mini" value-key="name">
                <el-option v-for="mode in modeArray"
                           :key="mode.name"
                           :label="mode.name"
                           :value="mode.path">
                </el-option>
              </el-select>
            </div>

            <div class="item">
              <label class="title">换行</label>
              <el-select class="value" v-model="wrap" @change="handleWrapChange" size="mini" value-key="name">
                <el-option v-for="wrap in wrapArray"
                           :key="wrap.name"
                           :label="wrap.name"
                           :value="wrap.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>

        <div class="bookmarklet" @click="toggleConfigPanel"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import ace from 'ace-builds'
  import 'ace-builds/src-noconflict/snippets/javascript'
  import 'ace-builds/src-noconflict/snippets/html'
  import 'ace-builds/src-noconflict/snippets/css'
  import 'ace-builds/src-noconflict/snippets/scss'
  import 'ace-builds/src-noconflict/snippets/json'
  import 'ace-builds/src-noconflict/snippets/java'
  import 'ace-builds/src-noconflict/snippets/text'
  import 'ace-builds/webpack-resolver'
  import 'ace-builds/src-noconflict/ext-language_tools'
  import 'ace-builds/src-noconflict/theme-monokai'
  import 'ace-builds/src-noconflict/mode-javascript'

  // const themeArray = [{
  //   name: 'monokai',
  //   path: 'ace/theme/monokai'
  // }]

  const wrapArray = [{
    name: '开启',
    value: true
  }, {
    name: '关闭',
    value: false
  }]

  const modeArray = [{
    name: 'Java',
    path: 'ace/mode/java'
  }, {
    name: 'HTML',
    path: 'ace/mode/html'
  }, {
    name: 'CSS',
    path: 'ace/mode/css'
  }, {
    name: 'SCSS',
    path: 'ace/mode/scss'
  }, {
    name: 'Json',
    path: 'ace/mode/json'
  }, {
    name: 'JavaScript',
    path: 'ace/mode/javascript'
  }, {
    name: 'Text',
    path: 'ace/mode/text'
  }]

  export default {
    props: {
      value: {
        type: String,
        default: 'public class Main {\n' +
          '    public static void main(String[] args) {\n' +
          '        System.out.println("Hello World!");\n' +
          '    }\n' +
          '}'
      },
      returnValue:{
        type: String,
        default: '输出结果'
      }
    },
    mounted() {
      this.aceEditor = ace.edit(this.$refs.ace, {
        maxLines: 200,
        minLines: 50,
        fontSize: 14,
        value: this.value,
        theme: this.themePath,
        mode: this.modePath,
        wrap: this.wrap,
        tabSize: 4
      })
      // 激活自动提示
      this.aceEditor.setOptions({
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableBasicAutocompletion: true
      })
      this.aceEditor.getSession().on('change', this.change)
    },
    data() {
      return {
        aceEditor: null,
        toggle: false,
        wrap: true,
        themePath: 'ace/theme/monokai',
        modePath: 'ace/mode/java',
        modeArray: modeArray,
        wrapArray: wrapArray
      }
    },
    methods: {
      toggleConfigPanel() {
        this.toggle = !this.toggle
      },
      change() {
        this.$emit('input', this.aceEditor.getSession().getValue())
      },
      handleModelPathChange(modelPath) {
        this.aceEditor.getSession().setMode(modelPath)
      },
      handleWrapChange(wrap) {
        this.aceEditor.getSession().setUseWrapMode(wrap)
      },
      runCode(){
        this.axios.post("/api/code/return",{code: this.aceEditor.getSession().getValue()}).then(body => {
          this.returnValue = body.data;
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  .ace-container {
    position: relative;
    .config-panel {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      overflow: scroll;
      box-shadow: grey -5px 2px 3px;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: 1;
      .item {
        margin: 10px auto;
        text-align: center;

        .title {
          color: white;
          margin: 0 10px;
          font-size: 14px;
        }
      }
    }

    .bookmarklet {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      z-index: 2;
      cursor: pointer;
      border-width: 9px;
      border-style: solid;
      border-color: lightblue gray gray rgb(206, 173, 230);
      border-image: initial;
    }
  }
</style>
