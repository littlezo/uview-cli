// 定义一个空函数
const $z = {
    //
};
// $u挂载到uni对象上
uni.$z = $z;
const install = Vue => {
    Vue.prototype.$z = $z;
};
export default {
    install,
};
