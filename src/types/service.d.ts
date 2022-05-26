/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-26 14:02:20
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 17:15:46
 * @Description: 
 */
export interface axios_response_types<D> {
    msg: string
    code: number
    data: D
}