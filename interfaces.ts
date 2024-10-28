// Classe base Conta
class Conta {
    numeroDaconta: number;
    saldo: number = 0;

    constructor(numeroDaconta: number) {
        this.numeroDaconta = numeroDaconta;
    }
}

// Classe derivada ContaSalario
class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// Interface ITransacional
interface ITransacional {
    transferir(valor: number, destinatario: Conta): boolean;
    taxaTransferencia: number;
}

// Classe derivada ContaCorrente que implementa a interface ITransacional
class ContaCorrente extends Conta implements ITransacional {
    taxaTransferencia: number = 0;

    transferir(valor: number, destinatario: Conta): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor + this.taxaTransferencia;
            destinatario.saldo += valor;
            return true;
        } else {
            console.log('Saldo insuficiente para transferência');
            return false;
        }
    }
}

// Criando o banco
class Banco {
    private contas: Conta[] = []; // Propriedade privada para armazenar as contas

    // Método para adicionar uma conta ao banco
    addConta(conta: Conta): void {
        this.contas.push(conta);
    }

    // Método para listar todas as contas do banco
    listarContas(): void {
        this.contas.forEach(conta => {
            console.log(`Conta: ${conta.numeroDaconta}, Saldo: ${conta.saldo}`);
        });
    }

    // Método estático para gerar um número de conta
    static gerarNumeroDeConta(): string {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }
}

// Usando as classes
const meuBanco = new Banco();

// Gerando números de conta
const numeroConta1 = Banco.gerarNumeroDeConta();
const numeroConta2 = Banco.gerarNumeroDeConta();

// Adicionando contas ao banco
const contaSalario1 = new ContaSalario(parseInt(numeroConta1, 36));
const contaCorrente1 = new ContaCorrente(parseInt(numeroConta2, 36));
meuBanco.addConta(contaSalario1);
meuBanco.addConta(contaCorrente1);

// Listando todas as contas no banco
console.log('Lista de Contas:');
meuBanco.listarContas();

// Operações nas contas
contaSalario1.depositar(500);
contaCorrente1.depositar(1000);
contaCorrente1.transferir(200, contaSalario1);

// Verificando saldos
console.log(`Saldo final da conta ${contaSalario1.numeroDaconta}: ${contaSalario1.saldo}`);
console.log(`Saldo final da conta ${contaCorrente1.numeroDaconta}: ${contaCorrente1.saldo}`);
