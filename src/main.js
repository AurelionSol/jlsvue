// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import outline from 'vue-outline'
import ace from 'ace-builds'
import store from './stroe'

Vue.use(ace);




Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(outline);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store:store,
  components: {App},
  template: '<App/>'
})
