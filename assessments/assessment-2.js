/*Good Class

This class represents an individual good.

Properties:

1.id (Number): Unique identifier for the good.
2.name (String): Name of the good.
3.quantity (Number): Available quantity in stock.
4.price (Number): Unit price of the good.

Constructor:

1.Input: id (Number), name (String), quantity (Number), price (Number)
2.Output: Good instance
3.Example: const apple = new Good(1, "Apple", 50, 0.5);
4.Description: Creates a new instance of the Good class with the specified properties. */

class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

/*Inventory Class

This class represents an inventory system. */

class Inventory {
    constructor() {
        this.goods = [];
    }
    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            const existingGood = this.goods[i];
            if (existingGood.id === good.id) {
                throw new Error("Good already exists in the inventory.");
            }
        }

        this.goods.push(good);
    }

    removeGood(id) {
        let foundIndex = -1;

        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex === -1) {
            throw new Error("Good not found in the inventory.");
        }

        this.goods.splice(foundIndex, 1);
    }

    updateGood(id, updatedGood) {
        let foundIndex = -1;

        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex === -1) {
            throw new Error("Good not found in the inventory.");
        }

        this.goods[foundIndex] = updatedGood;
    }

    viewGoods() {
        return this.goods.slice();
    }
}

const inventory = new Inventory();

const apple = new Good(1, "Apple", 50, 0.5);
const banana = new Good(2, "Banana", 30, 0.3);

inventory.addGood(apple);
inventory.addGood(banana);

console.log(inventory.viewGoods());

inventory.removeGood(1);
console.log(inventory.viewGoods());

const updatedBanana = new Good(2, "Banana", 40, 0.25);
inventory.updateGood(2, updatedBanana);

console.log(inventory.viewGoods());
