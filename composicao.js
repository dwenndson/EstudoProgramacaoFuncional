//conceito de curry que é de progamação funcional
//Além de lazy avaluations 

function composicao(...funcoes){
    return function(valor){
        return funcoes.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase();
}

function enfatizar(texto){
    return `${texto}!!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ');
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

console.log(exagerado('Teste de composicao de variaveis'))
console.log(exagerado('debbug'))