import { useUserStore } from '@/store'

export const baseUrl = 'http://localhost:12345'

export function request(url: string, obj: {
  method: any
  data: Object
}) {
  return new Promise((resolve, reject) => {
    const userStore = useUserStore()
    uni.request({
      url: `${baseUrl}${url}`,
      data: obj.data,
      method: obj.method,
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Token': userStore.token,
      },
      timeout: 60000,
      success(res) {
        console.log(res, '获取返回信息')
        if (res.data)
          resolve(res.data)
      },
      fail(err) {
        console.log(err, '失败')
        uni.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 2000,
        })
        reject(err)
      },
    })
  })
}
