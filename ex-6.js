// Exercise #6: Reverse the String
// สมมุติว่าเรามี Variable ตั้งต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp Thailand"
// ให้เขียนโปรแกรมในการเรียงตัวอักษรกลับด้าน
// เช่น "abcd" จะกลายเป็น "dcba"

// "dnaliahT pUhceT" 



let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for(let i=(companyName.length)-1;i>=0;i--){
    reversedCompanyName += companyName[i];
};

// for(let letter in companyName){
//     reversedCompanyName = companyName[letter] + reversedCompanyName;
// };

console.log(reversedCompanyName);
