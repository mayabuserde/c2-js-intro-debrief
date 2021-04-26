//---------------GenBuzz-------------------------

// Create variable myNumber
let myNumber = 46;

// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.

if (typeof myNumber !== 'number') {
    console.log('This is not a number');
}

// If value of myNumber is a multiple of 3 print 'Gen' to the console 
// --> Moved this above the other conditions, otherwise it will never run.

else if ((myNumber % 5 === 0) && (myNumber % 3 === 0)) {
    console.log('GenBuzz');
}

else if (myNumber % 3 === 0) {
    console.log('Gen');
}
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
else if (myNumber % 5 === 0) {
    console.log('Buzz');
}
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console

// If the value of myNumber is any other number print the value of myNumber to the console.
else {
    console.log(myNumber);
}

//---------------E-commerce item list ----------------

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement Shoes are $50 should be printed to the console.

let item = 'shoes';

// --> added toLowerCase() to make the code case-insensitive.

switch (item.toLowerCase()) {
    case 'Shoes'.toLowerCase():
        console.log(`${item} are $50.`);
        break;
    case 'Jeans'.toLowerCase():
        console.log(`${item} are $25.`);
        break;
    case 'Hat'.toLowerCase():
        console.log(`A ${item} is $12.`);
        break;
    case 'Socks'.toLowerCase():
        console.log(`${item} are $2.`);
        break;
    default:
        console.log('Invalid Item');
        break;
}

// ---------------- Random number between 50-100 ------------------
// --> + 51 instead of 50 to make sure 100 is included.

let randomNumber = Math.floor(Math.random() * 50 + 51);
console.log(`This is a random number between 50-100: ${randomNumber}`);