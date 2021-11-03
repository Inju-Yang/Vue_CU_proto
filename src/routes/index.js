import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './Home'
import Read from '../components/Read'
import Create from '../components/Create'
import Detail from '../components/Detail'
import Update from '../components/Update'

//연결할 Vue파일과 변수 선언

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/read',
			name: 'Read',
			component: Read
		},
		{
			path: '/create', //contentId가 있으면 보내주고 없으면 걍 그대로
			name: 'Create',
			component: Create
		},
		{
			path: '/detail/:contentId',
			name: 'Detail',
			component: Detail
		},
		{
			path: '/detail/:contentId',
			name: 'Update',
			component: Update
		}
	]
})