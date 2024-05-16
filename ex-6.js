// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let split in companyName) {
  reversedCompanyName += companyName[companyName.length - 1 - split];
}

console.log(reversedCompanyName);
