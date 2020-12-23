import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let lifeData = {};

try {
    // 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
    lifeData = uni.getStorageSync('lifeData');
} catch (e) {
    //
}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['tab_bar', 'user', 'token'];

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
    // 判断变量名是否在需要存储的数组中
    if (saveStateKeys.indexOf(key) != -1) {
        // 获取本地存储的lifeData对象，将变量添加到对象中
        let tmp = uni.getStorageSync('lifeData');
        // 第一次打开APP，不存在lifeData变量，故放一个{}空对象
        tmp = tmp ? tmp : {};
        tmp[key] = value;
        // 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
        uni.setStorageSync('lifeData', tmp);
    }
};
const store = new Vuex.Store({
    state: {
        // 用户token
        token: lifeData.token ? lifeData.token : '',
        user: lifeData.user ? lifeData.user : {},
        // 底部tabBar 导航
        tab_bar: lifeData.tab_bar
            ? lifeData.tab_bar
            : {
                  customIcon: true,
                  midButton: true,
                  inactiveColor: '#929494',
                  activeColor: '#b19069',
                  current: 0,
                  show: true,
                  bgColor: '#fff',
                  borderTop: true,
                  list: [], // 参考UI官方文件
              },
        // 头部导航颜色
        navBackground: {
            backgroundColor: '#27303e',
            // 导航栏背景图
            // background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
            // 还可以设置背景图size属性
            // backgroundSize: 'cover',
            // 渐变色
            // backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
        },
    },
    mutations: {
        $uStore(state, payload) {
            // 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
            let nameArr = payload.name.split('.');
            let saveKey = '';
            let len = nameArr.length;
            if (len >= 2) {
                let obj = state[nameArr[0]];
                for (let i = 1; i < len - 1; i++) {
                    obj = obj[nameArr[i]];
                }
                obj[nameArr[len - 1]] = payload.value;
                saveKey = nameArr[0];
            } else {
                // 单层级变量，在state就是一个普通变量的情况
                state[payload.name] = payload.value;
                saveKey = payload.name;
            }
            // 保存变量到本地，见顶部函数定义
            saveLifeData(saveKey, state[saveKey]);
        },
    },
});

export default store;
