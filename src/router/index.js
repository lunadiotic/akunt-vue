import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( "@/views/Home.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( "@/views/auth/Login.vue")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import( "@/views/auth/Register.vue")
    },
    {
        path: '/transaction',
        name: 'transaction.index',
        component: () => import( "@/views/transaction/Index.vue")
    },
    {
        path: '/transaction/create',
        name: 'transaction.create',
        component: () => import( "@/views/transaction/Create.vue")
    },
    {
        path: '/transaction/edit/:id',
        name: 'transaction.edit',
        component: () => import( "@/views/transaction/Edit.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router