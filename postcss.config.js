/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 22:03:09
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-25 22:08:54
 * @Description:
 */
const autoprefixer = require('autoprefixer');
const postcssPxtorem = require('postcss-pxtorem');

module.exports = {
    plugins: [
        autoprefixer(),
        postcssPxtorem({
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        }),
    ],
};
