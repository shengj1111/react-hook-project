const initState = {
  num:20
}

const reducer = (state =initState) => {
  let newState = JSON.parse(JSON.stringify(state))

  return newState
}

export default reducer