//lifetime supply
const calculateSupply = function(age, amountPerDay){
    const maxAge = 100;
    let result = Math.round(((maxAge-age) * 365) * amountPerDay); //how many days to the age of 100
    console.log('You will need ' + result + ' to last you until the ripe old age of ' + maxAge);
}

calculateSupply(85, 12.5);
calculateSupply(27, 8.25);
calculateSupply(54, 31.1123);