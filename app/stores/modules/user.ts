import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref<{id: string; name: string; email: string; role: string} | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const lastUpdated = ref<Date | null>(null);

  // Getters
  const isAuthenticated = computed(() => !!user.value);
  const isAdmin = computed(() => user.value?.role === 'admin');
  const userInitials = computed(() => {
    if (!user.value?.name) return '';
    return user.value.name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  });

  // Actions
  async function login(email: string, password: string) {
    isLoading.value = true;
    error.value = null;

    try {
      // In a real app, this would be an API call
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      user.value = {
        id: '1',
        name: 'John Doe',
        email,
        role: email.includes('admin') ? 'admin' : 'user'
      };
      lastUpdated.value = new Date();
      
      return true;
    } catch (err) {
      error.value = 'Failed to login. Please try again.';
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  function logout() {
    user.value = null;
    lastUpdated.value = new Date();
  }

  async function updateProfile(updates: Partial<{name: string, email: string}>) {
    if (!user.value) return false;
    
    isLoading.value = true;
    error.value = null;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      user.value = {
        ...user.value,
        ...updates
      };
      lastUpdated.value = new Date();
      
      return true;
    } catch (err) {
      error.value = 'Failed to update profile.';
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  function clearError() {
    error.value = null;
  }

  return {
    // State
    user,
    isLoading,
    error,
    lastUpdated,
    // Getters
    isAuthenticated,
    isAdmin,
    userInitials,
    // Actions
    login,
    logout,
    updateProfile,
    clearError
  };
});
