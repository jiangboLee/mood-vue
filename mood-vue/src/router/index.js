import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Login from '@/components/login.vue'
import Test from '@/components/test.vue'

import { Message } from "element-ui"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
    	path: '/test',
    	name: 'test',
    	component: Test
    }
  ]
})

