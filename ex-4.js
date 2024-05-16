// Exercise #4: Displaying Restaurant Name
// สมมุติว่าเรามี Variable ตั้งต้น restaurantNames ที่บรรจุรายชื่อร้านอาหารที่เปิดให้ใช้บริการภายในห้าง ดังนี้ ["KFC", "Momo Paradise", "Nabezo"]
// วันหนึ่งทางห้าง ต้องการโปรโมทชื่อร้านอาหารต่างๆบนหน้าเว็บไซต์
// ทางห้างต้องการให้ใส่คำว่า "Restaurant Name:" กำกับไว้ข้างหน้าชื่อร้านอาหารทุกร้าน
// เช่น "Restaurant Name: <ชื่อร้านอาหาร>"
// ให้เขียนโปรแกรมที่สามารถเพิ่มคำว่า "Restaurant Name:" ไว้ข้างหน้าชื่อร้านอาหารทุกร้าน
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// ["Restaurant Name: KFC", "Restaurant Name: MOMO PARADISE", "Restaurant Name: Nabezo"]


let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

for(let i=0;i<restaurants.length;i++){
    newRestaurants[i] = "Restaurant Name: " + restaurants[i];
}

// for(let name in restaurants){
//     newRestaurants[name] = "Restaurant Name: " + restaurants[name];
// }
console.log(newRestaurants);
