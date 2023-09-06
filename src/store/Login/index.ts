// 登录界面的action
import type { Actions,StateType } from '@/types/loginTypes'
export default {
  // 初始状态数据
  state: {
    num: 0
  },
  // 方法
  actions:{
    add(newState:StateType,action:Actions){
      newState.num++
    }
  },
  // 方法名字集合
  actionsName:{
    add: 'add'
  }
}