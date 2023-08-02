import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInPage from '../views/sign/SignInPage.vue'
import SignUpPage from '../views/sign/SignUpPage.vue'
import BoardListPage from '../views/board/BoardListPage.vue'
import WeMeetMainCompnent from '../components/WeMeetMainComponent.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'WeMeetMainCompnent',
    component: WeMeetMainCompnent
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/board-list',
    name: 'BoardListPage',
    component: BoardListPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
