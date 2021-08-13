import Vue from 'vue'
// import App from './components/to_do_list/App.vue'
import App from './components/github_users/App'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')