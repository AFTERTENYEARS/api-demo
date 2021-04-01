const state = {
    menus: [{
            item: '首页',
            path: '/',
            viewPath: 'home',
        }, {
            item: '其他',
            path: '/archive',
            viewPath: 'archive'
        }
    ],
    current: null
}


const mutations = {
    SWITCH_MENU: (state, next) => {
        state.current = next
    }
}

const actions = {
    switchMenu({
        commit
    }, next) {
        commit('SWITCH_MENU', next)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}