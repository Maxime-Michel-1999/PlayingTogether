import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../views/Join.vue'
import Host from '../views/Host.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Join',
    name: 'Join',
    component: Join,
    beforeEnter: (to,from,next) => {
      if(sessionStorage.getItem('check')=='nok'){
        alert('You are not yet registered please do so !');
        next('./account');
        return
      }
      else if(sessionStorage.getItem('check')==null){
        document.querySelector('#signinButton').style.background = 'red';
        alert("Please sign in below !");
        next('./');
        return
      }
      next(true);
    }
    }, 
  {
  path: '/host',
    name: 'Host',
    component:Host,
    beforeEnter: (to,from,next) => {
      if(sessionStorage.getItem('check')=='nok'){
        alert('You are not yet registered please do so !');
        next('./account');
        return
      }
      else if(sessionStorage.getItem('check')==null){
        document.querySelector('#signinButton').style.background = 'red';
        alert("Please sign in below !");
        next('./');
        return
      }
      next(true);
    }
    },
  {
    path: '/game',
      name: 'Game',
      component: Game,
      beforeEnter: (to,from,next) => {
        if(sessionStorage.getItem('check')=='nok'){
          alert('You are not yet registered please do so !');
          next('./account');
          return
        }
        else if(sessionStorage.getItem('check')==null){
          document.querySelector('#signinButton').style.background = 'red';
          alert("Please sign in below !");
          next('./');
          return
        }
        next(true);
      }
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
