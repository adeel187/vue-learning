import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StaticHomeView from "../views/StaticHomeView.vue";
import TodoList from "../views/TodoList.vue";
import { routerLinks } from "./links";
import Login from "@/views/Auth/Login.vue";
import { routerPermissions } from "./permissions";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Layout from "@/components/layout/Layout.vue";
import AuthGuard from "@/guards/AuthGuard";

const defaultLayout = { header: true, footer: true, sidebar: true };
const LoginLayout = { header: false, footer: false, sidebar: false };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routerLinks.home,
      name: "home",
      components: {
        default: HomeView,
        header: Header,
        footer: Footer,
        sidebar: SideBar,
      },
      meta: { permission: routerPermissions.admin, layout: defaultLayout },
    },
    {
      path: routerLinks.staticHome,
      name: "static home",
      components: {
        default: StaticHomeView,
        header: Header,
        footer: Footer,
        sidebar: SideBar,
      },
      meta: { permission: routerPermissions.admin, layout: defaultLayout },
    },
    {
      path: routerLinks.todoList,
      name: "todoList",
      component: Layout,
      props: { layout: defaultLayout },
      children: [
        {
          path: "",
          component: TodoList,
        },
      ],
      meta: { permission: routerPermissions.admin },
    },
    {
      path: routerLinks.about,
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { permission: routerPermissions.admin },
    },
    {
      path: routerLinks.login,
      name: "login",
      components: {
        default: Login,
      },
      props: { default: true, ...LoginLayout },
      meta: { permission: routerPermissions.guest, layout: LoginLayout },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const permission = to.meta.permission;

//   if (permission === routerPermissions.admin) {
//     AuthGuard(to, from, next);
//   } else if (permission === routerPermissions.guest) {
//     next();
//   }
// });

export default router;
