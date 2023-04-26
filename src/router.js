import HomePage from './pages/HomePage.vue'
import ApartmentPage from './pages/ApartmentPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: HomePage,
		name: 'home'
	},
	{
		path: '/apartment/:id',
		component: ApartmentPage,
		name: 'apartment'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;