import Vue from 'vue';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'babel-polyfill';
import App from './App.vue';
import router from './router';
import store from './store';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
//document.addEventListener('touchmove', function (event) {
//  event.preventDefault();
//}, {
//  passive: false
//});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
