import 'leaflet/dist/leaflet.css';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import VueRouter   from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



import Header from './components/Header.vue'
import Staticties from './components/Staticties.vue'
import List from "./components/List.vue";
import NewDelivery from "./components/NewDelivery.vue";

import Delivery from './components/Delivery.vue'
const router = new VueRouter({
  routes: [
    {path: '/', component: Header },
    {path: '/staticties', component: Staticties},
    {path:'/delivery',component:Delivery},
    {path:'/sifarisler_sehifesi', component:List},
    {path:'/musterinin_sifarisi/:id',component:NewDelivery}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
