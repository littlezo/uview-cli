/**
 * 公共数据获取
 */
function getPublic() {
    uni.$z.api
        .getConfig()
        .then(res => {
            console.log('getConfig', res);

            uni.$z.vuex('config', res.data);
        })
        .catch(res => {
            console.warn(res);
        });
    uni.$z.api
        .getHall()
        .then(res => {
            console.log('getHall', res);
            uni.$z.vuex('task_hall', res.data);
        })
        .catch(res => {
            console.warn(res);
        });
}
function getAuthPublic() {
    uni.$z.api
        .getUserInfo()
        .then(res => {
            console.log('user', res);
            uni.$z.vuex('user', res.data);
        })
        .catch(res => {
            console.warn(res);
        });
    uni.$z.api
        .getLevelList()
        .then(res => {
            console.log('vip_level_list', res);
            uni.$z.vuex('vip_level_list', res.data);
        })
        .catch(res => {
            console.warn(res);
        });
}
export default {
    getPublic,
    getAuthPublic,
};
