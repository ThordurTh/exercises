const fullName = "Albus Percival Wulfric Brian Dumbledore";

const middleNameStart = fullName.indexOf(" ");
const middleNameEnd = fullName.lastIndexOf(" ");

const middleName = fullName.substring(middleNameStart+1, middleNameEnd);


// Another solution but only works for 3 name names
// const firstName = fullName.split(" ")[0];
// const middleName = fullName.split(" ")[1];
// const lastName = fullName.split(" ")[2];