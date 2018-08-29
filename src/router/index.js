import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewData from '@/components/NewData'
import ApiTest from '@/components/ApiTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newData',
      name: 'NewData',
      component: NewData
    },
    {
      path: '/apiTest',
      name: 'ApiTest',
      component: ApiTest
    }
  ]
})
