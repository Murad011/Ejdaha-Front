import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import VueRouter   from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import Header from './components/Header.vue'
import Staticties from './components/Staticties.vue'
import List from "./components/List.vue";
import NewDelivery from "./components/NewDelivery.vue";

const router = new VueRouter({
  routes: [
    {path: '/', component: Header },
    {path: '/staticties', component: Staticties},
    {path:'/sifarishler_siyahisi', component: List},
    {path:'/mushterinin_sifarisi/:id', component: NewDelivery}
  ],
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
