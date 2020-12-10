//function expression
const tellFortune = function(children, partner, geolocation, job){
    let future = 'You will be a ' + job + ' in ' + geolocation + ', and married to ' + partner + ' with ' + children + ' kids.';
    console.log(future);
}

tellFortune(2, 'Sarah', 'Chicago', 'lawyer');
tellFortune(1, 'Bram', 'Delft', 'developer');
tellFortune(2, 'Mary', 'Stockholm', 'mechanic');