abstract class User {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    
    abstract getMoney(): number
}

class Lender extends User {
    money: number;
    borrower?: Borrower
    lendAmount: number = 0
    constructor(firstName: string, lastName: string, money: number) {
        super(firstName, lastName)
        this.money = money
    }

    getMoney(): number {
        return this.money
    }

    lend(br: Borrower, amount: number): boolean {
        if (this.money < amount || this.borrower != null) {
          return false
        } 
        this.lendAmount = amount
        this.borrower = br
        this.money -= amount

        return true
    }

    getMoneyBack():boolean {
        if (this.borrower != null && !this.borrower.returnMoney(this.lendAmount)) {
            return false
        }

        this.money += this.lendAmount
        this.lendAmount = 0
        this.borrower = undefined

        return true
    }
}

class Borrower extends User {
    cash: number;
    lender?: Lender
    constructor(firstName: string, lastName: string, cash: number) {
        super(firstName, lastName)
        this.cash = cash
    }

    getMoney(): number {
        return this.cash
    }

    borrow(lender: Lender, amount: number): boolean {
        if (this.lender != null || !lender.lend(this, amount)) {
            return false
        }

        this.lender = lender
        this.cash += amount

        return true
    }

    returnMoney(amount: number): boolean {
        if (this.lender == null || this.cash < amount) {
            return false
        }
        this.cash -= amount
        this.lender = undefined
        return true
    }
}

const john = new Lender('John', 'Smith', 1000)
const peter = new Borrower('Peter', 'Parker', 100)

console.log({john: john.getMoney(), peter: peter.getMoney()})
peter.borrow(john, 100)
console.log({john: john.getMoney(), peter: peter.getMoney()})
john.getMoneyBack()
console.log({john: john.getMoney(), peter: peter.getMoney()})