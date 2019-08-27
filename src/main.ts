import Vue, {DirectiveOptions} from 'vue'

import 'normalize.css'
import SvgIcon from 'vue-svgicon'
import '@/styles/index.scss'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/icons/components'
import '@/permission'
import '@/utils/error-log'
import '@/pwa/register-service-worker'
import * as directives from '@/directives'
import * as filters from '@/filters'


Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
});

// 注册全局directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
});

// 注册全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
