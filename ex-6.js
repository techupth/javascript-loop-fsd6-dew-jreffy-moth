// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// for (let i = companyName.length - 1; i >= 0; i--) {
//     reversedCompanyName += companyName[i];
// }

for(let letter of companyName){
    reversedCompanyName = letter + reversedCompanyName;
 };

console.log(reversedCompanyName);
