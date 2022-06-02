<!--
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-06-02 13:48:47
 * @Description: 
-->
<template>
    <router-view
        v-slot="{ Component }"
    >
        <!-- <transition appear :name="transitionName"> -->
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
        <!-- </transition> -->
    </router-view>
    颜色选择：<input type="color" id="them" v-model="theme">
    <button @click="changeCTheme">确定</button>
    <HelloWorld msg="sssssssssss" />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from 'vue';
import { useStore } from '@/store';
import { CONFIG_ACTIONS } from '@/store/actions/config.actions';
import HelloWorld from '@/components/HelloWorld.vue';

const theme= ref();
const store = useStore();

/** 设置主题 */
const changeTheme = (themeKey: string) => {
    // 给根节点设置data-theme属性，切换主题色就是修改data-theme的值，这里data=dark/light
    window.document.documentElement.setAttribute('data-theme', themeKey); 
};
// changeTheme('light');

const changeCTheme = () => { 
    var el:any = document.getElementById('them');
    console.log(el.value);
    document.documentElement.setAttribute('data-theme', 'custom');
    document.documentElement.style.setProperty('--primary-bgColor', el.value);
    document.documentElement.style.setProperty('--primary-fontColor', el.value);
}

onMounted(() => {
    store.dispatch(CONFIG_ACTIONS.FETCH_CONFIG_ACTION, 'aaaaaaaaaaa');
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
