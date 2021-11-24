/*
 * @Author: zengxm
 * @Date: 2021-11-19 17:01:22
 * @LastEditors: zengxm
 * @LastEditTime: 2021-11-24 15:41:14
 * @Description: change
 * @FilePath: /demo-vue3/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
