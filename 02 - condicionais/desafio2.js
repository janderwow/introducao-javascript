const tipocombustivel = "etanol";

const pCombustivel = 6.66;
const pEtanol = 4.59;

const kmPorLitro = 11;

const distanciaViagem = 100;

const litrosConsumidos = distanciaViagem / kmPorLitro;

//const valorGasto = litrosConsumidos * pCombustivel;


if (tipocombustivel === "gasolina") {
    const valorGasto = litrosConsumidos * pCombustivel;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * pEtanol;
    console.log(valorGasto.toFixed(2));
}

