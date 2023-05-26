class BankAccount{
    constructor(accountHolder,accountNumber,balance){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getAccountNumber(){
        
        console.log(this.accountNumber);
    }
    getAccountHolder(){
        console.log(this.accountHolder);
    }
    getBalance(){
        console.log(this.balance);
    }
    deposit(amount){
        this.balance += amount;
        console.log(`You have deposited ${amount}. Your bank balance is ${this.balance}`)
    }
    withdraw(amount){
        //if the balance is less than the amount to withdraw 
        //then insufficient balance
        if(this.balance<amount){
            console.log("Insufficient balance");
          return; 
        }
        
            this.balance -= amount;
            console.log(`You have withdrawn ${amount}. Your bank balance is ${this.balance}`)
       
    }
}

//SavingsAccount inherits properties of BankAccount while including interest rate and calculate interest
class SavingsAccount extends BankAccount{
    constructor(accountHolder,accountNumber,balance,interestRate) {
        super(accountHolder,accountNumber,balance,interestRate)
        this.interestRate = interestRate;
   
    }
    calculateInterest(){
        let interest = this.interestRate * this.balance;
       console.log(interest); 
    }
}

//checking account inherits properties of BankAccount while including overdraft limit
class CheckingAccount extends BankAccount{
    constructor(accountHolder,accountNumber,balance,overdraftLimit) {
        super(accountHolder,accountNumber,balance,overdraftLimit);
        this.overdraftLimit = overdraftLimit;
        
    }
    withdraw(amount){
        let total = this.overdraftLimit+this.balance;
        if(this.balance>amount){
            console.log(`Your bank balance is ${this.balance-amount}. Overdraft limit is ${this.overdraftLimit}`);
        }
        else if(this.balance<amount && total>amount){
            let overdraftlm = total-amount;
            console.log(`You have withdrawn amount of ${amount}. Overdraft limit is ${overdraftlm}`)
        }
        else if((this.balance+this.overdraftLimit)<amount){
            console.log("You have exhausted your overdraft limit")
        }
        else{
            console.log("unable to withdraw")
        }
    }
}
//now if John withdraws 1001 given he has 1000 which is smaller amount
//he will withdraw overdraft of 1 bob while limit becomes 299 of overdraft
const customer = new CheckingAccount("John",3455,1000,300);
customer.withdraw(1001);