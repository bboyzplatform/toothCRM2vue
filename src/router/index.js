import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import ToothCRM from '@/components/ToothCRM'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/tooth_crm',
      name: 'ToothCRM',
      component: ToothCRM,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('tooth_crm')
  else next()
})

export default router
