//trying to get <form> data
const cotReal = 5.22;
const cotDolar = 0.19;
function send() {
    let num = Number(document.getElementById("int").value)
    let moeda = document.querySelector('#txt').value
    var valorTotal;
    if (moeda === "real") {
        valorTotal = num * cotReal;
        valorTotal = valorTotal.toFixed(2);
        alert("R$" + valorTotal);
    } else if (moeda === "dolar") {
        valorTotal = num * cotDolar;
        valorTotal = valorTotal.toFixed(2);
        alert("US$" + valorTotal);
    } else {
        alert("Coloque um valor válido (dolar, real)");
    }
}