<template>
  <el-container>
    <el-header>
      <div class="logo-box">
        <img src="../assets/logo.png" alt="" />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout()">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边导航栏 -->
      <el-aside :width="menushow ? '65px' : '200px'">
        <div class="toggle_bar" @click="menushow = !menushow">
          |||
        </div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="icofont icon-tongji"
                ><img src="../assets/icons/tongji.png" alt=""
              /></i>
              <span>统计管理</span>
            </template>
            <el-menu-item index="1-1">新增设备</el-menu-item>
            <el-menu-item index="1-2">活跃设备</el-menu-item>
            <el-menu-item index="1-2">留存设备</el-menu-item>
            <el-menu-item index="1-2">商品使用排行</el-menu-item>
            <el-menu-item index="1-2">交易排行</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="icofont icon-biaoqian"
                ><img src="../assets/icons/biaoqian.png" alt=""
              /></i>
              <span>标签管理</span>
            </template>
            <el-menu-item index="2-1">标签列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="icofont icon-channel"
                ><img src="../assets/icons/channel.png" alt=""
              /></i>
              <span>渠道管理</span>
            </template>
            <el-menu-item index="3-1">渠道列表</el-menu-item>
            <el-menu-item index="3-2">新增渠道</el-menu-item>
            <el-menu-item index="3-2">编辑渠道</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="icofont icon-6"
                ><img src="../assets/icons/6.png" alt=""
              /></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">订单列表</el-menu-item>
            <el-menu-item index="4-2">商品订单详情</el-menu-item>
            <el-menu-item index="4-2">会员订单详情</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="icofont icon-yonghu"
                ><img src="../assets/icons/yonghu.png" alt=""
              /></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="5-1">用户列表</el-menu-item>
            <el-menu-item index="5-2">新增列表</el-menu-item>
            <el-menu-item index="5-2">用户详情</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="icofont icon-goods"
                ><img src="../assets/icons/goods.png" alt=""
              /></i>
              <span>商品管理</span>
            </template>
            <el-submenu index="6-1">
              <template slot="title">
                <i class="icofont icon-fenlei"
                  ><img src="../assets/icons/fenlei.png" alt=""
                /></i>
                <span>分类管理</span>
              </template>
              <el-menu-item index="1-1">分类列表</el-menu-item>
              <el-menu-item index="1-2">分类详情</el-menu-item>
              <el-menu-item index="1-2">新增分类</el-menu-item>
            </el-submenu>
            <el-menu-item index="6-2">商品列表</el-menu-item>
            <el-menu-item index="6-3">表格上传商品</el-menu-item>
            <el-menu-item index="6-4">批量新建商品</el-menu-item>
            <el-menu-item index="6-5">新建商品</el-menu-item>
            <el-menu-item index="6-6">商品详情</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="icofont icon-huiyuan"
                ><img src="../assets/icons/huiyuan.png" alt=""
              /></i>
              <span>会员套餐管理</span>
            </template>
            <el-menu-item index="5-1">会员套餐列表</el-menu-item>
            <el-menu-item index="5-2">新增套餐</el-menu-item>
            <el-menu-item index="5-2">套餐详情</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      // 折叠菜单，false为隐藏
      menushow: false
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less">
.el-container {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #373d41;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-box {
      display: flex;
      align-items: center;
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
    span {
      font-size: 26px;
      color: #fff;
    }
  }
  .el-aside {
    background-color: #333744;
    .toggle_bar {
      height: 25px;
      color: #fff;
      background-color: #4a5064;
      text-align: center;
      line-height: 25px;
      font-size: 12px;
      user-select: none;
      cursor: pointer;
      letter-spacing: 0.2em;
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
  .icofont {
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 10px;
    padding: 2px;
    box-sizing: border-box;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
}
</style>
