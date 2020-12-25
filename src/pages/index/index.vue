<template>
    <view>
        <view class="z-fc" :style="$z.bgColor('#152')">
            <view class="z-f-fxl" :style="$z.color('#fff')">{{ user.is_qq }}{{ sysConfig }}</view>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    data: () => ({
        sysConfig: [],
    }),
    computed: {},
    methods: {},
    watch: {},

    // 页面周期函数--监听页面加载
    onLoad() {},
    // 页面周期函数--监听页面初次渲染完成
    onReady() {},
    // 页面周期函数--监听页面显示(not-nvue)
    onShow() {
        console.log(this.$z);
        this.$z.vuex('user.is_qq', this.$z.verify.isQQ(970055999));
        this.$z.api.getConfig().then(res => {
            // this.sysConfig = res.data;
            console.log(res.data);
        });
    },
    // 页面周期函数--监听页面隐藏
    onHide() {},
    // 页面周期函数--监听页面卸载
    onUnload() {},
    // 页面处理函数--监听用户下拉动作
    onPullDownRefresh() {
        uni.stopPullDownRefresh();
    },
    // 页面处理函数--监听用户上拉触底
    onReachBottom() {},
    // 页面处理函数--监听页面滚动(not-nvue)
    /* onPageScroll(event) {}, */
    // 页面处理函数--用户点击右上角分享
    /* onShareAppMessage(options) {}, */
};
</script>

<style lang="scss"></style>
