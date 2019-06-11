import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({


    routes: [{
            path: '/register',
            name: 'register',
            component: () =>
                import ('@/views/register')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/login')
        },
        {
            path: '/add',
            name: 'add',
            component: () =>
                import ('@/views/add')
        },
        {
            path: '/update/:id',
            name: 'update',
            props: true,
            component: () =>
                import ('@/views/update')
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ('@/views/list')
        },

    ]
})