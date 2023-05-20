import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/algorithms",
    component: () => import("../views/algorithms/algorithms.vue")
  },
  {
    path: "/rank",
    component: () => import("../views/rank/rank.vue")
  },
  {
    path: "/contest",
    component: () => import("../views/contest/contest.vue")
  },
  {
    path: "/blog",
    component: () => import("../views/blog/blog.vue"),
    children: [
      {
        path: "/articlesDetail",
        component: () => import("../views/blog/cpns/articles-detail.vue")
      }
    ]
  },
  {
    path: "/discuss",
    component: () => import("../views/discuss/discuss.vue")
  },
  {
    path: "/main",
    component: () => import("../views/main/main.vue")
  },
  {
    path: "/about",
    component: () => import("../views/adout/about.vue")
  },
  {
    path: "/articlesEditor",
    component: () => import("../views/blog/cpns/articles-editor.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   // 设置body的padding-top样式
//   document.body.style.paddingTop =
//     document.querySelector(".navbar").offsetHeight + "px"
//   next()
// })

export default router
