import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
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
    	path: '/test',
    	name: 'test',
    	component: Test
    }
  ]
})

