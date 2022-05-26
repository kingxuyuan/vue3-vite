<!--
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 22:41:21
 * @Description: 
-->
<template>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <van-button type="primary" @click="reducer">主要按钮</van-button>
    <img alt="Vue logo" src="@/assets/images/login-bg.png" />
    <img src="@img/login-bg.png" alt="">
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, watch, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useStore } from '@/store';
import { CONFIG_ACTIONS } from '@/store/actions/config.actions';
 
// import { MUTATIONS } from '@/store/mutations-types';

const store = useStore();
const token = computed(() => store.state.config.token);
const config = computed(() => store.state.config.setting);

const reducer = () => {
    store.dispatch(CONFIG_ACTIONS.FETCH_CONFIG_ACTION, 'ssssssssss');
}

onMounted(() => {
    store.dispatch(CONFIG_ACTIONS.FETCH_CONFIG_ACTION, 'aaaaaaaaaaa')
});

watch(() => config.value, (val) => {
    console.log(val);
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    color: $red;
}
</style>
