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
        const token = useCookie('token')
        const loginRes = res.data.value;
        userInfo.value = loginRes.data;
        token.value = loginRes.data.token;
        console.log(userInfo.value, token.value)
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



  // 退出登录
  const logout = () => {
    const token = useCookie('token');
    token.value = null;
    userInfo.value = undefined;

    console.log('退出登录')
    
    // 如果需要调用后端登出接口，可以在这里添加
    // await userApi.logout();
  };

  return {
    userInfo,
    login,
    logout,
    fetchUserInfo,
    changePassword,
    getUserTestInfo,

  };
}, {
  persist: {
  }
});
