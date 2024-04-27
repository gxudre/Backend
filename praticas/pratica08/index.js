const readline = require("readline-sync");
const controlador = require("./controlador");
const { Contato } = require("./modelo");

const menu = () => {
    console.log("1. Adicionar Contato");
    console.log("2. Buscar Contato");
    console.log("3. Atualizar Contato");
    console.log("4. Remover Contato");
    console.log("5. Sair");
};

const escolherOpcao = (opcao) => {
    switch(opcao){
        
        case "1":
            let nome =  readline.question("Digite o nome do contato: ");
            let email = readline.question("Digite o email do contato: ");
            let telefone = readline.question("Digite o telefone do contato: ");
            controlador.adicionarContato(nome, email, telefone);
            break;
        
        case "2":
            let nome2 =  readline.question("Digite o nome do contato: ");
            let contato = controlador.buscarContato(nome2);
            if(contato){
                console.log(`Nome: ${Contato.nome}`);
                console.log(`Email: ${Contato.email}`);
                console.log(`Telefone: ${Contato.telefone}`);
            }else{
                console.log('contato não encontrado');
            }
            break;
        
        case "3":
            let nome3 =  readline.question("Digite o nome do contato: ");
            let email3 = readline.question("Digite o email do contato: ");
            let telefone3 = readline.question("Digite o telefone do contato: ");
            controlador.atualizarContato(nome3, email3, telefone3);
            break;
        
        case "4":
            let nome4 =  readline.question("Digite o nome do contato: ");
            controlador.removerContato(nome4);
            break;
          
        case "5":
            process.exit(0);
           
        default:
            console.log("opção invalida!")
            
    };
    readline.question("Pressione ENTER para contionuar.")
};

function main() {
    while (true) {
      menu();
      const opcao = readline.question("Entre com uma opcao: ");
      escolherOpcao(opcao);
    }
}
  
main();