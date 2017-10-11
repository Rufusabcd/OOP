function Phone(brand, price, color) {
    this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printinfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6s = new Phone("Apple", 2200, "red");
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var OnePlus = new Phone("OnePlus", 2500, "silver")
