// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// 获取客户端ip
let getEIp = 'https://api.ip.sb/jsonip';
const install = (_Vue, vm) => {
    // 获取客户端IP
    // 此处使用了传入的params参数，一切自定义即可
    let getIp = (params = {}) => vm.$u.get(getEIp, params);
    vm.$z.api = {
        getIp,
    };
};

export default {
    install,
};
