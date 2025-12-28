import { login } from './../../api/user';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import * as userApi from '~/api/user';
import type { UserInfo, LoginResponse, UpdatePasswordRequest } from '~/types/User';

export const useUserStore = defineStore('user', () => {

  const userInfo = ref<UserInfo>()

  // 登录
  const login = (data: { email: string, password: string }) => {
    return new Promise<LoginResponse>((resolve, reject) => {
      userApi.login(data).then(async (res) => {
        const loginRes = res.data.value;
        userInfo.value = loginRes.data;
        await fetchUserInfo()
        resolve(loginRes.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  // 获取用户信息
  const fetchUserInfo = () => {
    return new Promise<UserInfo>((resolve, reject) => {
      userApi.getUserInfo().then(res => {
        userInfo.value = {
          ...res.data.value.data
        };
        resolve(userInfo.value!)
      }).catch(err => {
        reject(err)
      })
    })
  }
  // 修改密码
  const changePassword = (data: UpdatePasswordRequest) => {
    return userApi.updatePassword(data)
  }
  // 获取用户人格测试信息
  const getUserTestInfo = () => {
    return userApi.getUserTestInfo()
  }



  return {
    login,
    fetchUserInfo,
    changePassword,
    getUserTestInfo,

  };
}, {
  persist: {
  }
});
