<template>
  <div class="login-back">
    <img src="../assets/login-back.png" style="width: 100%;-webkit-user-select: none;">
    <div class="login-card">
      <div>
        <el-form ref="loginForm" :model="form" :rules="rules" class="login-box">
          <h3 class="login-title" style="text-align: center">欢迎登录</h3>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-edit" type="text" placeholder="请输入账号" v-model="form.username"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-warning" type="password" placeholder="请输入密码" v-model="form.password"/>
          </el-form-item>
          <el-form-item>
            <el-col span="20">
              <el-checkbox v-model="form.checked">记住我</el-checkbox>
            </el-col>
            <el-col span="4">
              <router-link to="/register">
                <el-button type="text" class="register-btn">注册</el-button>
              </router-link>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('loginForm')" style="width: 100%;margin: auto">登录</el-button>
          </el-form-item>
        </el-form>
        <div style="width: 80%;margin: auto">
          <el-alert v-if="isAlertDisplay"
                    :closable="false"
                    title="用户名或密码不正确"
                    type="error"
                    show-icon>
          </el-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';

  export default {
    name: 'login',
    components: {},
    data() {
      return {
        form: {
          username: '',
          password: '',
          checked: false,
        },

        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
        isAlertDisplay: false
      }
    },
    activated() {
      this.$emit('public_header', false);
      this.$emit('public_footer', false);
    },
    deactivated() {
      this.$emit('public_header', true);
      this.$emit('public_footer', true);
    },
    methods: {
      onSubmit(formName) {
        let user = {
          username: this.form.username,
          password: md5(this.form.password)
        };
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/user/login", user).then(body => {
              let token = body.data;
              if (token === '') {
                this.isAlertDisplay = true;
                return false;
              } else {
                this.$store.commit('setToken',token);
                this.isAlertDisplay = false;
                this.$router.push('/');
                return true;
              }
            });
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .login-back {
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: 0 !important;
  }

  .login-card {
    position: absolute;
    background: #fbfbfb;
    width: 20%;
    height: 40%;
    top: 20%;
    left: 40%;
    padding: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 10px;
    z-index: 2;
    opacity: 0.95;
  }

  .login-box {
    width: 60%;
    margin: auto;
  }
</style>
