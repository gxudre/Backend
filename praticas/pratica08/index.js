const readline = require("readline-sync");
const controlador = require("./controlador");

const menu = () => {
    console.log("AGENDA");
    console.log("1. Adicionar Contato");
    console.log("2. Buscar Contato");
    console.log("3. Atualizar Contato");
    console.log("4. Remover Contato");
    console.log("5. Sair");
    console.log("escolha a opção e pressione ENTER para prosseguir");
};

const escolherOpcao = async (opcao) => {
    switch(opcao){
        
        case "1":
            let nome =  readline.question("Digite o nome do contato: ");
            let email = readline.question("Digite o email do contato: ");
            let telefone = readline.question("Digite o telefone do contato: ");
            const contato1 = await controlador.adicionarContato(nome, email, telefone);
            console.log("Contato adicionado!" , contato1)
            break;
        
        case "2":
            let nome2 =  readline.question("Digite o nome do contato: ");
            let contato = await controlador.buscarContato(nome2);
            if(contato){
                console.log(`Nome: ${contato.nome}`);
                console.log(`Email: ${contato.email}`);
                console.log(`Telefone: ${contato.telefone}`);
            }else{
                console.log('contato não encontrado');
            }
            break;
        
        case "3":
            let nome3 =  readline.question("Digite o nome do contato: ");
            let email3 = readline.question("Digite o email do contato: ");
            let telefone3 = readline.question("Digite o telefone do contato: ");
            await controlador.atualizarContato(nome3, email3, telefone3);
            break;
        
        case "4":
            let nome4 =  readline.question("Digite o nome do contato: ");
            const contato4 = await controlador.removerContato(nome4);
            console.log("Contato removido!", contato4);
            break;
          
        case "5":
            process.exit(0);
           
        default:
            console.log("opção invalida. Tente novamente!")
            
    };
    readline.question("Pressione ENTER para contionuar.")
};

const main = async () => {
    while (true) {
      menu();
      const opcao = readline.question("Entre com uma opcao: ");
      await escolherOpcao(opcao);
    }
}
  
main();