import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import dashboardView from '../views/adminpages/dashboard.vue'
import Posts from "../views/posts.vue"
import { Auth } from 'aws-amplify'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/private/login',
            name: 'login',

            component: LoginView
        },
        {
            path: '/post/:id',
            name: 'posts',
            component: Posts
        }, {
            path: '/private',
            name: 'admin',
            component: dashboardView,
            meta: { requiresAuth: true }

        },
        {
            path: '/:pathMatch(.*)*',
            redirect: "/"
        }

    ]
})
router.beforeEach(async(to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const isAuthenticated = await Auth.currentUserInfo();

    if (requiresAuth && !isAuthenticated) {

        next("/");
    } else {
        next()

    }

})

export default router