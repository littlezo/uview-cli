/* eslint-disable no-undef */
// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
const install = (Vue, vm) => {
    Vue.prototype.$z.http.setConfig({
        baseUrl: vm.$z.baseUrl,
        dataType: 'json',
        showLoading: true,
        loadingText: '数据加载中...',
        loadingTime: 800,
        originalData: false,
        loadingMask: true,
        header: {
            'content-type': 'application/json;charset=UTF-8',
        },
    });
    // 请求拦截，配置Token等参数
    Vue.prototype.$z.http.interceptor.request = config => {
        const noToken = ['api/login', 'api/register', 'api/retrieve', 'api/config'];
        if (noToken.indexOf(config.url) >= 0) config.header.noToken = true;
        config.header.Authorization = 'Bearer ' + vm.token;

        return config;
    };
    // 响应拦截，判断状态码是否通过
    Vue.prototype.$z.http.interceptor.response = res => {
        // console.log(config);
        if (res.code == 20000) {
            // 带提示消息无数据返回
            vm.$z.toast(res.message, 3000);
            return res;
        } else if (res.code === 10001 || res.code === 10006 || res.code === 10007 || res.code === 10008) {
            // 登录过期
            let routes = getCurrentPages();
            let curRoute = routes[routes.length - 1].route;
            if (curRoute != 'pages/login/login' && curRoute != 'pages/login/register' && curRoute != 'pages/login/retrieve') {
                vm.$z.toast(res.message, 3000);
                setTimeout(() => {
                    vm.$z.route({ url: '/pages/login/login', type: 'reLaunch' });
                }, 1000);
            }
            return false;
        } else if (res.code == 30001) {
            return res;
        } else if (res.code == 0 || res.code == 200 || res.code == 2000 || res.code == 10000) {
            // 处理成功返回数据
            return res;
        } else if (res.code == 10002 || res.code == 10003 || res.code == 10004 || res.code == 10005 || (res.code >= 40000 && res.code <= 40999)) {
            // 带提示信息异常
            vm.$z.toast(res.message, 3000);
            return false;
        } else {
            // 其他异常
            console.warn(res.data);
            vm.$z.toast('系统错误 错误代码：' + res.data.code, 5000);
            return false;
        }
    };
};

export default {
    install,
};
