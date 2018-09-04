// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VDivider,
  VExpansionPanel,
  VDataTable,
  VTextField,
  VImg,
  VSelect,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import VueAxios from 'vue-axios'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VDivider,
    VExpansionPanel,
    VDataTable,
    VTextField,
    VImg,
    VSelect,
    transitions,
    VueAxios
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
