import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import { useUserStore } from './modules/user-store'

const pinia = createPinia()
pinia.use(
  createPersistedState({
    storage: {
      getItem(key: string): string | null {
        return uni.getStorageSync(key)
      },
      setItem(key: string, value: string) {
        uni.setStorageSync(key, value)
      },
      removeItem(key: string) {
        uni.removeStorage({ key })
      },
    },
  }),
)

export { useUserStore }
export default pinia
