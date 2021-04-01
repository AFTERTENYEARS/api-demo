import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: false
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
    NProgress.done()
})

router.afterEach((to) => {
    NProgress.done()
    store.state.nav.menus.map(menuItem => {
        menuItem.path === to.path && store.dispatch('nav/switchMenu', menuItem)
    })
})