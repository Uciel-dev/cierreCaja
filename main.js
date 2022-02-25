
const botonGuardar = document.querySelector('#guardar');


botonGuardar.onclick = function() {

    cashBoxClosing()
}


function cashBoxClosing(){
    
   
   let data = getAllData()

    multiplyingAmountsOfMoney(data.moneyDeposited)

    totalSalePerBox(data.moneyDeposited)

    showDataOfThePersonInCharge(data.userData)
}

function getAllData () {

    const $userName = document.querySelector('#user-name').value;
    const $turn = document.querySelector('#turn').value;
    const $observations = document.querySelector('#observations').value
    const $debits = document.querySelector('#debits').value

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
    const $deudaCliente = document.querySelector('#deuda-cliente').value;
    const $ticketSueldo = document.querySelector('#ticket-sueldo').value;


    const userData = {
        
        'userName' : $userName,
        'turn' : $turn,
        'date' : formattingDate(),
        'observations': $observations,
        'debits': $debits
    }


    let moneyDeposited = {

        'mil':$mil,
        'quinientos':$quinientos,
        'doscientos':$doscientos,
        'cien':$cien,
        'cincuenta':$cincuenta,
        'veinte':$veinte,
        'diez':$diez,
        'monedas':$monedas,
        'tarjetas':$tarjetas,
        'pagoProveedores':$pagoProveedores,
        'deudaCliente':$deudaCliente,
        'ticketSueldo':$ticketSueldo
    }

    const cashClosingDetails = {
        
        'userData': userData,
        'moneyDeposited': moneyDeposited
    }

    return cashClosingDetails
    
}

function formattingDate(){
    const d = new Date()

    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    const formattedDate = `${day}/${month}/${year}`

    return formattedDate

}

function multiplyingAmountsOfMoney( amountOfMoney ){

    amountOfMoney.mil *= 1000;
    amountOfMoney.quinientos *= 500;
    amountOfMoney.doscientos *= 200;
    amountOfMoney.cien *= 100;
    amountOfMoney.cincuenta *= 50;
    amountOfMoney.veinte *= 20;
    amountOfMoney.diez *= 10;

}

function totalSalePerBox( amountOfMoney ){
    
    let totalSale = 0

    for(const money in amountOfMoney){
    
        totalSale += Number(amountOfMoney[money]) 
    
    }

    return totalSale
}

function showDataOfThePersonInCharge(userData){

    const $responsableText = document.createTextNode(`Responsable: ${userData.userName}`)
    const $turnText = document.createTextNode(`Turno: ${userData.turn}`)
    const $dateText = document.createTextNode(`Fecha: ${userData.date}`)
    const $debitsText = document.createTextNode(`Debitos: ${userData.debits}`)
    const $observationsText = document.createTextNode(`Observaciones: ${userData.observations}`)

    document.querySelector('#show-responsible').appendChild($responsableText)
    document.querySelector('#show-turn').appendChild($turnText)
    document.querySelector('#show-date').appendChild($dateText)
    document.querySelector('#show-debits').appendChild($debitsText)
    document.querySelector('#show-observations').appendChild($observationsText)
}