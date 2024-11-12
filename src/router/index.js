import { createRouter, createWebHistory } from 'vue-router'
import ViewMail from '@/views/ViewMail.vue'
import AddView from '@/views/AddView.vue'
import UpdateView from '@/views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'viewmail',
      component: ViewMail ,
    },
    {
      path: '/add',
      name: ' add',
      component: () => import('../views/AddView.vue'),
    },
    {
      path: '/edite/:id',
      name: ' edit',
      component: () => import('../views/UpdateView.vue'), 
    }
  
  ],
})

export default router
