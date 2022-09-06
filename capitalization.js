const firstName = "rasmus";

const first = firstName.substring(0,1);

const uppercase = firstName.substring(0,1).toUpperCase(); 

console.log(firstName.replace(first, uppercase));


function capitalize(str){
    const first = str.substring(0,1);
    
    const uppercase = str.substring(0,1).toUpperCase(); 
    
    // console.log(str.replace(first, uppercase));
    return str.replace(first, uppercase)
    }

capitalize("bob");

const anotherName = "bamse"

capitalize(anotherName);




const name = "pETer";
const cap = capitalize( name );
console.log( `This is ${cap}` );