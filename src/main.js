Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import VueRouter   from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import NewDelivery from "./components/NewDelivery.vue";

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/new_delivery', component:NewDelivery}
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
