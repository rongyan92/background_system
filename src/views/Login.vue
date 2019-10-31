<template>
  <div id="login-container">
    <h1>管理员登录系统</h1>
    <div id="login-box">
      <div id="avatar-box">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form ref="loginFormRef" :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="iconfont el-icon-s-custom"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password>
            <i slot="prefix" class="iconfont el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-row>
          <el-col :push="8">
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button type="info" @click="$refs.loginFormRef.resetFields()"
              >重置</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      }
      //   loginFormRules: {
      //     username: { required: true, message: "请输入用户名", trigger: "blur" },
      //     password: { required: true, message: "请输入密码", trigger: "blur" }
      //   }
    };
  },
  methods: {
    login() {
      console.log(3435345);
      this.$router.push("/home");
      this.$message.success("登录成功");
      //   对表单做整体验证validate方法的参数valid是布尔值，true代表验证通过
      //   this.$refs.loginFormRef.validate(async valid => {
      //     if (valid === true) {
      //       // axios带着用户输入的数据发送请求，校验用户名密码，并返回结果
      //       //   const { data: dt } = await this.$http.post("/login", this.loginForm);
      //       //   // console.log(dt);
      //       //   // 如果错误弹出提示框
      //       //   if (dt.meta.status === 400) {
      //       //     return this.$message.error(dt.meta.msg);
      //       //   }
      //       //   //   设置token
      //       //   window.sessionStorage.setItem("token", dt.data.token);

      //       //   成功跳转到后台首页
      //       this.$router.push("/home");
      //       this.$message.success("登录成功");
      //     }
      //   });
    }
  }
};
</script>

<style lang="less">
#login-container {
  height: 100%;
  background-color: #2b4b6b;
  overflow: hidden;
  h1 {
    color: #fff;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  #login-box {
    width: 450px;
    height: 310px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    #avatar-box {
      width: 130px;
      height: 130px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 8px;
      box-shadow: 0 0 10px #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .el-form {
      position: absolute;
      bottom: 0;
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
