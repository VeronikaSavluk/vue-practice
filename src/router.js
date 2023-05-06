import HomePage from './pages/HomePage.vue'
import ApartmentPage from './pages/ApartmentPage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegistrationPage from './pages/RegistrationPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;