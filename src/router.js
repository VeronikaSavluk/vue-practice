import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('./pages/HomePage.vue');
const ApartmentPage = () =>import('./pages/ApartmentPage.vue');
const LoginPage = () => import('./pages/LoginPage.vue');
const RegistrationPage = () => import('./pages/RegistrationPage.vue');
const OrdersPage = () => import('./pages/OrdersPage.vue');

const routes = [
	{
		path: '/',
		component: HomePage,
		name: 'home'
	},
	{
		path: '/login',
		component: LoginPage,
		name: 'login-page'
	},
	{
		path: '/registration',
		component: RegistrationPage,
		name: 'registration-page'
	},
	{
		path: '/apartments/:id',
		component: ApartmentPage,
		name: 'apartment'
	},
	{
		path: '/my-orders',
		component: OrdersPage,
		name: 'my-orders'
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;