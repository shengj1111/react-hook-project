// 登录界面的reducer
import type { Actions } from '@/types/loginTypes'
import loginStatus from './index'

export default function loginReducer(preState = {...loginStatus.state}, action: Actions) {
  let newState = JSON.parse(JSON.stringify(preState))
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
  return newState
}
