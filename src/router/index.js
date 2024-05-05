import Vue from 'vue';
import Router from 'vue-router';
import Products from '@/views/Products.vue';
import Inventory from '@/views/Inventory.vue';
import UserManagement from '@/views/UserManagement.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/users',
      name: 'UserManagement',
      component: UserManagement
    }
  ]
});
