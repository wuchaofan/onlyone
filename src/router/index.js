import Vue from 'vue'
import Router from 'vue-router'

// UI
// import Dashboard from '@/onlyone/pages/dashboard/dashboard'
import Alerts from '@/onlyone/pages/ui/alerts/alerts'
import Buttons from '@/onlyone/pages/ui/buttons/buttons'
import Forms from '@/onlyone/pages/ui/forms'
import Tabs from '@/onlyone/pages/ui/tabs'
import Steppers from '@/onlyone/pages/ui/steppers'
import Timelines from '@/onlyone/pages/ui/timelines/timelines'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/onlyone/pages/dashboard/dashboard')
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/steppers',
      name: 'Steppers',
      component: Steppers
    },
    {
      path: '/timelines',
      name: 'Timelines',
      component: Timelines
    },
    { path: '/', redirect: '/dashboard' }
  ]
})
