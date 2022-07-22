const Livros = require ('./livros')
const menorValor = require ('./menorValor')

for (let atual = 0; atual < Livros.length; atual++ ){
    let menor = menorValor(Livros, atual)

    let livroAtual = Livros[atual]; 
    let livroMenorPreco = Livros[menor];
    

    Livros[atual] = livroMenorPreco
    Livros[menor] = livroAtual

}

console.log(Livros)