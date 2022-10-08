function getPrice(price,ads,tax,profit){

    var R =price + ads;
    var R2 = R + R*tax;
    var finalR =R2 + profit;
    
    return finalR;
}
console.log(getPrice(2000,500,0.1 ,200));
