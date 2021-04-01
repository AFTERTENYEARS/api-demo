import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Layout from '../layout'

Vue.use(Router)

const loadView = (view) => { // 路由懒加载
    return (resolve) => require([`@/view/${view}`], resolve)
}

// menu
let menus_routes = []
store.state.nav.menus.map(menuItem => {
    menus_routes.push({
        path: menuItem.path,
        component: loadView(menuItem.viewPath),
    })
})

const routes = [{
    path: '',
    component: Layout,
    children: menus_routes
}]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: routes
})