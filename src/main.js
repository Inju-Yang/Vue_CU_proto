import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
//router 사용 선언

createApp(App)
	.use(router) //use(roter) 선언
	.mount('#app')