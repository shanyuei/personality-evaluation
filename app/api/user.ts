import { useGetFetch, usePostFetch } from "~/composables/useApi";



// 登录
export const login = (data: { email: string, password: string }) => {
  return usePostFetch<any>(`/user/signin`, data)
  
}
// 获取用户信息
export const getUserInfo = () => {
  return useGetFetch<any>(`/user/info`)
}
// 修改密码
export const updatePassword = (data: { old_password: string, new_password: string ,re_password: string }) => {
  return usePostFetch<any>(`/user/update_password`, data)
}
// 用户人格测试信息
export const getUserTestInfo = () => {
  return useGetFetch<any>(`/user/personal_info`)
}