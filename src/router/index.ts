import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'
/* Router modules */

Vue.use(Router);

/*
  注意:子菜单只在children.length>=1时出现
*/

/*
  name:'router-name'             当使用<keep-alive>时，name字段是必需的，它还应该匹配其组件的name属性
                                 详细信息请参见:https://vuejs.org/v2/guide/components-dynamic-async.html#keep- live-with- dynamic- components
  redirect:                      如果设置为“noredirect”，单击面包屑时不会触发重定向操作
  meta: {
    roles: ['admin', 'editor']   将控制页面角色(允许设置多个角色)
    title: 'title'               子菜单和面包屑中显示的名称
    icon: 'svg-name'             显示在侧边栏中的icon图标
    hidden: true                 设置为true则隐藏在侧边栏中，默认为false
    alwaysShow: true             如果为真，将始终显示根菜单(默认为false)
                                 如果为false，则当根菜单中有小于或等于一个子路由时隐藏根菜单
    breadcrumb: false            如果为false，则该项将隐藏在breadcrumb中(默认为true)
    noCache: true                如果为真，页面将不会被缓存(默认为false)
    affix: true                  如果为真，则标记将附加到标记视图中
    activeMenu: '/example/list'  如果设置路径，侧栏将突出显示您设置的路径
  }
*/

/**
 ConstantRoutes
 没有权限要求的基本页所有角色都可以访问
 */
export const constantRoutes: RouteConfig[] = [
  // 重定向组件
  {
    path: '/redirect',
    component: Layout,
    meta: {hidden: true},
    children: [
      {
        path: '/redirect/:path*',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {hidden: true}
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
];

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes: RouteConfig[] = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/directive',
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'], // 您可以在根导航中设置角色
  //     alwaysShow: true // 显示根菜单
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import(/* webpackChunkName: "permission-page" */ '@/views/permission/page.vue'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // }
];

const createRouter = () => new Router({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // 重置路由
}

export default router
