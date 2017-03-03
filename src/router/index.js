import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Social from '@/views/Social'
import Campus from '@/views/Campus'
import About from '@/views/About'
import WorkHere from '@/views/WorkHere'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/social/:department?/:id?',
      name: 'SocialJobs',
      component: Social
    },
    {
      path: '/campus/:department?/:id?',
      name: 'CampusJobs',
      component: Campus
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/workhere',
      name: 'WorkHere',
      component: WorkHere
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
