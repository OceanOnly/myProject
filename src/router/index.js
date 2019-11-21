import Vue from 'vue'
import Router from 'vue-router'
import EnterExamination from '@/components/EnterExamination'
import Examination from '@/components/Examination'
import score from '@/components/score'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/EnterExamination',
      name: 'EnterExamination',
      component: EnterExamination
    },
    {
      path: '/Examination',
      name: 'Examination',
      component: Examination
    },
    {
      path: '/score',
      name: 'score',
      component: score
    },
  ]
})
