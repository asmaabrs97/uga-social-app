import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
    isLoading: false,
    error: null
  }),

  actions: {
    async getAllPosts() {
      try {
        this.isLoading = true
        this.error = null
        
        const { data, error } = await useFetch('/api/get-all-posts', {
          method: 'GET'
        })

        if (error.value) {
          console.error('Error fetching posts:', error.value)
          this.error = error.value
          return []
        }

        if (data.value) {
          console.log(`Loaded ${data.value.length} posts`)
          this.posts = data.value
          return data.value
        }

        return []
      } catch (err) {
        console.error('Error in getAllPosts:', err)
        this.error = err
        return []
      } finally {
        this.isLoading = false
      }
    }
  },
})