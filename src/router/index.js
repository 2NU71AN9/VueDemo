import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/router/Home'
import About from '../components/router/About'
import News from '../components/router/News'
import Message from '../components/router/Message'
import Detail from '../components/router/Detail'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: "/home",
            component: Home,
            children: [{
                    path: "news",
                    component: News,
                    meta: { // 可以添加自定义的信息
                        isAuth: true,
                    },
                    // 独享前置路由守卫, 无后置
                    beforeEnter(to, from, next) {
                        alert("暂不通行");
                    },
                },
                {
                    path: "message",
                    component: Message,
                    children: [{
                        path: "detail",
                        component: Detail,
                    }, ]
                },
            ]
        },
        {
            path: "/about",
            component: About,
        },
    ]
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        alert("暂不通行");
    } else {
        next()
    }
})

// 全局后置路由守卫
router.afterEach((to, from) => {

})

export default router