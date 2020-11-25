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
import Notifications from 'vue-notification'
import * as VueGoogleMaps from 'vue2-google-maps'




delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.use(Notifications)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




import Header from './components/Header.vue'
import Statistika from './components/Statistika.vue'
import List from "./components/List.vue"
import SifarishTamamla from './components/SifarishTamamla.vue'
import Login from './components/Login.vue'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKhuoyfkJTHpR5O5Gt3BGhnQ4PhVP6Vd0',
    libraries: 'places',
  },

})


const router = new VueRouter({
  routes: [
    {path: '/', redirect:{
      name: 'login'
    } },
    {path:'/ana_sehife', component:Header, name:'header'},
    {path: '/staticties', component: Statistika},
    {path:'/sifarishler_siyahisi', component:List, name:'sifarisler'},
    {path:'/sifarishi_tamamla/:id',component:SifarishTamamla},
    {path:'/login', component:Login, name: 'login'},
     
  ],
  mode:'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
