function Phone(brand, price, color, cond) {
    this.brand = brand;
	this.price = price;
    this.color = color;
    this.cond = cond;
}

Phone.prototype.printInfo = function() {
    console.log("The phone is " + this.cond + " it brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.usefulInfo = function() {
    console.log("" + this.brand + " " + this.cond + " phones usually costs around " + this.price + "");
}


var iPhone6s = new Phone("Apple", 2200, "red", "new");
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black", "used");
var OnePlus = new Phone("OnePlus", 2500, "silver", "new")
