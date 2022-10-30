import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
// 下面两行用于将element-plus里的英文转为中文
import locale from 'element-plus/es/locale/lang/zh-cn'
createApp(App).use(ElementPlus,{locale}).mount('#app')
// main.ts
// import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
// app.mount('#app')