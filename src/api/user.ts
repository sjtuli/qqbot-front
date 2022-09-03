import {request} from '@/utils/request'
import {useUserStore} from '@/store'
import {readonly} from 'vue'
import {wxlogin} from '@/store/modules/user-store/types'


export const qqlogin = () => {
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
			success: (res) => {
				request('/auth/wxLogin', {
					method: 'POST',
					data: {code: res.code}
				}).then(res => {
					let userStore = useUserStore()
					let {data: {loginRes}} = res as { data: { loginRes: wxlogin } }
					console.log(loginRes.openid)
					userStore.setInfo(loginRes)
				}, (err) => {
					console.log(err)
				})
			}
		})
	})
}

export const wxResign = (data: { nickname: string, avatar: string }) => {
	return new Promise((resolve, reject) => {
		request('/user/resign', {method: 'POST', data: data}).then((res => {
			console.log(res)
		}))
	})
}

export const Justlogin = () => {
	return new Promise((resolve, reject) => {
		qqlogin().then((res) => {
			// @ts-ignore
			resolve(res.data)
		}).catch(e => {
			reject(e)
		})
	})
}


export const getUserInfo = (data: any) => {
	console.log(data)
	return request(`/get-user`, {
		method: 'Post',
		data: data
	})
}

export const editUserInfo = (data: any) => {
	return request(`/api/edit-user`, {
		method: 'Post',
		data: data
	})
}
