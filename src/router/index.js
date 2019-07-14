import Vue from 'vue'
import Router from 'vue-router'
// import Test from "../components/test.vue"
import Guide from '../page/guide'
import Changz from '../page/changz'
import Chex from '../page/chex'
import Chongz from '../page/chongz'
import Dingd from '../page/dingd'
import Dingdx from '../page/dingdx'
import Dingdx2 from '../page/dingdx2'
import Jiag from '../page/jiag'
import Login from '../page/login'
import Lux from '../page/lux'
import Mend from '../page/mend'
import Mendl from '../page/mendl'
import Pingj from '../page/pingj'
import Pingjl from '../page/pingjl'
import Shiz from '../page/shiz'
import Shunf from '../page/shunf'
import Wod from '../page/wod'
import Xuanz from '../page/xuanz'
import Register from '../page/register'
import Chong_first from '../page/chong_first'
Vue.use(Router)

let a=new Router({
  routes: [
    {path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/changz',
      name: 'Changz',
      component: Changz
    },
    {
      path: '/chex',
      name: 'Chex',
      component: Chex
    },
    {
      path: '/chongz',
      name: 'Chongz',
      component: Chongz
    },
    {
      path: '/dingd',
      name: 'Dingd',
      component: Dingd
    },
    {
      path: '/dingdx',
      name: 'Dingdx',
      component: Dingdx
    },
    {
      path:'/dingdx2',
      name:'Dingdx2',
      component:Dingdx2
    },
    {
      path: '/jiag',
      name: 'Jiag',
      component: Jiag
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/lux',
      name: 'Lux',
      component: Lux
    },
    {
      path: '/mend',
      name: 'Mend',
      component: Mend
    },
    {
      path: '/mendl',
      name: 'Mendl',
      component: Mendl
    },
    {
      path: '/pingj',
      name: 'Pingj',
      component: Pingj
    },
    {
      path: '/pingjl',
      name: 'Pingjl',
      component: Pingjl
    },
    {
      path: '/shiz',
      name: 'Shiz',
      component: Shiz
    },
    {
      path: '/shunf',
      name: 'Shunf',
      component: Shunf
    },
    {
      path: '/wod',
      name: 'Wod',
      component: Wod
    },
    {
      path: '/xuanz',
      name: 'Xuanz',
      component: Xuanz
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/chong_first',
      name: 'Chong_first',
      component: Chong_first
    },
  ]
})
a.push('/login')
export default a
