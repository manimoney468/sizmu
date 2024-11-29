// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import contact from "../components/contact.vue" ;
import Content from '../components/Content.vue';
const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: contact,
  },
  // Add other routes if needed
  {
    path: '/',
    name: 'Content',
    component: Content,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
