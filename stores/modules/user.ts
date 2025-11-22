import { defineStore } from 'pinia'

// Define a user store
export const useUserStore = defineStore('user', {
  // State
  state: () => ({
    user: null as {
      id: string
      name: string
      email: string
      role: string
    } | null,
    isLoading: false,
    error: null as string | null,
    lastUpdated: null as Date | null
  }),

  // Getters
  getters: {
    isAuthenticated: (state) => !!state.user,
    isAdmin: (state) => state.user?.role === 'admin',
    userInitials: (state) => {
      if (!state.user?.name) return ''
      return state.user.name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
    }
  },

  // Actions
  actions: {
    // Simulate user login
    async login(email: string, password: string) {
      this.isLoading = true
      this.error = null

      try {
        // In a real app, this would be an API call
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock successful login
        this.user = {
          id: '1',
          name: 'John Doe',
          email,
          role: email.includes('admin') ? 'admin' : 'user'
        }
        this.lastUpdated = new Date()
        
        return true
      } catch (err) {
        this.error = 'Failed to login. Please try again.'
        return false
      } finally {
        this.isLoading = false
      }
    },

    // Logout user
    logout() {
      this.user = null
      this.lastUpdated = new Date()
    },

    // Update user profile
    async updateProfile(updates: Partial<{name: string, email: string}>) {
      if (!this.user) return false
      
      this.isLoading = true
      this.error = null

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500))
        
        this.user = {
          ...this.user,
          ...updates
        }
        this.lastUpdated = new Date()
        
        return true
      } catch (err) {
        this.error = 'Failed to update profile.'
        return false
      } finally {
        this.isLoading = false
      }
    },

    // Clear any error messages
    clearError() {
      this.error = null
    }
  },
})