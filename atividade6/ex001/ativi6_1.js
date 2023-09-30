//import PromptSync from "prompt-sync";
//const prompt = PromptSync()

const arrayValores = [10,12,15,35,40]

function somar(){
const soma = (arrayValores.reduce((acumulado,maisUm,) => acumulado + maisUm,0))
return soma   }
console.log("Soma dos Valores da lista", somar())

const mediaTotal = somar()/5


    const NumeroMaiorQueMedia = arrayValores. filter(num => num > mediaTotal)
    console.log("Numeros maiores que a media", NumeroMaiorQueMedia)

    const MenorQueVinte = arrayValores. filter(num => num < 20)
    console.log ("Numeros menores que vinte", MenorQueVinte)

function MenorValor(...lista){
    let menor = lista[0]
    for (const Menor of lista) {
        if (menor > Menor){
            menor = Menor
        }
    }
    return menor
}
console.log("Menor valor da lista:",MenorValor(...arrayValores))

/*function MenorValor() { 

 const Menor = arrayValores.reduce((ref,proximo) => {if (ref < proximo) {
ref = proximo
    return ref
}
else{
    ref=proximo
    return ref
}},0)
return Menor
}

console.log(MenorValor())*/
