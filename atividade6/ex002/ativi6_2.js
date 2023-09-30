const Valores = [5,12,20,7,9]

function Primeiro(...Valores){
const [PrimeiroValor,...restantedeValor] = Valores
return PrimeiroValor
}

function Restante(Valores){
const [Primeiro,...restantedeValor] = Valores
return restantedeValor
}

console.log(Primeiro(Valores))
console.log(Primeiro(restantedeValor))