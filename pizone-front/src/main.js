import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/store'

Vue.config.productionTip = false

import router from './router'

import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')