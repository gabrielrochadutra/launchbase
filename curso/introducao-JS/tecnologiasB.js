// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna
// SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean
// true/false.

const usuarios =
[
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
]

function checaSeUsuarioUsaCSS(usuario) {
    const tecnologias = usuario.tecnologias
    for(let i=0; i < tecnologias.length; i++){
        if(tecnologias[i]=="CSS"){
            return true
        }
    }
    return false
  }

//Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha
//com CSS utilizando a função construída acima, se SIM, imprima em tela as informações
//do usuário:

    for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
  
    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
    else{
        console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)
    }
}