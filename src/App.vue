<!--
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-25 21:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 23:11:18
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
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from 'vue';
import { useStore } from '@/store';
import { CONFIG_ACTIONS } from '@/store/actions/config.actions';

const store = useStore();

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
