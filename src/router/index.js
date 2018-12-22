import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BOSSADD from '@/components/BossAdd'
import WORKER from '@/components/Worker'
import BOSS from '@/components/Boss'
import WORKERINFO from '@/components/Workerinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Worker/:id',
      name: 'WORKER',
      component: WORKER
    },
    {
      path: '/Workerinfo/:id',
      name: 'WORKERINFO',
      component: WORKERINFO
    },
    {
      path: '/BossAdd',
      name: 'BOSSADD',
      component: BOSSADD
    },
    {
      path: '/Boss',
      name: 'BOSS',
      component: BOSS
    }
  ]
})
