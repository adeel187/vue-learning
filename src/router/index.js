import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import { routerLinks } from './links'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routerLinks.home,
      name: 'home',
      component: HomeView
    },
    {
      path: routerLinks.todoList,
      name: 'todoLisy',
      component: TodoList
    },
    {
      path: routerLinks.about,
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
