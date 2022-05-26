/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-26 01:05:01
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 17:44:34
 * @Description: 
 */
import { InjectionKey } from 'vue';
import { createStore, createLogger, useStore as _useStore, Store } from 'vuex';

import { configStore as config, ConfigState } from './modules/config';

export interface RootState {
    config: ConfigState
}

// 定义 injection key
export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore({
    modules: {
        config
    },
    plugins: import.meta.env.MODE === 'dev' ? [createLogger()] : []
});

// 定义自己的 `useStore` 组合式函数
export const useStore = () => _useStore(key);