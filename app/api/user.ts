import { useGetFetch, usePostFetch } from "~/composables/useApi";
import type { ApiResponse } from '~/types/Api'
import type { UpdatePasswordRequest, UserInfo, UserTestInfo } from '~/types/User'



/**
 * 用户登录
 * - Method: POST
 * - Path: /user/signin
 * - Body: { email, password }
 * - 返回: { code, message, data: UserInfo }
 */
export const login = (data: { email: string, password: string }) => {
  return usePostFetch<ApiResponse<UserInfo>>(`/user/signin`, data)
  
}
/**
 * 获取当前用户信息
 * - Method: GET
 * - Path: /user/info
 * - Header: token
 * - 返回: { code, message, data: UserInfo }
 */
export const getUserInfo = () => {
  return useGetFetch<ApiResponse<UserInfo>>(`/user/info`)
}
/**
 * 更新用户信息
 * - Method: POST
 * - Path: /user/info_update
 * - Body: { name?, email?, lang? }
 * - 返回: { code, message, data: UserInfo }
 */
export const updateUserInfo = (data: { name?: string, email?: string, lang?: string }) => {
  return usePostFetch<ApiResponse<UserInfo>>(`/user/info_update`, data)
}
/**
 * 修改密码
 * - Method: POST
 * - Path: /user/pwd_update
 * - Body: { old_password, password, re_password }
 * - 返回: { code, message, data: { success } }
 */
export const updatePassword = (data: UpdatePasswordRequest) => {
  return usePostFetch<ApiResponse<{ success: boolean }>>(`/user/pwd_update`, data)
}
/**
 * 获取用户人格测试信息
 * - Method: GET
 * - Path: /user/personal_info
 * - 返回: { code, message, data: UserTestInfo }
 */
export const getUserTestInfo = () => {
  return useGetFetch<ApiResponse<UserTestInfo>>(`/user/personal_info`)
}

/**
 * 更新/保存用户人格测试信息
 * - Method: POST
 * - Path: /user/personal_info
 * - Body: { dominant_type?, dominant_types? }
 * - 返回: { code, message, data: UserTestInfo }
 */
export const postUserTestInfo = (data: { dominant_type?: number, dominant_types?: number[] }) => {
  return usePostFetch<ApiResponse<UserTestInfo>>(`/user/personal_info`, data)
}
