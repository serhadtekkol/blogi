import { createStore } from 'vuex'
import { auth } from './auth/auth'
import { postInfo } from './posts/posts'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { auth, postInfo }
})