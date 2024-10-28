class BankAccount {
    private accountNumber: string;   // Propriedade privada
    protected balance: number;       // Propriedade protegida

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Método público para obter o número da conta
    public getAccountNumber(): string {
        return this.accountNumber;
    }

    // Método protegido para obter o saldo da conta
    protected getBalance(): number {
        return this.balance;
    }

    // Método público para depositar dinheiro
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Depositado: ${amount}. Saldo atual: ${this.balance}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    // Método público para sacar dinheiro
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Sacado: ${amount}. Saldo atual: ${this.balance}`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }
}
class SavingsAccount extends BankAccount {
    private interestRate: number;  // Propriedade privada para a taxa de juros

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);  // Chama o construtor da classe base
        this.interestRate = interestRate;
    }

    // Método público para aplicar juros ao saldo da conta
    public applyInterest(): void {
        const interest = this.balance * this.interestRate / 100;
        this.deposit(interest);
        console.log(`Juros aplicados: ${interest}. Saldo atual: ${this.balance}`);
    }
}
class Bank {
    private accounts: BankAccount[] = [];  // Propriedade privada para armazenar contas

    // Método estático para gerar um número de conta único
    public static generateAccountNumber(): string {
        return 'ACCT' + Math.floor(Math.random() * 10000);
    }

    // Método público para adicionar uma nova conta ao banco
    public addAccount(account: BankAccount): void {
        this.accounts.push(account);
        console.log(`Conta adicionada: ${account.getAccountNumber()}`);
    }

    // Método público para listar todas as contas no banco
    public listAccounts(): void {
        this.accounts.forEach(account => {
            console.log(`Conta: ${account.getAccountNumber()}, Saldo: ${account['balance']}`);
        });
    }
}
// Criação do banco
const myBank = new Bank();

// Gerando números de conta
const accountNumber1 = Bank.generateAccountNumber();
const accountNumber2 = Bank.generateAccountNumber();

// Adicionando contas ao banco
const savingsAccount1 = new SavingsAccount(accountNumber1, 1000, 5);  // 5% de taxa de juros
const savingsAccount2 = new SavingsAccount(accountNumber2, 2000, 3);  // 3% de taxa de juros

myBank.addAccount(savingsAccount1);
myBank.addAccount(savingsAccount2);

// Listando todas as contas no banco
console.log('Lista de Contas:');
myBank.listAccounts();

// Operações nas contas
savingsAccount1.deposit(500);
savingsAccount1.withdraw(200);
savingsAccount1.applyInterest();

// Verificando saldo
console.log(`Saldo final da conta ${savingsAccount1.getAccountNumber()}: $ ${savingsAccount1.getBalance()}`);