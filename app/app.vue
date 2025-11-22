<template>
  <div class="container max-w-5xl mx-auto px-4 py-8 font-sans">
    <h1 class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-dark mb-8">Pinia Store Examples in Nuxt 4</h1>
    
    <!-- Counter Store Example with @nuxt/ui components -->
    <UCard class="mb-12">
      <UCardHeader>
        <h2 class="text-2xl font-bold text-dark">Counter Store (Composition API)</h2>
      </UCardHeader>
      <UCardContent>
        <div class="mb-4 p-4 bg-gray-50 rounded-md">
          <h3 class="text-xl font-semibold text-primary mb-2">{{ counterStore.titleWithCount }}</h3>
          <p class="text-dark mb-1">Current Count: {{ counterStore.count }}</p>
          <p class="text-dark">Double Count: {{ counterStore.doubleCount }}</p>
        </div>
        <div class="mb-4 flex flex-wrap gap-2">
          <UButton 
            @click="counterStore.increment"
            color="primary"
            :rounded="true"
          >
            Increment
          </UButton>
          <UButton 
            @click="counterStore.decrement"
            color="secondary"
            :rounded="true"
          >
            Decrement
          </UButton>
          <UButton 
            @click="counterStore.reset"
            color="default"
            :rounded="true"
          >
            Reset
          </UButton>
        </div>
        <div class="flex flex-wrap gap-2">
          <UInput 
            v-model="newTitle" 
            placeholder="Change title" 
            @keyup.enter="changeTitle"
            :rounded="true"
          />
          <UButton 
            @click="changeTitle"
            color="accent"
            :rounded="true"
          >
            Update Title
          </UButton>
        </div>
      </UCardContent>
    </UCard>

    <!-- User Store Example with @nuxt/ui components -->
    <UCard class="mb-12">
      <UCardHeader>
        <h2 class="text-2xl font-bold text-dark">User Store (Options API)</h2>
      </UCardHeader>
      <UCardContent>
        
        <div v-if="!userStore.isAuthenticated">
          <h3 class="text-xl font-semibold text-dark mb-4">Login Form</h3>
          <div class="mb-4 space-y-4">
            <UFormGroup label="Email (try admin@example.com)">
              <UInput 
                v-model="loginEmail" 
                type="email" 
                :rounded="true"
              />
            </UFormGroup>
            <UFormGroup label="Password">
              <UInput 
                v-model="loginPassword" 
                type="password" 
                :rounded="true"
              />
            </UFormGroup>
            <UButton 
              @click="login" 
              :disabled="userStore.isLoading"
              color="primary"
              :rounded="true"
              :loading="userStore.isLoading"
            >
              Login
            </UButton>
          </div>
          <div v-if="userStore.error" class="mb-4">
            <UAlert 
              type="error" 
              title="Error"
              :rounded="true"
            >
              {{ userStore.error }}
              <template #actions>
                <UButton @click="userStore.clearError" size="sm" :rounded="true">
                  Clear
                </UButton>
              </template>
            </UAlert>
          </div>
        </div>
        
        <div v-else>
          <UCard class="mb-6 bg-blue-50 border-none">
            <UCardContent>
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div>
                  <h3 class="text-xl font-semibold text-dark">User Profile</h3>
                </div>
                <UAvatar 
                  :size="64"
                  class="bg-primary text-white text-2xl font-bold"
                >
                  {{ userStore.userInitials }}
                </UAvatar>
                <div>
                  <p class="text-dark mb-1"><strong>Name:</strong> {{ userStore.user?.name }}</p>
                  <p class="text-dark mb-1"><strong>Email:</strong> {{ userStore.user?.email }}</p>
                  <p class="text-dark mb-1"><strong>Role:</strong> {{ userStore.user?.role }}</p>
                  <p class="text-dark mb-1">
                    <strong>Admin Access:</strong> 
                    <span :class="userStore.isAdmin ? 'text-success' : 'text-warning'">
                      {{ userStore.isAdmin ? 'Yes' : 'No' }}
                    </span>
                  </p>
                  <p v-if="userStore.lastUpdated" class="text-dark text-sm text-gray-600">
                    Last Updated: {{ userStore.lastUpdated.toLocaleString() }}
                  </p>
                </div>
              </div>
            </UCardContent>
          </UCard>
          
          <div class="mb-4 space-y-4">
            <h4 class="text-lg font-medium text-dark">Update Profile</h4>
            <UFormGroup label="New Name">
              <UInput 
                v-model="updateName" 
                :rounded="true"
              />
            </UFormGroup>
            <UButton 
              @click="updateProfile" 
              :disabled="userStore.isLoading"
              color="secondary"
              :rounded="true"
              :loading="userStore.isLoading"
            >
              Update Profile
            </UButton>
          </div>
          
          <UButton 
            @click="userStore.logout"
            color="danger"
            :rounded="true"
          >
            Logout
          </UButton>
        </div>
      </UCardContent>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/modules/counter'
import { useUserStore } from '../stores/modules/user'

// Initialize stores
const counterStore = useCounterStore()
const userStore = useUserStore()

// Form state
const newTitle = ref('')
const loginEmail = ref('')
const loginPassword = ref('')
const updateName = ref('')

// Methods
function changeTitle() {
  if (newTitle.value.trim()) {
    counterStore.setTitle(newTitle.value)
    newTitle.value = ''
  }
}

async function login() {
  if (loginEmail.value.trim() && loginPassword.value.trim()) {
    const success = await userStore.login(loginEmail.value, loginPassword.value)
    if (success) {
      loginEmail.value = ''
      loginPassword.value = ''
      updateName.value = userStore.user?.name || ''
    }
  }
}

async function updateProfile() {
  if (updateName.value.trim() && userStore.user) {
    await userStore.updateProfile({ name: updateName.value })
  }
}
</script>

<!-- UnoCSS utilities are used directly in the template -->
