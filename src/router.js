import vue from 'vue'
import VueRouter from 'vue-router'

// import One from '@/components/One'
// import Two from '@/components/Two'
// import User from '@/pages/User'
// import UserProfile from '@/pages/UserProfile'
// import PersonForm from '@/pages/PersonForm'
const One = () => import('@/components/One')
const Two = () => import('@/components/Two')
const User = () => import('@/pages/User')
const UserProfile = () => import('@/pages/UserProfile')
const PersonForm = () => import('@/pages/PersonForm' /* webpackChunkName: 'form' */)


vue.use(VueRouter)

const routes = [
    { path: '/', component: One},
    { path: '/about', component: Two},
    { path: '/user', component: User},
    { path: '/user/:id', component: UserProfile},
    { path: '/form', component: PersonForm},
]

const router = new VueRouter ({
    routes: routes,
    mode: 'history'
})

export default router