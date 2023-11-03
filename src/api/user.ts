import { request } from '@/utils/request'
import { useUserStore } from '@/store'
import type { wxlogin } from '@/store/modules/user-store/types'

export function qqlogin() {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (res) => {
        request('/auth/wxLogin', {
          method: 'POST',
          data: { code: res.code },
        }).then((res) => {
          const userStore = useUserStore()
          const { data: { loginRes } } = res as { data: { loginRes: wxlogin } }
          console.log(loginRes.openid)
          userStore.setInfo(loginRes)
        }, (err) => {
          console.log(err)
        })
      },
    })
  })
}

export function wxResign(data: { nickname: string; avatar: string }) {
  return new Promise((resolve, reject) => {
    request('/user/resign', { method: 'POST', data }).then(((res) => {
      console.log(res)
    }))
  })
}

export function Justlogin() {
  return new Promise((resolve, reject) => {
    qqlogin().then((res) => {
      // @ts-expect-error
      resolve(res.data)
    }).catch((e) => {
      reject(e)
    })
  })
}

export function getUserInfo(data: any) {
  console.log(data)
  return request(`/get-user`, {
    method: 'Post',
    data,
  })
}

export function editUserInfo(data: any) {
  return request(`/api/edit-user`, {
    method: 'Post',
    data,
  })
}
