
const botonGuardar = document.querySelector('#guardar');


botonGuardar.onclick = function() {

    const $mil = document.querySelector('#mil').value;
    const $quinientos = document.querySelector('#quinientos').value;
    const $doscientos = document.querySelector('#doscientos').value;
    const $cien = document.querySelector('#cien').value;
    const $cincuenta = document.querySelector('#cincuenta').value;
    const $veinte = document.querySelector('#veinte').value;
    const $diez = document.querySelector('#diez').value;
    const $monedas = document.querySelector('#monedas').value;
    const $tarjetas = document.querySelector('#tarjetas').value;
    const $pagoProveedores = document.querySelector('#pago-proveedores').value;
    const $ticketCliente = document.querySelector('#ticket-cliente').value;
    const $ticketSueldo = document.querySelector('#ticket-sueldo').value;
    const $fondoCaja = document.querySelector('#fondo-caja').value;

    console.log(
        $mil, 
        $quinientos, 
        $doscientos, 
        $cien, 
        $cincuenta, 
        $veinte, 
        $diez, 
        $monedas, 
        $tarjetas, 
        $pagoProveedores, 
        $ticketCliente, 
        $ticketSueldo, 
        $fondoCaja

    )

    const totalMil = $mil * 1000;
    const totalQuinientos = $quinientos * 500;
    const totalDoscientos = $doscientos * 200;
    const totalCien = $cien * 100;
    const totalCincuenta = $cincuenta * 50;
    const totalVeinte = $veinte * 20;
    const totalDiez = $diez * 10;

    console.log(

        totalMil,
        totalQuinientos,
        totalDoscientos,
        totalCien,
        totalCincuenta,
        totalVeinte,
        totalDiez
    )

    let sumaActivos = [
        totalMil, 
        totalQuinientos, 
        totalDoscientos, 
        totalCien, 
        totalCincuenta, 
        totalVeinte, 
        totalDiez, 
        $monedas, 
        $tarjetas, 
        $pagoProveedores,
        $ticketCliente,
        $ticketSueldo 
    ]


    let sumaTotalDeActivos = 0;

    console.log(sumaActivos.length)

    for(let i = 0; i < sumaActivos.length; i++){

        sumaTotalDeActivos += Number(sumaActivos[i]) 

    }

    console.log(sumaTotalDeActivos)
}






















