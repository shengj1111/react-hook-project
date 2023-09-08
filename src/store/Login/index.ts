// 登录界面的action
import type { Actions, StateType } from '@/types/loginTypes'
const store: LoginStore = {
  // 初始状态数据
  state: {
    num: 0,
  },
  // 方法
  actions: {
    add(newState: StateType, action: Actions) {
      newState.num++
    },
  },
  // 方法名字集合
  actionsName: {},
}

let actionsName: ActionsNameType = {}
for (let key in store.actions) {
  actionsName[key] = key
}

store.actionsName = actionsName

export default store
