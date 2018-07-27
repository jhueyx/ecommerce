// product constructor 
function Land (name, set, image, price) {
	this.name  = name
	this.set = set
	this.image = image
	this.price = price
}

//create vars, using the format above


var plains = new Land ("Plains", "HOU", "img/plains.jpg", "$3.00")
var island = new Land ("Island", "HOU", "img/island.jpg", "$3.00")
var swamp = new Land ("Swamp", "HOU", "img/swamp.jpg", "$3.00")
var mountain = new Land ("Mountain", "HOU", "img/mountain.jpg", "$3.00")
var forest = new Land ("Forest", "HOU", "img/forest.jpg", "$3.00")


// create an array to add products to
var landArray = new Array

// add products to array of products
landArray.push(plains, island, swamp, mountain, forest)


// loop through products array
for(var i = 0; i < landArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var setH4   = document.createElement("h4")
	var priceH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var tName   = document.createTextNode(landArray[i].name)
	var tSet   = document.createTextNode("Set: " + landArray[i].set)
	var tPrice  = document.createTextNode("Price: " + landArray[i].price)
	var tButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = landArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-6"
	newDiv.className = "lands landName" + [i] + "thumbnail"

	
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
	document.getElementById("lands").appendChild(newItem)
}

