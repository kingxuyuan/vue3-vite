/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 16:43:49
 * @Description: 
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}