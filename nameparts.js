///////// First exercise

// const fullName = "Albus Percival Wulfric Brian Dumbledore";

// const middleNameStart = fullName.indexOf(" ");
// const middleNameEnd = fullName.lastIndexOf(" ");

// const middleName = fullName.substring(middleNameStart+1, middleNameEnd);


// Another solution but only works for 3 name names
// const firstName = fullName.split(" ")[0];
// const middleName = fullName.split(" ")[1];
// const lastName = fullName.split(" ")[2];


///////// Second exercise

// function getNameParts(fullName) {
//     const firstName = fullName.indexOf(" ");
//     const lastName = fullName.lastIndexOf(" ");

//     const middleName = fullName.substring(firstName+1, lastName);

//     console.log(middleName);
// }

// getNameParts("John Peter Frank Bob");


///////// Third exercise

function fullName(lastName, firstName, middleName) {
    let fullname;

    if (arguments.length == 2) {
        fullname = `${firstName} ${lastName}`
    } else {
        fullname = `${firstName} ${middleName} ${lastName}`
    }
    console.log(fullname);
}

fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Harry", "Potter");
fullName("Potter", "Harry", "James", "Pottypotpot");