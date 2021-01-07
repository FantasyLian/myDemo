import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
import { judgeAPP, getToken } from '@/utils/auth'

const token = getToken()

function startLoading () {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
}

function endLoading () {
  Indicator.close()
}

const instance = axios.create({
  baseURL: '/api',
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    startLoading()
    
    token &&（config.headers.token = token）

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    endLoading()
    const { status } = response
    if (status === 200) {
      if (response.data.code === 600) {
        Toast({ message: '请重新登录', duration: 1500 })
        try {
          if (judgeAPP('ios')) {
            window.webkit.messageHandlers.gotoLoginPage.postMessage('')
          } else {
            window.wishtree.gotoLoginPage()
          }
          localStorage.clear()
        } catch (e) {
          console.warn(e)
        }
      } else if (response.data.code !== 200) {
        Toast({ message: response.data.msg, duration: 1500 })
      }
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance