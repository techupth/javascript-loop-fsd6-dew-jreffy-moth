// Exercise #5: Concatenate the Alphabets
// สมมุติว่าเรามี Variable ตั้งต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp"
// ให้เขียนโปรแกรมที่บอกลำดับตัวอักษรภาษาอังกฤษแต่ละตัว ว่าเป็นตัวอักษรตัวที่เท่าไหร่
// โดยมีรูปแบบการเขียนแบบนี้ "Number <ลำดับ> character is <ตัวอักษร>"
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

//   Number 1 character is T
//   Number 2 character is e
//   Number 3 character is c
//   Number 4 character is h
//   Number 5 character is U
//   Number 6 character is p


let companyName = "TechUp";

for(let i=0;i<companyName.length;i++){
    console.log(`Number ${i+1} character is ${companyName[i]}`)
}

// for(let letter in companyName){
//     console.log(`Number ${Number(letter) + 1} character is ${companyName[letter]}`)
// }

// Start coding here
