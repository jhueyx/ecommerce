// product constructor 
function Card (name, set, image, price) {
	this.name  = name
	this.set = set
	this.image = image
	this.price = price
}

//create vars, using the format above


var plains = new Card ("Plains", "HOU", "img/plains.jpg", "$3.00")
var island = new Card ("Island", "HOU", "img/island.jpg", "$3.00")
var swamp = new Card ("Swamp", "HOU", "img/swamp.jpg", "$3.00")
var mountain = new Card ("Mountain", "HOU", "img/mountain.jpg", "$3.00")
var forest = new Card ("Forest", "HOU", "img/forest.jpg", "$3.00")


// create an array to add products to
var cardArray = new Array

// add products to array of products
cardArray.push(plains, island, swamp, mountain, forest)


// loop through products array
for(var i = 0; i < cardArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var setH4   = document.createElement("h4")
	var priceH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var tName   = document.createTextNode(cardArray[i].name)
	var tSet   = document.createTextNode("Set: " + cardArray[i].set)
	var tPrice  = document.createTextNode("Price: " + cardArray[i].price)
	var tButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = cardArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "cards cardName" + [i] + "thumbnail"

	
	// add text to elements
	nameH1.appendChild(tName)
	setH4.appendChild(tSet)
	priceH4.appendChild(tPrice)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(setH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="lands"
	document.getElementById("cards").appendChild(newItem)
}




function newProduct() {
	// Create a new empty array variable
	var newItemArray = [];
	// Grab all of the values from the form fields
	var itemName = document.getElementById("itemName").value;
	var itemImage = document.getElementById("itemImage").value;
	var itemImageAvail = (itemImage !== '') ? itemImage : "img/"
	var itemSet = document.getElementById("itemSet").value;
	var itemPrice = document.getElementById("itemPrice").value;

	var newProduct = new Card(itemName, itemImage, itemSet, itemPrice);

	newItemArray.push(newProduct)
	cardArray(newItemArray);
	}

