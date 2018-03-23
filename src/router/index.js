import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import secondcomponent from '@/components/secondComponent'

import side from '@/components/control/side'
import home from '@/components/control/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/side',
      name: 'side',
      component: side
    }
  ]
})
