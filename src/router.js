import vue from 'vue'
import VueRouter from 'vue-router'

import Two from '@/components/Two'
import One from '@/components/One'
import User from '@/pages/User'
import UserProfile from '@/pages/UserProfile'

vue.use(VueRouter)

const routes = [
    { path: '/', component: One},
    { path: '/about', component: Two},
    { path: '/user', component: User},
    { path: '/user/:id', component: UserProfile}
]

const router = new VueRouter ({
    routes: routes,
    mode: 'history'
})

export default router