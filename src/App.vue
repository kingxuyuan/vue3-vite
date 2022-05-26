<!--
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 17:45:16
 * @Description: 
-->
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

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <van-button type="primary" @click="reducer">主要按钮</van-button>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    color: $red;
    p {
        display: flex;
        box-shadow: 0 0 0 1px #2c3e50;
    }
}
</style>
