import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'
import ApplyCompany from '@/views/applyCompany/Index'
import ReviewPosting from '@/views/reviewPosting/Index'
import MyPage from '@/views/myPage/index'
import ReviewRegisterForm from '@/views/reviewPosting/reviewRegister/Index'

import { AuthFilter } from '@/router/auth';

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/ApplyCompany',
    component: ApplyCompany
  },
  {
    path: '/ReviewPosting',
    // 下のやつはページ用
    // path: '/ReviewPosting/:p',
    component: ReviewPosting
  },
  {
    path: '/ReviewRegisterForm/:company_id',
    component: ReviewRegisterForm
  },
  {
    path: '/MyPage/:id',
    component: MyPage
  },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  routes
})
router.afterEach(AuthFilter);

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
