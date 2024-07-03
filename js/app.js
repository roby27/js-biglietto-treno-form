
const tariffa = 0.21
console.log("La tarrifa è di " + tariffa + "€ per Km percorso")

const formElement = document.getElementById('calcolatore')
console.log(formElement)

const resultElement = document.getElementById('risultato')

formElement.addEventListener('submit', function (event) {
	event.preventDefault()

    const km = parseFloat(document.getElementById('km').value)
	console.log(km)

    const age = parseInt(document.getElementById('age').value)
	console.log(age)

    const sconto = document.getElementById('sconto').value
    console.log(sconto)

    let prezzo = km * tariffa

    if (sconto === 'under25') {
        prezzo = prezzo * 0.80
    } else if (sconto === 'over65') {
        prezzo = prezzo * 0.60
    }

    console.log(prezzo.toFixed(2))

    resultElement.innerHTML = "Il prezzo del tuo biglietto è: " + prezzo.toFixed(2) + "€"
    resultElement.classList.remove('d-none')
})