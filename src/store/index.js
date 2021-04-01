import Vue from 'vue'
import Vuex from 'vuex'
import nav from './moudule/nav'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        nav
    }
})

export default store