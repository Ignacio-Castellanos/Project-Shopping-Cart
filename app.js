const products = [

{name: "The Name of the Wind", price: 38},
{name: "Game of Thrones", price: 35},
{name: "Geralt of Rivia", price: 45},
{name: "Trilogy of Lyonesse", price: 25},
{name: "Conan the Barbarian", price: 15},


];

let cart = []


let selection = prompt("Do you want to buy a product?")


while(selection != "yes" && selection != "no"){
    alert("Please enter yes or no")
    selection = prompt("Do you want to buy a product?")
    

}

if(selection == "yes"){
alert("Here is our list of products")
let alltheProducts = products.map((product) => product.name + " " +
product.price + "$");
alert(alltheProducts.join(" - "))


} else if (selection == "no"){
alert("Thanks for coming, see you soon");

}

while(selection != "no"){
let product = prompt("Add a product to your cart")
let price = 0 


if(product == "The Name of the Wind" || product == "Game of Thrones" || product == "Geralt of Rivia" || 
product == "Trilogy of Lyonesse" || product == "Conan the Barbarian"){
 switch(product){
case "The Name of the Wind":
    price = 38
    break;
    case "Game of Thrones":
    price = 35
    break;
    case "Geralt of Rivia":
    price = 45
    break;
    case "Trilogy of Lyonesse":
    price = 25
    break;
    case "Conan the Barbarian":
    price = 15
    break;
default:
    break;
   }
   let units = parseInt(prompt("How many units do you want to take?"))

   cart.push({product, units, price})
   console.log(cart)
} else {
alert("Sorry, we don't have that product")

}

selection = prompt("Do you want to continue shopping?")

while(selection === "no"){
alert("Thanks for the purchase, see you soon")
cart.forEach((finalCart) =>{
console.log(`product: ${finalCart.product}, units: ${cart.units}, 
Total payable per product ${finalCart.units * finalCart.price}`)
})

break;
}

}

const total = cart.reduce((acc, el) => acc + el.price * el.units, 0)
console.log(`
The total to pay for your purchase is: ${total}`)


