export const getToken = (tokenName: string) =>  localStorage.getItem(tokenName)
export const setToken = (tokenName: string,value: string) => localStorage.setItem(tokenName,value)