type StoreType = ReturnType<typeof import('@/store').getState>
// store接口
interface ActionsNameType {
  [key: string]: string
}

interface ActionsType {
  [key: string]: any
}

interface LoginStore {
  state: any
  actions: ActionsType
  actionsName: ActionsNameType
}
