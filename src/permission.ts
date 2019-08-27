import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {Route} from 'vue-router'

NProgress.configure({showSpinner: false});

// TODO:勿删
// const whiteList = ['/login', '/auth-redirect'];


router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start();
  // TODO:下列代码别删，登录模块验证，确定用户是否已登录
  // if (UserModule.token) {
  //   if (to.path === '/login') {
  //     // 如果已登录，则重定向到主页
  //     next({path: '/'})
  //     NProgress.done()
  //   } else {
  //     // 检查用户是否获得了他的权限角色
  //     if (UserModule.roles.length === 0) {
  //       try {
  //         // 角色必须是对象数组!例如:['admin']或['developer'， 'editor']
  //         await UserModule.GetUserInfo()
  //         const roles = UserModule.roles
  //         // 根据角色生成可访问路由映射
  //         PermissionModule.GenerateRoutes(roles)
  //         // 动态添加可访问的路由
  //         router.addRoutes(PermissionModule.dynamicRoutes)
  //         // 确保addRoutes是完整的
  //         // 设置replace: true，这样导航就不会留下历史记录
  //         next({...to, replace: true})
  //       } catch (err) {
  //         // 删除令牌并重定向到登录页面
  //         UserModule.ResetToken()
  //         Message.error(err || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   // 如果没有token，且当前路由是不需要登录权限
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     // 没有访问权限的其他页面被重定向到登录页面。
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
  next()
});

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
});
