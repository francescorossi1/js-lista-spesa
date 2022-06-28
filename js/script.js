// Steps 

// Creo un array con la lista della spesa

const shoppingItems = ['uova','pane','latte','biscotti','pasta','affettati','formaggio','verdura','frutta']

// Collego l'ul a una variabile

const div = document.getElementById('shopping-list');

// Con la lista che parte da 0
let i = 0

// Fintanto che la variabile i non raggiunge il numero dell'array
while(i !== shoppingItems.length) {

    // Creo un elemento li
    const li = document.createElement('li');

    // Appendo il <li> al div
    div.append(li);

    // Appendo l'elemento dell'array corrispondente al ciclo attuale (entrambi partono da 0) al <li> appena creato
    li.append(shoppingItems[i]);

    // Aumento il contatore per non entrare in un loop
    i++
}


// Creo il display finale (per il metodo con .innerHTML)

// * const shoppingListDisplay = document.getElementById('shopping-list');

// Ripeto l'operazione ma costruendo stringhe anziché appendere elementi direttamente

// * let shoppingListContent = ""

// * let i = 0

// *while(i !== shoppingItems.length) {

    // Aggiungo le stringhe <li> con il contenuto
    
    // * shoppingListContent += `<li>${shoppingItems[i]}</li>`

    // Aumento il contatore per non entrare in un loop

    // * i++
    
// * }

// Stampo la stringa completa nell'ul 

// * shoppingListDisplay.innerHTML = shoppingListContent