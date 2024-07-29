// Función para calcular la propina
function calculateTip() {
    // Obtener los valores de entrada
    const factura = parseFloat(document.getElementById('factura').value);
    const tipPercentage = parseFloat(document.getElementById('propinaPorcentaje').value);

    // Validar la entrada
    if (isNaN(factura) || factura <= 0) {
        alert('Ingrese un monto de importe válido.');
        return;
    }

    // Calcular la propina y el total
    const tipAmount = factura * tipPercentage;
    const totalAmount = factura + tipAmount;

    // Mostrar los resultados
    document.getElementById('montoPropina').innerText = tipAmount.toFixed(2);
    document.getElementById('totalPropina').innerText = totalAmount.toFixed(2);
}
