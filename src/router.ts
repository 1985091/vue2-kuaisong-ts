import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/index.vue";
import {
  getToken,
  setToken,
  removeToken,
  getStoreId,
  setStoreId,
  removeStoreId,
  setUserInfo,
  getUserInfo,
  removeUserInfo
} from "@/utils/cookies";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
      meta: { title: "快送外卖", hidden: true, notNeedAuth: true }
    },
    {
      path: "/404",
      component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
      meta: { title: "快送外卖", hidden: true, notNeedAuth: true }
    },
    {
      path: "/",
      component: Layout,
      // redirect: "/dashboard",
      redirect: "/recommend",
      children: [
        // {
        //   path: "dashboard",
        //   component: () =>
        //     import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
        //   name: "Dashboard",
        //   meta: {
        //     title: "工作",
        //     icon: "dashboard",
        //     affix: true
        //   }
        // },
        // {
        //   path: "/main",
        //   component: () =>
        //     import(/* webpackChunkName: "shopTable" */ "@/views/main/a.vue"),
        //   meta: {
        //     title: "欢迎光临",
        //     icon: "icon-main"
        //   }
        // },
        {
          path: "/recommend",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/recommened/index.vue"),
          meta: {
            title: "欢迎光临",
            icon: "icon-recommend"
          }
        },
		{
          path: "/statistics",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/statistics/index.vue"),
          meta: {
            title: "数据",
            icon: "icon-statistics"
          }
        },
        {
          path: "order",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/orderDetails/index.vue"),
          meta: {
            title: "订单",
            icon: "icon-order"
          }
        },
        {
          path: "setmeal",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/setmeal/index.vue"),
          meta: {
            title: "套餐",
            icon: "icon-combo"
          }
        },
        {
          path: "dish",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/dish/index.vue"),
          meta: {
            title: "菜品",
            icon: "icon-dish"
          }
        },
        {
          path: "/dish/add",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/dish/addDishtype.vue"),
          meta: {
            title: "添加菜品",
            hidden: true
          }
        },
        
        {
          path: "category",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/category/index.vue"),
          meta: {
            title: "分类",
            icon: "icon-category"
          }
        },
        {
          path: "employee",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/employee/index.vue"),
          meta: {
            title: "员工",
            icon: "icon-employee"
          }
        },
        
        {
          path: "/employee/add",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "@/views/employee/addEmployee.vue"),
          meta: {
            title: "添加员工",
            hidden: true
          }
        },
        
        {
          path: "/setmeal/add",
          component: () =>
            import(/* webpackChunkName: "shopTable" */ "@/views/setmeal/addSetmeal.vue"),
          meta: {
            title: "添加套餐",
            hidden: true
          }
        }
      ]
    },
    {
      path: "*",
      redirect: "/404",
      meta: { hidden: true }
    }
  ]
});

export default router;
