import { createRouter, createWebHistory } from 'vue-router';
import ChatPage from './components/ChatPage.vue';
import ChatForm from './components/ChatForm.vue';

const routes = [
    { path: '/form', component: ChatForm},
    { path: '/chat', component: ChatPage},
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;