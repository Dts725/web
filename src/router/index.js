import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import login from '@/components/login'
import comment from  '../components/comment/comment'
import mglogin from '../mg/mgLogin'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path : '/mglogin',
      name : 'mglogin',
      component: mglogin,
      children : [
        {
          path : '/eew'
        }
      ]
    }
  ]
})
