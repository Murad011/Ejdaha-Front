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

import * as VueGoogleMaps from 'vue2-google-maps'




delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});




Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



import Header from './components/Header.vue'
import MonthStaticties from './components/MonthStaticties.vue'
import List from "./components/List.vue"
import Preview from './components/Preview.vue'
import SifarishTamamla from './components/SifarishTamamla.vue'
import Xerite from './components/Xerite.vue'
import Login from './components/Login.vue'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKhuoyfkJTHpR5O5Gt3BGhnQ4PhVP6Vd0',
    libraries: 'places',
  },

})

const user = localStorage.getItem('logged_in')


const router = new VueRouter({
  routes: [
    {path: '/', redirect:{
      name: 'login'
    } },
    {path:'/ana_sehife', component:Header, name:'header', beforeEnter: (to,from,next) => {
      if(user == false){
        next('/login')
      }else{
        next()
      }}},
    {path: '/staticties', component: MonthStaticties, beforeEnter: (to,from,next) => {
      if(user == false){
        next('/login')
      }else{
        next()
      }}},
    {path:'/sifarishler_siyahisi', component:List, beforeEnter: (to,from,next) => {
      if(user == false){
        next('/login')
      }else{
        next()
      }}},
    {path:'/sifarishi_tamamla/:id',component:SifarishTamamla,  beforeEnter: (to,from,next) => {
      if(user == false){
        next('/login')
      }else{
        next()
      }}},
    {path:'/xerite',component:Xerite},
    {path:'/login', component:Login, name: 'login'},
    
    {path:'/preview', component:Preview, beforeEnter: (to,from,next) => {
      if(user == false){
        next('/login')
      }else{
        next()
      }}}
  ],
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
