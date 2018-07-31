// product constructor 
function AddItem (name, image, set, price) {
	//name
	this.name  = name
	//image
	this.image = image
	//set
	this.set = set
	//price
	this.price = price
}

//create vars, using the format above

var plains = new AddItem ("Plains", "img/plains.jpg", "HOU", "$3.00")
var island = new AddItem ("Island",  "img/island.jpg", "HOU", "$3.00")
var swamp = new AddItem ("Swamp", "img/swamp.jpg", "HOU", "$3.00")
var mountain = new AddItem ("Mountain","img/mountain.jpg",  "HOU", "$3.00")
var forest = new AddItem ("Forest",  "img/forest.jpg", "HOU", "$3.00")


// create an array to add products to
var itemArray = []

// add products to array of products
itemArray.push(plains, island, swamp, mountain, forest)

function displayItems(array) {
// loop through products array
for(var i = 0; i < array.length; i++) {

	// create container div element
	var newProductDiv  = document.createElement("div")
	//add class name to container div
	newProductDiv.className = "col-md-4 newDiv animated slideInLeft"

	//create elements to put into the container div element
	var newName   = document.createElement("h1")
	var newImage    = document.createElement("img")
	var newSet   = document.createElement("h4")
	var newPrice  = document.createElement("h4")
	var newButton      = document.createElement("button")

	// create text for new elements
	var nameText   = document.createTextNode(array[i].name)
	var setText   = document.createTextNode("Set: " + array[i].set)
	var priceText  = document.createTextNode("Price: " + array[i].price)
	var buttonText = document.createTextNode("Buy Now!")

	// update source attribute
	newImage.src = array[i].image
	newImage.className = "img-fluid"

	// update class attributes
	newButton.className = "btn btn-primary btn-lg"

	
	// add text to elements
	newName.appendChild(nameText)
	newSet.appendChild(setText)
	newPrice.appendChild(priceText)
	newButton.appendChild(buttonText)

	// add elements to new div
	newProductDiv.appendChild(newName)
	newProductDiv.appendChild(newImage)
	newProductDiv.appendChild(newSet)
	newProductDiv.appendChild(newPrice)
	newProductDiv.appendChild(newButton)

	// // add new div to new item div
	// newItem.appendChild(newDiv)

	// add new item to the element with id="lands"
	document.getElementById("cards").appendChild(newProductDiv)
}}

displayItems(itemArray);


function newItem() {
	// Create a new empty array variable
	var newItemArray = [];
	// Grab all of the values from the form fields
	var itemName = document.getElementById("itemName").value;
	var itemImage = document.getElementById("itemImage").value;
	var itemImageAvail = (itemImage !== '') ? itemImage : "img/back.jpg"
	var itemSet = document.getElementById("itemSet").value;
	var itemPrice = document.getElementById("itemPrice").value;

	var newItem = new AddItem(itemName, itemImageAvail, itemSet, itemPrice);

	newItemArray.push(newItem)
	displayItems(newItemArray);
	}

