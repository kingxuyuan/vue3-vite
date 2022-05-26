/*
 * @Author: 大侠传授两招吧
 * @Date: 2021-10-09 13:31:57
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-25 21:46:40
 * @Description: vant 组件引入
 */
import { App } from 'vue';
import { 
    Button
} from 'vant';

const VantComs = [
    Button
]

export const setupVant = (app: App) => {
    VantComs.forEach(item => {
        app.use(item);
    })
}