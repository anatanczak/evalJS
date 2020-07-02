let itemPriceString;
let itemPrice;

let quantityString;
let quantity;

let totalBeforeDiscount;
let deliveryPrice;
let discount;
let totalPrice;

// Get the Price form the user
do {
    itemPriceString = prompt("Entrez le prix du produit choisi (de 0 à 1 000 000).");
    itemPrice = parseFloat(itemPriceString);
    if (itemPrice > 0 && itemPrice <= 1000000) {
        console.log(itemPrice);
    } else {
        alert("C'est n'est pas un prix valable!")
        itemPriceString = NaN;
    }
} while (isNaN(itemPriceString));


// Get the quantity
do {
    quantityString = prompt("Entrer la quantité de produit choisi(de 0 à 1000). Si vous voulez acheter au-delà de 1000 écrivez nous un email.");
    quantity = parseInt(quantityString);
    if (quantity > 0 && quantity <= 1000) {
        console.log(quantity);
    } else {
        quantityString = NaN;
    }
} while (isNaN(quantityString));


totalBeforeDiscount = itemPrice * quantity;



// calculate discount

if (totalBeforeDiscount >= 100 && totalBeforeDiscount <= 200) {
    discount = (totalBeforeDiscount / 100) * 5;
} else if (totalBeforeDiscount > 200) {
    discount = (totalBeforeDiscount / 100) * 10;
} else {
    discount = 0;
}

totalPrice = totalBeforeDiscount - discount;

// get the delivery price if there's any

if (totalPrice > 500) {
    deliveryPrice = 0;
} else {
    deliveryPrice = (totalPrice / 100) * 2;
    if (deliveryPrice < 6) {
        deliveryPrice = 6;
    }
}
// calculate the totalPrice


totalPrice += deliveryPrice;

alert("Le prix total de votre commande est " + totalPrice + "€.\n La reduction appliqué est " + discount + "€.\n La livraison est " + deliveryPrice + "€.");