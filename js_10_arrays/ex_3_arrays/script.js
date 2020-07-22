let integers = []
let input
let integer
let counter = 1

do {
    input = prompt(`saisissez un entier Nr°${counter}. Toutes les autres valeurs que integer vont pas être pise en compte. Vous pouvez annuler la saisie avec le bouton Annuler`)
    integer = parseInt(input)
    if (!isNaN(integer)) {
        integers.push(integer)
    }
    counter++;
} while (input != null)


function bubbleSort(unsortedArray) {
    for (i = 0; i < unsortedArray.length; i++) {
        for (j = 0; j < unsortedArray.length - 1; j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                let temp = unsortedArray[j]
                unsortedArray[j] = unsortedArray[j + 1]
                unsortedArray[j + 1] = temp
            }
        }
    }
    console.log("sorted:" + unsortedArray)
}
let sortedIntegers = bubbleSort(integers);
alert(`Le tableau non trié : ${integers} Le tableau trié : ${}`)





// function bubbleSort(unsortedArray) {
//   let swap;

//   do {
//     for (i = 0; i < unsortedArray.length; i++) {
//       if (unsortedArray[i] > unsortedArray[i + 1]) {
//         let temp = unsortedArray[i];
//         unsortedArray[i] = unsortedArray[i + 1];
//         unsortedArray[i + 1] = temp;
//         swap = true;
//       } else {
//         swap = false;
//       }
//     }
//   } while (swap === true)
// }

// // let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 9, 5, 7, 1, 0, 5];

// // bubbleSort(array1);
// bubbleSort(array2);

// // console.log(array1);
// console.log(array2);