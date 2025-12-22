<template>
  <div class="uno-container uno-mx-auto uno-p-4">
    <h1 class="uno-text-2xl uno-font-bold uno-mb-4">Alova 使用示例</h1>
    
    <!-- 获取数据示例 -->
    <div class="uno-mb-6">
      <h2 class="uno-text-xl uno-font-semibold uno-mb-2">用户信息</h2>
      <div v-if="loading" class="uno-text-gray-500">加载中...</div>
      <div v-else-if="error" class="uno-text-red-500">错误: {{ error.message }}</div>
      <div v-else-if="userData" class="uno-bg-gray-100 uno-p-4 uno-rounded">
        <p>姓名: {{ userData.name }}</p>
        <p>邮箱: {{ userData.email }}</p>
      </div>
    </div>

    <!-- 创建用户示例 -->
    <div class="uno-mb-6">
      <h2 class="uno-text-xl uno-font-semibold uno-mb-2">创建用户</h2>
      <form @submit.prevent="createUser" class="uno-space-y-2">
        <input 
          v-model="newUser.name" 
          placeholder="姓名" 
          class="uno-w-full uno-p-2 uno-border uno-rounded"
          required
        />
        <input 
          v-model="newUser.email" 
          placeholder="邮箱" 
          type="email" 
          class="uno-w-full uno-p-2 uno-border uno-rounded"
          required
        />
        <button 
          type="submit" 
          :disabled="creating"
          class="uno-px-4 uno-py-2 uno-bg-blue-500 uno-text-white uno-rounded hover:uno-bg-blue-600 disabled:uno-opacity-50"
        >
          {{ creating ? '创建中...' : '创建用户' }}
        </button>
      </form>
    </div>

    <!-- 手动刷新数据 -->
    <button 
      @click="refreshUser"
      class="uno-px-4 uno-py-2 uno-bg-green-500 uno-text-white uno-rounded hover:uno-bg-green-600"
    >
      刷新用户数据
    </button>
  </div>
</template>

<script setup lang="ts">
// 使用自动导入的 useGet 和 usePost

interface User {
  id: number
  name: string
  email: string
}

interface CreateUserRequest {
  name: string
  email: string
}

// 获取用户信息
const { 
  loading, 
  data: userData, 
  error, 
  onSuccess,
  onError 
} = useGet<User>('/api/user/1')

// 创建用户
const newUser = ref<CreateUserRequest>({
  name: '',
  email: ''
})

const { 
  loading: creating, 
  onSuccess: onCreateSuccess, 
  onError: onCreateError 
} = usePost<User, CreateUserRequest>('/api/users')

// 监听请求成功
onSuccess((data) => {
  console.log('用户数据加载成功:', data)
})

onError((err) => {
  console.error('用户数据加载失败:', err)
})

onCreateSuccess((data) => {
  console.log('用户创建成功:', data)
  // 重置表单
  newUser.value = { name: '', email: '' }
  // 可以在这里刷新用户列表等
})

onCreateError((err) => {
  console.error('用户创建失败:', err)
  alert('创建用户失败，请重试')
})

// 创建用户方法
const createUser = () => {
  if (newUser.value.name && newUser.value.email) {
    usePost('/api/users', newUser.value)
  }
}

// 手动刷新数据
const refreshUser = () => {
  // 重新发送请求
  userData.value = null
  // useGet 会自动重新发送请求
}
</script>