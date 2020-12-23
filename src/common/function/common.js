// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
const install = (_Vue, vm) => {
    let password = password => {
        let pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{7,31}$/;
        if (!pattern.exec(password)) {
            return false;
        }
        return true;
    };
    let isQQ = QQ => {
        let pattern = /^[1-9]\d{4,10}$/;
        return pattern.test(QQ) ? true : false;
    };
    let getPublic = () => {
        vm.$z.api
            .getConfig()
            .then(res => {
                console.log('getConfig', res);

                vm.$z.vuex('config', res.data);
            })
            .catch(res => {
                console.warn(res);
            });
        vm.$z.api
            .getHall()
            .then(res => {
                console.log('getHall', res);
                vm.$z.vuex('task_hall', res.data);
            })
            .catch(res => {
                console.warn(res);
            });
    };
    let getAuthPublic = () => {
        vm.$z.api
            .getUserInfo()
            .then(res => {
                console.log('user', res);
                vm.$z.vuex('user', res.data);
            })
            .catch(res => {
                console.warn(res);
            });
        vm.$z.api
            .getLevelList()
            .then(res => {
                console.log('vip_level_list', res);
                vm.$z.vuex('vip_level_list', res.data);
            })
            .catch(res => {
                console.warn(res);
            });
    };
    vm.$z.verify = { password, isQQ };
    vm.$z.getPublic = getPublic;
    vm.$z.getAuthPublic = getAuthPublic;
};
export default {
    install,
};
