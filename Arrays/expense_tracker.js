const account = {
    name: 'Klaas',
    expenses: [],
    income: [],
    addExpense: function(description,amount) {
        const expense = {
            description: description,
            amount: amount,
        }
        this.expenses.push(expense)
    },
    addIncome: function(description,amount) {
        this.income.push({
            description: description,
            amount: amount,
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        let balance = 0;
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome += income.amount
        })
        balance = totalIncome - totalExpenses;
        return `${this.name} has a balance of $${balance}: ${totalExpenses} in expenses and ${totalIncome} in income`
    },
}

account.addExpense('coffee',2.5)
account.addExpense('rent',700)
account.addIncome('salary',500)
console.log(account.getAccountSummary())
