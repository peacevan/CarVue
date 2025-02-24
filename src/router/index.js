import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CarListView from '@/views/CarListView.vue';
import CarFormView from '@/views/CarFormView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cars',
    name: 'car-list',
    component: CarListView
  },
  {
    path: '/add',
    name: 'car-add',
    component: CarFormView
  },
  {
    path: '/edit/:id',
    name: 'car-edit',
    component: CarFormView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
