function costOfBottles(money) {
    var costOfMilk = 1.5;
    var menyOfBottle = Math.floor(money / costOfMilk);
    alert("I could buy " + menyOfBottle + " bottles of milk");
}
costOfBottles(5);