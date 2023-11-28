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
// function PersonInfo (){
//     this.name = "milad",
//     this.lastName = "karime",
//     this.age = 28,
//     this.coding = function(){
//         console.log("milad is coding");
//     },
//     this.skills = {
//         html : 100 ,
//         css : 90 ,
//         js : 80 ,
//         php : 80
//     }
// }
// از کانسترکتور فاکنکشنی که ساختیم نمونه یکی جدید درست میکنیم
// const person = new PersonInfo();
// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.coding);
// console.log(person.skills);
// console.log(person.skills.css);

// 

//----- پارامتر های وردی در تابع سازنده constractor function
//دقت کنید که ما وقتی یک تابع سازنده کانسترکتورفانکشن داریم میتونیم هر تعداد که بخواییم از روی اون درست کنیم
// function PersonInfo(name = 'milad' , age = 26){
//     this.name = name,
//     this.age = age,
//     this.coding = function(){
//         console.log(`${this.name} is coding`);
//     }
// }

// let person1 = new PersonInfo('ali' , 'shadian');
// console.log(person1);

// let letperson2 = new PersonInfo() //اینجا مقدار وردی رو بهش ندادیم و از همون پیشفرض ها  استفاده مشه
// console.log(person12);

//-------کلاس چیست؟  class----
//ES6 => 2015 یه جاوا اسکریپت اضافه شد
//طرح یا نقشه یه ساختمان ما از روی اون طرح و نقشه میتونیم ساختمان رو بسازیم 
// این طرح یا نقشه معادل مفهوم کلاس در جی اس است و اون خونه ای که از روی نقشه ساخته میشه معاد شی یا ابجیکت هست
// پس متوجه شدیم با این مثال که ابجیکت ها رو از روی کلاس میسازیم
//توی ظرح یا نقشه ساختمان اطلاعات زیادی درمورد ساختمان وجود داره
// مثلا ساختمان چند طبقه است در ها باید کجا قرار بگیره پنجره هاو غیره براساس طرح یا نقشه اون ساختمان رو میسازن
// همونطور که میتونیم از روی یک نقشه یک ساختمان رو بسازیم توی جی اس هم وقتی ما یه کلاس داری ممیتونیم از روی اون کلاس چندین ابجیکت درست کنیم
//برای ساخت کلاس کلمه کلیدی class
// و یه اسم براش میزاریم اسمی که میزاریم حرف اولش باید بزرگ باشه

//سینتکس کلی و سادش به همین شکله
// class ClassName{
//     constructor(){
//         //code
//     }
// }
// let new ClassName()


