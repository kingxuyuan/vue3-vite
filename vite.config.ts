/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 23:04:55
 * @Description: vite 配置
 */
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import compressPlugin from 'vite-plugin-compression';
import progress from 'vite-plugin-progress';

const path = require('path');
const NetworkIp = require('./networkIp.ts');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    console.log(command, mode);
    const { VITE_API_URL } = loadEnv(mode, process.cwd());
    const isBuild = command === 'build';
    
    let plugins = [
        progress(),
        vue(),
        styleImport({
            resolves: [VantResolve()],
        }),
    ];

    if (isBuild) {
        plugins.push(
            compressPlugin({
                ext: '.gz',
                deleteOriginFile: false,
            })
        )
    }

    return {
        plugins,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                "@img": "/src/assets/images/",              //设置别名
            }
        },
        css: {
            //css预处理
            preprocessorOptions: {
                scss: {
                    /*  引入var.scss全局预定义变量， 如果引入多个文件， 可以使用
                        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
                        这种格式
                    */
                    additionalData: `@import "@/assets/style/global.scss";`
                }
            }
        },
        server: {
            host: NetworkIp(),
            proxy: {
                '/api' : {
                    target: VITE_API_URL,
                    changeOrigin: true
                }   
            }
        },
        // json: {
        //     stringify: true,
        // },
        build: {
            manifest: true,
            sourcemap: false,
            target: ["es2015", "chrome58"],
            rollupOptions: {
                output: {
                    // 入口文件名
                    entryFileNames: 'assets/js/[name].js',
                    // 块文件名
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    // 资源文件名 css 图片等等
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                },
            },
        },
    }
});