import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

App.mpType = 'app';

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

// 导入全局little
import little from '@/common/little.js';
Vue.use(little);

// 导入状态管理
import store from '@/store';
// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare);

// #ifdef H5
// vConsole 调试工具
import vConsole from 'vconsole';
if (process.env.NODE_ENV === 'development') {
    new vConsole();
}

// H5复制
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);
// #endif

// 身份证验证
import IDCardChecker from 'chinese-idcard-checker';
Vue.prototype.IDCardChecker = IDCardChecker;

// 引入语言包
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// 引入并使用vue-i18n
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const i18n = new VueI18n({
    // 默认语言
    locale: 'zh',
    // 引入语言文件
    messages: {
        zh: Chinese,
        en: English,
    },
});

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;

const app = new Vue({
    i18n,
    store,
    ...App,
});

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import api from '@/common/http.api.js';
Vue.use(api, app);

// 导入公共函数
import common from '@/common/function/common.js';
Vue.use(common, app);
app.$mount();
