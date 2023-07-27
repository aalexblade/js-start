// CRUD
// Array of objects
// ES6 single key value

let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

let shopName = "ATB"

const shop = {
    // items: items,
    // shopName: shopName,
    // ===ES6 single key value=====
    items,
    shopName,
    // R-----
    showItems() {
        // console.log(this.items)
        for (let item of this.items) {
            console.log(item.id, item.name, item.price, item.category)
            // console.log(`id: ${item.id}, name:${item.name}, price:${item.price}, category:${item.category}`)
        }
    },
    //  C----
    addItem(newItem) {
        this.items.push(newItem)
    },
    //  U------
    updadeItem(productName, newName) {
        for (let item of this.items) {
            if (productName === item.name) {
                item.name = newName
            }
        }
    },
    // D------
    removedItem(productToRemoved) {
        for (let item of this.items) {
            if (productToRemoved === item.name) {
                let idx = this.items.indexOf(item)
                // console.log(idx)
                this.items.splice(idx, 1)
            }
        }
    },

}



// let melon = { id: "5", name: "melon", price: 25, qty: 400, category: "fruits" };
// shop.addItem(melon)
shop.addItem({
    id: "5",
    name: "melon",
    price: 25,
    qty: 400,
    category: "fruits"
})

shop.updadeItem("apples", "apples gold")
shop.removedItem("tomatoes")
shop.showItems()
// ============================================
// shop.shopName

// console.log(shop.items)
// console.log(shop.shopName)