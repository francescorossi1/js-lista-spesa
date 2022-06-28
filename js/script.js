/*
Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
Consigli:
Potete provare a fare l'esercizio una prima volta col for e poi convertire piano piano in while.
Lista della spesa (da convertire in array)
Uova
Pane
Latte
Biscotti
Pasta
Affettati
Formaggio
Verdura
Frutta
*/

// Steps 

// Creo un array con la lista della spesa

const ShoppingItems = ['uova','pane','latte','biscotti','pasta','affettati','formaggio','verdura','frutta']

// Collego l'ul a una variabile

const div = document.getElementById('shopping-list');

// Con la lista che parte da 0
let i = 0

// Fintanto che la variabile i non raggiunge il numero dell'array
while(i !== ShoppingItems.length){

    // Creo un elemento li
    const li = document.createElement('li');

    // Appendo il <li> al div
    div.append(li);

    // Appendo l'elemento dell'array corrispondente al ciclo attuale (entrambi partono da 0) al <li> appena creato
    li.append(ShoppingItems[i]);
    console.log(div.innerHTML);

    // Aumento il contatore per non entrare in un loop
    i++
}













// Creo il display finale (per il metodo con .innerHTML)

const ShoppingListDisplay = document.getElementById('shopping-list');

