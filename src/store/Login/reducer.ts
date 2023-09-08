// 登录界面的reducer
import type { Actions } from '@/types/loginTypes'
import loginStatus from './index'

export default function loginReducer(
  preState = { ...loginStatus.state },
  action: Actions,
) {
  let newState = JSON.parse(JSON.stringify(preState))
  for (let key in loginStatus.actionsName) {
    if (action.type == loginStatus.actionsName[key]) {
      loginStatus.actions[loginStatus.actionsName[key]](newState, action)
      break
    }
  }
  return newState
}
