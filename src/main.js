import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 全局引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 引入全局css控制样式
import "./assets/css/global.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
