let calculoTradicional = document.getElementById('confirmarTradicional');
calculoTradicional.addEventListener('click', compraTradicional);
function compraTradicional(){
    let qtdTradicional = Number(document.getElementById('qtdTradicional').value);
    let resultado = 25 * qtdTradicional;
    document.getElementById('tradicionalSubTotal').innerHTML = `Subtotal: R$${resultado},00`;
    return resultado;
}
let calculoFesta = document.getElementById('confirmarFesta');
calculoFesta.addEventListener('click', compraFesta);
function compraFesta(){
    let qtdFesta = Number(document.getElementById('qtdFesta').value);
    let resultado = 60 * qtdFesta;
    document.getElementById('festaSubTotal').innerHTML = `Subtotal: R$${resultado},00`;
    return resultado;
}
let calculoCupcake = document.getElementById('confirmarCupcake');
calculoCupcake.addEventListener('click', compraCupcake);
function compraCupcake(){
    let qtdCupcake = Number(document.getElementById('qtdCupcake').value);
    let resultado = 10 * qtdCupcake;
    document.getElementById('cupcakeSubTotal').innerHTML = `Subtotal: R$${resultado},00`;
    return resultado;
}
let calculoBoloPote = document.getElementById('confirmarBoloPote');
calculoBoloPote.addEventListener('click', compraBoloPote);
function compraBoloPote(){
    let qtdBoloPote = Number(document.getElementById('qtdBoloPote').value);
    let resultado = 15 * qtdBoloPote;
    document.getElementById('boloPoteSubTotal').innerHTML = `Subtotal: R$${resultado},00`;
    return resultado;
}
let calculoTotal = document.getElementById('confirmarTotal');
calculoTotal.addEventListener('click', compraTotal);
function compraTotal(){
    let resultado = compraTradicional() + compraFesta() + compraCupcake() + compraBoloPote();
    document.getElementById('valorTotalCompra').innerHTML = `Valor total da compra: R$${resultado},00`;
    document.getElementById('pagamento').style.display = 'block';
}