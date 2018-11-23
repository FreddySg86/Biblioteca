// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Libreria from './components/Libreria'
import Contenido from './components/Contenido'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component: Libreria
    },
    {
      path:'/contenido/:id',
      name: 'contenido',
      component: Contenido

    }
  ]
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  //el: '#app',
  components: { App },
  template: '<App/>'
}).$mount('#app')
