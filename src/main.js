import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

createApp(App).mount('#app')
