<template>
  <div class="register-back">
    <img src="../assets/login-back.png" style="width: 100%;-webkit-user-select: none;">
    <div class="register-card">
      <div>
        <el-form ref="registerForm" :model="form" :rules="rules" class="register-box">
          <h3 class="register-title" style="text-align: center">欢迎注册</h3>
          <el-form-item prop="nickname">
            <el-input prefix-icon="el-icon-view" type="text" placeholder="请输入昵称" v-model="form.nickname"/>
          </el-form-item>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-edit" type="text" placeholder="请输入账号" v-model="form.username"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-warning" type="password" placeholder="请输入密码" v-model="form.password"/>
          </el-form-item>
          <el-form-item>
            <router-link to="/login">
              <el-button type="text" class="register-btn">已有账号？点击登录</el-button>
            </router-link>

          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('registerForm')" style="width: 100%;margin: auto">注册</el-button>
          </el-form-item>
        </el-form>
        <div style="width: 80%;margin: auto">
          <el-alert v-if="isAlertDisplay"
                    :closable="false"
                    title="该用户名已被注册"
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
    name: 'register',
    components: {},
    data() {
      return {
        form: {
          nickname:'',
          username: '',
          password: '',
        },
        rules: {
          nickname: [
            {required: true, message: '昵称不可为空', trigger: 'blur'}
          ],
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
        let user={
          nickname:this.form.nickname,
          username:this.form.username,
          password:md5(this.form.password)
        };
        console.log(user);
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            this.axios.post("/api/user/add",user).then(body => {
              if (body.status===200){
                this.$router.push("/user/login");
              }
            });
            this.isAlertDisplay=true;
            return false;
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .register-back {
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: 0 !important;
  }

  .register-card {
    position: absolute;
    background: #fbfbfb;
    width: 20%;
    height: 50%;
    top: 20%;
    left: 40%;
    padding: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 10px;
    z-index: 2;
    opacity: 0.95;
  }

  .register-box {
    width: 60%;
    margin: auto;
  }
</style>
