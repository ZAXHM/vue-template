import Vue from 'vue';
import router from './router.js';

/**
 * 移动端引入
 */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

/**
 * PC端引入
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import App from './App.vue';

import Http from './http.js';

Vue.prototype.http = Http;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
