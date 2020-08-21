
// Programa para calcular a aposentadoria de uma pessoa.

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do
//homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no
// mínimo 85 anos na soma;

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95;
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85;

if (mulherPodeAposentar || homemPodeAposentar) {
    console.log(`${nome}, você pode se aposentar.`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar.`)
}