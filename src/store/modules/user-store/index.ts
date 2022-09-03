import {defineStore} from 'pinia'
import UserState from './types'

export const useUserStore = defineStore('user', {
	state: (): UserState => ({
		openid: undefined,
		session_key: undefined,
		unionId: undefined,
		errcode: undefined,
		errmsg: undefined
	}),
	getters: {
		userProfile(state: UserState): UserState {
			return {...state}
		},
		isLogin(): Boolean {
			return typeof this.unionId !== 'undefined'
		}
	},
	actions: {
		switchRoles() {
			return new Promise((resolve) => {
				this.role = this.isAdmin ? 'admin' : 'user'
				resolve(this.isAdmin)
			})
		},
		// 设置用户的信息
		setInfo(partial: Partial<UserState>) {
			this.$patch(partial)
		},
		// 重置用户信息
		resetInfo() {
			this.$reset()
		},
		// 获取用户信息
		async info() {
		
		}
	}
})
