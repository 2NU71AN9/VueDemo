import Vue from 'vue'

import store from './store'
import router from './router'
// import App from './components/to_do_list/App.vue'
// import App from './components/github_users/App'
import App from './components/router/App'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    router,
}).$mount('#app')