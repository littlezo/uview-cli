const sysConfig = {
    // api请求地址
    baseUrl: process.env.NODE_ENV === 'development' ? 'https://task.51xshi.com' : 'https://task.51xshi.com',
    // 图片域名
    imgDomain: process.env.NODE_ENV === 'development' ? 'https://task.51xshi.com' : 'https://task.51xshi.com',
    // 上传
    uploadDomain: process.env.NODE_ENV === 'development' ? 'https://task.51xshi.com/api/upload/' : 'https://task.51xshi.com/api/upload/',
    // H5端域名
    h5Domain: process.env.NODE_ENV === 'development' ? 'https://task.51xshi.com/' : 'https://task.51xshi.com/',
    // 腾讯地图key
    mapKey: '',
    // 是否调试模式
    debug: process.env.NODE_ENV === 'development' ? true : false,
    // api安全
    apiSecurity: process.env.NODE_ENV === 'production' ? true : false,
    // 公钥
    publicKey: ``,
};

export default sysConfig;
