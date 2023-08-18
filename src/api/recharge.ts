/*
 * @Author: jinxin
 * @LastEditTime: 2023-07-15 10:58:03
 * @FilePath: \chatgpt-shuowen\src\api\rechrge.ts
 * @Description: 支付 相关接口
 */
import { get, post } from '@/utils/request'

/**
 * @description: 获取支付信息
 * @return {*}
 */
export function recharge<T>() {
  return get<T>({
    url: '/user/info',
  })
}

/**
 * 前端支付码
 */
export interface rechargeModel {
  // 支付渠道
  channel: bigint
  // 支付套餐
  set: bigint
}
/**
 * @description: 获取支付码
 * @param {loginModel} data
 * @return {*}
 */
export function getCode<T>(data: rechargeModel) {
  return post<T>({
    url: '/user/login/email',
    data,
  })
}

/**
 * @description: 获取用户chat剩余时间和权限
 * @param {id} id
 * @return {*}
 */

export async function getChatUserLimit<T>(id: String) {
	return await get<T>({
		url: '/pay/userId/' + id,
	})
}
