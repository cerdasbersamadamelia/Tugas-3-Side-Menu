import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '',
  //   redirect: '/folder/Inbox'
  // },
  // {
  //   path: '/folder/:id',
  //   component: () => import ('../views/FolderPage.vue')
  // },
  {
    path: '',
    redirect: '/damelia'
  },
  {
    path: '/damelia',
    component: () => import ('../views/ViewCat.vue')
  },
  {
    path: '/about',
    component: () => import ('../views/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
