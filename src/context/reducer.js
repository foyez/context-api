import { Actions } from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_TRANSACTION:
      const transaction = {
        id: state.transactions.length + 1,
        ...action.payload,
      }

      return {
        ...state,
        transactions: [transaction, ...state.transactions],
      }
    case Actions.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ id }) => id !== action.payload,
        ),
      }
    default:
      return state
  }
}
