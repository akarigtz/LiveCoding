// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let newArray = bigWords('bocina', myArray);
let lista = document.getElementById("lista")


function bigWords(string, array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newString = array[i];
        if (newString.length > string.length){
            newArray.push(newString)
        }//if
    }//for
    return newArray;
}//bigWords
function printList(array){
    for (const i in array) {
        lista.innerHTML+=`<li>${array[i]}</li>`
    }//for
}//printList

printList(newArray);
