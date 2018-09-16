$(".add-to-cart").click(function(event){
    event.preventDefault();
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));
    
    addItemToCart(name, price, 1);
    displayCart();
});

function displayCart(){
    var cartArray = listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<li>"+cartArray[i].name+" "+cartArray[i].count+"</li>"
    }
    $("#show-cart").html(output);
}



// Shopping Cart
var cart = [];
var Item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};

function addItemToCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count; 
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count --; 
            if (cart[i].count === 0){
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
}

function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].type === name) {
            cart.splice(i, 1);
            break;
        }
    } 
    saveCart();
}
                 
addItemToCart("Raspberry Cupcake", 40.00, 1)
addItemToCart("Caramel Cupcake", 40.00, 1)
addItemToCart("Oreo Cupcake", 40.00, 1)
addItemToCart("Chocolate Cupcake", 40.00, 1)
                 
//addItemToCart("Coffee Macaron", 50.00, 1)
//addItemToCart("Chocolate Macaron", 50.00, 1)
//addItemToCart("Vanilla Macaron", 50.00, 1)
//addItemToCart("Variety Macaron", 50.00, 1) 
                 
//addItemToCart("Blueberry Muffin", 50.00, 1)
//addItemToCart("Chocolate Muffin", 50.00, 1)
//addItemToCart("Coffee Muffin", 50.00, 1)
//addItemToCart("Raspberry Muffin", 50.00, 1) 
                 
//addItemToCart("Glazed Doughnut", 30.00, 1)
//addItemToCart("Cinnamon Doughnut", 30.00, 1)
//addItemToCart("Chocolate Doughnut", 30.00, 1)
//addItemToCart("Strawberry Doughnut", 30.00, 1)                 

function clearCart() {
    cart = [];
    saveCart();
}

function countCart() { // -> return total count
    var totalCount = 0;
    for (var i in cart) {
            totalCount += cart[i].count;    
    }        
        return totalCount;    
}


function totalCart() { // -> return total cost
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price;   
    }
    return totalCost;    
}       


function listCart() { // -> list Cart array of Items
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}    


function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}


function loadCart() {
    cart = JSON.parse (localStorage.getItem("shoppingCart"));
}
loadCart();
