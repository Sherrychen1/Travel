import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/Home";
Vue.use(Router);

//路由配置
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    }
  ],
});
