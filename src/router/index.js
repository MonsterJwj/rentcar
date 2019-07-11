import Vue from 'vue'
import Router from 'vue-router'
// import Test from "../components/test.vue"
import Guide from '../page/guide'

Vue.use(Router)

let a=new Router({
  routes: [
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }
  ]
})
a.push('/guide')
export default a
