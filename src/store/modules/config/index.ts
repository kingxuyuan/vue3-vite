/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-26 16:20:59
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 17:46:25
 * @Description: {} 
 */
import { Module } from 'vuex';
import { RootState } from '@/store';
import { configApi } from '@/api/config';
import { config_types } from '@/types/config';
import { CONFIG_ACTIONS } from "../../actions/config.actions";
import { CONFIG_MUTATIONS } from "../../mutations/config.mutations";

export interface ConfigState {
    token: string
    setting: config_types
};

const state = {
    token: '',
    setting: {} as config_types
}

export const configStore: Module<ConfigState, RootState> = {
    state,
    actions: {
        [CONFIG_ACTIONS.FETCH_CONFIG_ACTION]: async ({ commit }) => {
            try {
                const res = await configApi();
                if (res.code === 200) commit(CONFIG_MUTATIONS.SET_CONFIG_MUTATION, res.data);
            } catch (err) {
                console.log(err);
            }
        }
    },
    mutations: {
        [CONFIG_MUTATIONS.SET_CONFIG_MUTATION]: (state, payload) => {
            state.setting = payload;
        },
        setToken: (state, payload) => {
            console.log(payload);
            state.token = payload;
        }
    }
}