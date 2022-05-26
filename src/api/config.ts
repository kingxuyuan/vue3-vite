/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-26 16:47:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 17:15:54
 * @Description: 
 */
import service from '@/utils/service';
import { axios_response_types } from 'service';
import { config_types } from '@/types/config';

// 配置接口
export const configApi = (): Promise<axios_response_types<config_types>> => service.post('/api/configs');