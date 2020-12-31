var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mountainArray) {
    if (mountainArray.length == 0) {
        return "";
    }
    else {
        var tallestMountainHeight = 0;
        var tallestMountainName = "";
        for (var i = 0; i < mountainArray.length; i++) {
            if (mountainArray[i].height > tallestMountainHeight) {
                tallestMountainName = mountainArray[i].name;
                tallestMountainHeight = mountainArray[i].height;
            }
        }
        return tallestMountainName;
    }
}
;
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
;
var products = [
    { name: 'shirt', price: 22 },
    { name: 'jeans', price: 35 },
    { name: 'shoes', price: 80 }
];
function calcAverageProductPrice(productArray) {
    if (productArray.length == 0) {
        return 0;
    }
    else {
        var sum = 0;
        for (var _i = 0, productArray_1 = productArray; _i < productArray_1.length; _i++) {
            var ii = productArray_1[_i];
            sum += ii.price;
        }
        var avg = sum / products.length;
        return avg;
    }
}
;
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
;
var inventory = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(itemArray) {
    if (itemArray.length == 0) {
        return 0;
    }
    else {
        var total = 0;
        for (var _i = 0, itemArray_1 = itemArray; _i < itemArray_1.length; _i++) {
            var i = itemArray_1[_i];
            total += i.product.price * i.quantity;
        }
        return total;
    }
}
var Total = calcInventoryValue(inventory);
console.log(Total);
