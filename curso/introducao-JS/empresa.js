// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
// Os dados a serem armazenados são:
// Nome: Rocketseat
// Cor: Roxo
//Foco: Programação
// Endereço:
    // Rua: Rua Guilherme Gembala
    //Número: 260

const empresa = {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }

console.log(`A ${empresa.nome} está localizada na ${empresa.endereco.rua}, número ${empresa.endereco.numero}.`)
