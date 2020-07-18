export const totalBalance = (transactions) =>
  transactions.reduce((acc, { amount }) => acc + amount, 0).toFixed(2)

export const income = (transactions) => {
  return transactions
    .reduce((acc, { amount }) => (amount > 0 ? acc + amount : acc), 0)
    .toFixed(2)
}

export const expense = (transactions) => {
  return (
    transactions.reduce(
      (acc, { amount }) => (amount < 0 ? acc + amount : acc),
      0,
    ) * -1
  ).toFixed(2)
}

export const transactionCalculate = (transactions) => {
  return transactions.reduce(
    ({ income, expense }, { amount }, i) => {
      if (amount >= 0) {
        income = income + amount
      } else {
        expense = expense - amount
      }

      if (transactions.length - 1 === i) {
        income = income.toFixed(2)
        expense = expense.toFixed(2)
      }

      return { income, expense }
    },
    { income: 0, expense: 0 },
  )
}
