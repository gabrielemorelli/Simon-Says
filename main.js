

const n_random = numericasuali(5);


let secondi = 3;
// creo un array di 5 numeri casuali
document.getElementById('numeri_out').innerHTML = n_random;
//dopo 30 secondi effettua la verifica
setTimeout(verifica, secondi * 1000)



function verifica() {
//pulisce i numeri a schermo


document.getElementById('numeri_out').innerHTML = '';
document.getElementById('titolo').innerHTML =' Inserisci i 5 numeri che hai visto ';
    //workaround 
    setTimeout(function () {
        const numerivincitore = [];
        // chiedo i  5 numeri e li inserisco in un array
        for (i = 0; i < 5; i++) {
            let val = parseInt(prompt('inserici un numero'));
            //verifico che il numero sia tra quelli casuali
            if (n_random.includes(val)) {
                //se è compreso lo inserisco nell'array dei num indovinati
                numerivincitore.push(val);
            }
        }
        // Gestisco il display della vincita 
        if (numerivincitore.length > 0) {
            document.getElementById('titolo').innerHTML =' Hai indovinato ' + numerivincitore.length+ " numeri";
            document.getElementById('numeri_out').innerHTML = numerivincitore;
        }
        else {
            alert("Nessun numero trovato");
        }
    }, 250);

}


function numericasuali(num) {
    const casuali = [];

    for (i = 0; i < num; i++) {
        casuali.push(Math.floor(Math.random() * 100) + 1);
    }

    return casuali;
}
