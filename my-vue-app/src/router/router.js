import { createRouter, createWebHistory } from 'vue-router';
import ChatPage from './components/ChatPage.vue';

const routes = [
    {
      path: '/',
      name: 'ChatPage',
      component: ChatPage
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;