import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    // { redirect: "/welcome", component: Welcome },
    {
      path: "/home",
      name: "home",
      component: Home,
      // redirect: "/welcome"
    }
  ]
});

// 路由守卫
// router.beforeEach(function(to, from, next) {
//   // 获取token
//   // var token = window.sessionStorage.getItem("token");

//   // if (token === null && to.path !== "/login") {
//   //   return next("/login");
//   // }
//   if (to.path !== "/login") {
//     return next("/login");
//   }
//   next();
// });

export default router;
