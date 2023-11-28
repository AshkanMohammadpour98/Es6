//ابجکت ها مقدار های کلید مقدار راند میتونیم داخلشون متد و حتی
//  ابجکت های توردر تو هم داشته باشیم

//-----useing object leteral => معمولا از این روش  استفاده میشه
// const person = {
//     name : "milad",
//     lastName : "karime",
//     age : 28,
//     coding : function(){
//         console.log("milad is coding");
//     },
//     skills : {
//         html : 100 ,
//         css : 90 ,
//         js : 80 ,
//         php : 80
//     }

// }

// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.coding);
// console.log(person.skills);
// console.log(person.skills.css);


//------ create object instance ------
//روش دوم ساخت ابجکت با نمونه  یا از روی  متد ابجیکت ابحکت ساختن یا نمونه برداری
//  const person = new Object({
//         name : "milad",
//     lastName : "karime",
//     age : 28,
//     coding : function(){
//         console.log("milad is coding");
//     },
//     skills : {
//         html : 100 ,
//         css : 90 ,
//         js : 80 ,
//         php : 80
//     }
//  })
//  console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.coding);
// console.log(person.skills);
// console.log(person.skills.css);

// ----- create constractor function object یعنی با استفاده از تابع سازنده ----
//توی این روش بهتره که کانسرکتور فانکشنمون رو با اسم بزرگ بنوسم
//از کمه کلیدی اسفتاده میکنیمthis
function PersonInfo (){
    this.name = "milad",
    this.lastName = "karime",
    this.age = 28,
    this.coding = function(){
        console.log("milad is coding");
    },
    this.skills = {
        html : 100 ,
        css : 90 ,
        js : 80 ,
        php : 80
    }
}
// از کانسترکتور فاکنکشنی که ساختیم نمونه یکی جدید درست میکنیم
const person = new PersonInfo();
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person["name"]);
console.log(person.coding);
console.log(person.skills);
console.log(person.skills.css);