/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 22:40:08
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-25 22:44:19
 * @Description: 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 如果有记录页面的滚动行为
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
});

// router.beforeEach((to, from, next) => {
//     NProgress.done();
//     NProgress.start();
//     if (to.meta.needAuth && !sessionCache.sessionGet('T_T')) {
//         next({
//             path: '/login',
//             query: { redirect: to.fullPath },
//         });
//         return;
//     }
//     next()
// })

// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
//     NProgress.done();
// });

export default router;