import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    beforeEnter: (to,from,next) => {
      if(sessionStorage.getItem("check")=='ok'){
        next('/Join')
      }
      else if(sessionStorage.getItem('check')=='nok'){
        alert('cest pas good');
        alert('You are not yet registered please do so !');
        next('./Account')
      }
      else{
        alert("Please sign in below !")
      }
    }
    },
  {
  path: '/host',
    name: 'Host',
    component: () => import(/* webpackChunkName: "about" */ '../views/Host.vue')
  },
  {
    path: '/game',
      name: 'Game',
      component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
    },

  {
    path: '/account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
