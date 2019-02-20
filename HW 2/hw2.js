//1. Write a function called print which accepts an object and prints to the console.
function print(object) {
  //destructuring the object
  const { name, leader = "", members } = object;
  //string the will become the formated members
  let membersString = "";

  //formatting the members to be in the correct format
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    if (i == members.length - 1) {
      membersString += " and " + member;
    } else if (i == 0) {
      membersString += member;
    } else {
      membersString += ", " + member;
    }
  }
  //printing out the infomation to the console
  console.log(`Team: ${name}`);
  console.log(`Leader: ${leader}`);
  console.log(`Members: ${membersString}`);
}

//Testing Question 1
console.log("Question 1 Test");
const group1 = {
  name: "Justice League",
  leader: "Wonder Woman",
  members: ["Batman", "Superman"]
};

const group2 = {
  name: "Avengers",
  members: ["Hulk", "Thor", "Captain America"]
};

print(group1);
print(group2);

//2. Write a class that allows you to build a grocery list and track items, quantity and optional price.
class GroceryList {
  //the constructor
  constructor(list = []) {
    this.list = list;
    this.total = 0;
  }
  //add item by pushing to array
  addItem({ item, quantity = 1 } = grocery) {
    this.list.push({ item, quantity });
    return this;
  }
  //removing items by the name
  removeItem(itemName) {
    for (let i = 0; i < this.list.length; i++) {
      const grocery = this.list[i];
      const { item, quantity } = grocery;
      //using .toLowerCase() when checking to have case insensitivity
      //remove from list when quantity is 1
      if (itemName.toLowerCase() == item.toLowerCase() && quantity == 1) {
        this.list.splice(i);
      }
      //decrement quantity by 1 if it was more than 1
      else if (itemName == item.toLowerCase() && quantity > 1) {
        grocery.quantity -= 1;
      }
    }
    return this;
  }
  //filling in the pricing info for given item
  addPrice(itemName, price) {
    for (let i = 0; i < this.list.length; i++) {
      const grocery = this.list[i];
      const { item, quantity } = grocery;
      //using .toLowerCase() when checking to have case insensitivity
      if (itemName.toLowerCase() == item.toLowerCase()) {
        grocery.price = price;
      }
    }
    return this;
  }
  //adds up the total
  addTotal() {
    //adds the price of each item multiplied by their quantity
    this.list.forEach(grocery => {
      const { item, quantity, price = 0 } = grocery;
      this.total += price * quantity;
    });
    //formatting so that they take only 2 decimal points
    this.total *= 100;
    this.total = Math.ceil(this.total);
    this.total /= 100;

    return this;
  }
  //prints the receiept
  get print() {
    let stringList = "";
    //formats output of each item on receipt
    this.list.forEach(grocery => {
      const { item, quantity, price = "n/a" } = grocery;
      stringList +=
        "Item: " +
        item +
        " | Quantity: " +
        quantity +
        " | Price: " +
        price +
        "\n";
    });
    //puts in the total on the receipt
    stringList += "Total : " + this.total;

    return console.log(stringList);
  }
}

//Testing Question 2
console.log("Question 2 Test");
const cart = new GroceryList();
cart
  .addItem({ item: "bread", quantity: "1" })
  .addItem({ item: "soup", quantity: "3" })
  .addItem({ item: "chips", quantity: "4" })
  .addItem({ item: "soda", quantity: "1" })
  .addPrice("chiPs", 5.99)
  .removeItem("Chips")
  .addPrice("soda", 1.04)
  .addTotal().print;
