import { color, bgColor } from '@/common/function/color.js';
import { password, isQQ } from '@/common/function/verify.js';

const install = (_Vue, vm) => {
    vm.$z.color = color;
    vm.$z.bgColor = bgColor;
    vm.$z.verify = {
        password,
        isQQ,
    };
};

export default {
    install,
};
