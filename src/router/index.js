import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import BootstrapVue from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueScrollTo from 'vue-scrollto'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueYouTubeEmbed)
Vue.use(VueScrollTo)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
