import { createApp } from "vue";
import Element from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import '@designer/vue/src/styles/index.less'
createApp(App).use(Element).mount('#app')