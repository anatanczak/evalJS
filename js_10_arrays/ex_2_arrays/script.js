//jshint esversion: 6
let chosenOption
let optionIsValid
let length
let customArray
do {

    chosenOption = prompt("Choisir une option: \n 1 - Affichage de tous les valeurs du tableau \n 2 - Affichage du contenu d'une valeur dont l'index est saisi au clavier \n 3 - Affichage du maximum et de la moyenne");

    switch (chosenOption) {
        case "1":
            length = getArrayLengthFromUser()
            customArray = getArrayValuesFromUser(length)
            showArrayToUser(customArray)
            optionIsValid = true
            break

        case "2":
            length = getArrayLengthFromUser()
            customArray = getArrayValuesFromUser(length)
            let index = getIndexFromUser()
            findElementInArrayAtIndex(index, customArray)
            optionIsValid = true
            break

        case "3":
            length = getArrayLengthFromUser()
            customArray = getArrayValuesFromUser(length)
            showMaxAndAverageToUser(customArray)
            optionIsValid = true
            break

        default:
            optionIsValid = false
            break
    }
} while (!optionIsValid)




function getArrayLengthFromUser() {
    let length

    do {
        length = parseInt(prompt("Saisissez un entier entre 1 et 100 qui va servir pour la longeur du tableau"))
        if (length > 0 && length <= 100) {
            break
        } else {
            length = NaN;
        }
    } while (isNaN(length))
    return length
}


function getArrayValuesFromUser(length) {
    let temporaryArray = Array(length)
    let arrayItem

    for (let i = 0; i < temporaryArray.length; i++) {
        do {
            arrayItem = prompt(`Saisissez la valeur Nr°${(i+1)}.`)

            if (arrayItem) {
                temporaryArray[i] = arrayItem
                break
            }
        } while (!arrayItem)
    }
    return temporaryArray;
}



function showArrayToUser(arr) {

    //call filter method on array to clean the falsy elements if there are any --- pass as a call back a simplified arrow function that evaluates each element on a condition which is return only NOT falsy elements
    let filteredArray = arr.filter(element => element);
    alert(`Votre tableau : ${filteredArray}.`)
}

function getIndexFromUser() {
    let index

    do {
        index = parseInt(prompt("Entrer l'index (un entier entre le 0 et 100)"))
        if (index >= 0 && length <= 100) {
            break
        } else {
            index = NaN;
        }
    } while (isNaN(index))
    return index
}

function findElementInArrayAtIndex(index, arr) {
    let value = arr[index]

    if (value) {
        alert(`La valeur est : ${value}.`)
    } else {
        alert(`La valeur pour l'index : ${index} n'existe pas car le tableau a seulement ${arr.length} element.`)
    }
}




function showMaxAndAverageToUser(arr) {
    //get rid of of all NaNs 
    let filteredArray = arr.filter(element => !isNaN(element))

    let sum = 0
    let max
    let average
    if (filteredArray.length === 0) {
        alert("Max et moyenne est 0 car il n y a pas des items")
    } else if (filteredArray.length === 1) {
        alert("Max et moyenne est " + filteredArray[0])
    } else {
        //spread operators allows the iterable (array or string) to be expanded in places where 0 or more objects are expected
        max = Math.max(...filteredArray)

        console.log(filteredArray)
        for (let item of filteredArray) {
            sum += parseInt(item)
        }

        average = sum / filteredArray.length
    }

    alert("Max is " + max + " Average is " + average)
}