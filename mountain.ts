interface Mountain {
    name: string,
    height: number
}

const mountains : Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(mountainArray : Mountain []) {
    if (mountainArray.length == 0) {
        return "";
    } else {
        let tallestMountainHeight : number = 0;
        let tallestMountainName : string = "";

        for (var i=0; i<mountainArray.length; i++) {
            if(mountainArray[i].height > tallestMountainHeight){
                tallestMountainName = mountainArray[i].name;
                tallestMountainHeight = mountainArray[i].height;
            }
        }
        return tallestMountainName;
    }
};
let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

interface Product {
    name: string,
    price: number
};

const products : Product[] = [
    {name: 'shirt', price: 22},
    {name: 'jeans', price: 35},
    {name: 'shoes', price: 80}
];

function calcAverageProductPrice(productArray : Product[]) {
    if (productArray.length == 0) {
        return 0;
    } else {
        let sum : number = 0;
        for (const ii of productArray) {
        sum += ii.price;
    }
    let avg : number = sum / products.length;
    return avg;
}};
let averagePrice : number = calcAverageProductPrice(products);
console.log(averagePrice);

interface InventoryItem {
    product: Product,
    quantity: number
};

const inventory : InventoryItem[] = [
    {product: {name: 'motor', price: 10.00}, quantity: 10},
    {product: {name: 'sensor', price: 12.50}, quantity: 4},
    {product: {name: 'LED', price: 1.00}, quantity: 20}
];

function calcInventoryValue(itemArray : InventoryItem[]) {
    if(itemArray.length == 0) {
        return 0;
    } else {
        let total : number = 0;
        for(const i of itemArray) {
            total += i.product.price * i.quantity;
        }
        return total;
    }
}
let Total : number = calcInventoryValue(inventory);
console.log(Total);