// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'example/:pid',
        component: () => import('@/views/example/Example.vue'),
        children: [
          {
            path: 'compA',
            name: 'CompA',
            component: () => import('@/views/example/CompA.vue')
          },
          {
            path: 'compB',
            name: 'CompB',
            component: () => import('@/views/example/CompB.vue')
          }
        ]
      },
      {
        path: 'example2/:pid',
        component: () => import('@/views/example2/Example.vue'),
        children: [
          {
            path: 'compC',
            name: 'CompC',
            component: () => import('@/views/example2/CompC.vue')
          },
          {
            path: 'compD',
            name: 'CompD',
            component: () => import('@/views/example2/CompD.vue')
          }
        ]
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
