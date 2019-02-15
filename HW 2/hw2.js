//1. Write a function called print which accepts an object and prints to the console.
function print(object){
    const {name, leader = '', members} = object
    let membersString = ''
    console.log(`Team: ${name}`)
    console.log(`Leader: ${leader}`)
    
    for(let i = 0; i < members.length; i++){
        const member = members[i]
        if( i == members.length-1){
            membersString += ' and ' + member
        }
        else if (i == 0){
            membersString += member 
        }
        else{
            membersString += ', ' + member 
        }
    }
    
    console.log(`Members: ${membersString}`)
}
//Testing Question 1
console.log('Question 1 Test')
const group1 = {
name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman']
}

const group2 = {
    name: 'Avengers',
    members: ['Hulk', 'Thor', 'Captain America']
}

print(group1)
print(group2)

//2. Write a class that allows you to build a grocery list and track items, quantity and optional price.
class GroceryList {
    constructor(list = []){
        this.list = list
        this.total = 0
    }
    addItem({item, quantity = 1} = grocery){
        this.list.push({item, quantity})
        return this
    }
    removeItem(itemName){
        itemName = itemName.toLowerCase()
        for(let i = 0; i < this.list.length; i++){
            const grocery = this.list[i]
            const {item, quantity} = grocery
            if(itemName == item.toLowerCase() && quantity == 1){ 
                this.list.splice(i)
            }
            else if(itemName == item.toLowerCase() && quantity > 1){
                grocery.quantity -= 1
            }
        }
        return this
    }
    addPrice(itemName, price){
        itemName = itemName.toLowerCase()
        for(let i = 0; i < this.list.length; i++){
            const grocery = this.list[i]
            const {item, quantity} = grocery
            if(itemName == item.toLowerCase()){
                grocery.price = price
            }
        }
        return this
    }
    addTotal(){
        this.list.forEach(grocery => {
            const {item, quantity, price = 0} = grocery
            this.total += price * quantity
        })
        this.total *= 100
        this.total = Math.ceil(this.total)
        this.total /= 100
        return this
    }
    get print(){
        let stringList = ''
        this.list.forEach(grocery => {
            const {item, quantity, price = 'n/a'} = grocery
            stringList += 'Item: ' + item + ' | Quantity: ' + quantity + ' | Price: ' + price + '\n'

        })
        stringList += "Total : " + this.total
        return console.log(stringList)
    }
}

const cart = new GroceryList()
cart
            .addItem({ item: 'bread', quantity: '1'})
            .addItem({ item: 'soup', quantity: '3'})
            .addItem({ item: 'chips', quantity: '4'})
            .addItem({ item: 'soda', quantity: '1'})
            .addPrice('chiPs', 5.99)
            .removeItem('Chips')
            .addPrice('soda', 1.04)
            .addTotal()
            .print

// testItem = [{ item: 'bread', quantity: '1'}, { item: 'soup', quantity: '3'}]
// testStr = 'bread'
// testItem.forEach(i => {
//     if (testStr == i.item){
//         console.log('matCH'.toLowerCase())
//     }
// })