// FUNCTIONS

let addExpense = function(account,amount) {
    account.expense += amount;
}

let addIncome = function(account,amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.expense = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expense;
    let accountSummary = `The account for ${account.name} has $${balance}. Income: $${account.income}. Expenses: $${account.expense}.`
    console.log(accountSummary)
}

// APPLICATION

let myAccount = {
    name: 'Klaas',
    expense: 0,
    income: 0,
}
addIncome(myAccount,2000)
addExpense(myAccount,100)
addExpense(myAccount,260)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)


