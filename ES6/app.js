//Terneary operator
//دستور شرطی که تو اکما اسکریپت  شیش اومد 
//عمل گر سه تایی سه گانه هم بهش میگن

// let age = 25
//// if else
// if (age > 18){
//     //کدهایی که درصورت درست بودن شرط
//     alert('سن از 18  بزرگتر است')
// }else{
//     //کدهایی که درصورت درست نبودن شرط
//     alert('سن از 18  کوچکتر است')
// }

////terneary operator
// let age = 25
// age > 18 ? alert('سن از 18 بزرگتر است') : alert('سن از 18 کوچکتر است')


// ------------------------------ back-tics syntax -----------------
//Template Literals
//Template String
//Back-Tics Syntax

//درواقع این سه تا دارن به یه موضوع اشاره میکنند اگه سایتای مختلف دیدین هر سه یه چیزن
//که در اکما اسکریپت شیش  این ` ` اومد
//برای نمایش دادن رشته ها استفاده میشه همونطور که میدونیم میتونم از " " و ' ' استفاده کنیم
// و هم از بک تیک ` `  هلا این تفاوتش چیه؟ وقتی بخوایم کد ج اس داخل یه استرینگ بنویس
//نکته دوم هرطور که داخل بکتیک بنویسم تو خروجی هم همینطوره یعنی اگه فاصله یا اینتر داشته باشیم هم همونطوری نشون داده میشه

// console.log(`milad 
// bahrami
// `);

// let name = 'milad'
// let age = 26
// console.log(`is ${name} age:${age}`);


// ------------------------ module consept ------------
//معنی ماژول   یعنی قطعه بخش فرض کنید که شما یه کتاب از فصل های مختلفی درست شده 
// همونطور که یه کتاب به بخش ها مختلفی تقسیم شده یه برنامه جی اس هم میتونه به بخش های مختلفی تقسیم بشه
// که به هرکدوم از اون بخش یا قطعه میگیم ماژول پس ماژول یه قطعه یا بخش از یه چیز بزرگتره
//وقتی کد های برنامه ما زیاد میشه  دیگه نمیتونیم همه کد ها روداخل یه فایل قرار بدیم 
//چون نگهداری وتوسعه برنامه رو کم میکنه راه حل اینه که برنامه مون رو به قسمت های کوچکتر تبدیل کنیم

// نکته!
//مبحث ماژول ها چون باید داخل چند فایل جی اس داشته باشیم و درک بهتر این قسمت های این فصل دیده شود


//---------------- arrow function ------------------

// const myFunc = (sum1 , sum2)=>{
//     return sum1 + sum2;
// }
// console.log(myFunc(10 , 15));

// اگه فقط یه مقدار وردی داشته باشیم میتونیم اون پرانتز ها رو هم حذف کنیم
// اگه فقط یک خط کد ساده داشته باشیم میتونیم اون برکت ها رو هم برداریم

// const myFunc2 = name => `name : ${name}`;
// console.log(myFunc2('ali'));

//اگه بخوایم داخل  اون ارو فانکشن مون تو یه خط یا چند خط یه چیزی رو ریترن کنیم اینطوری مینویسم
// این پرانتز رو میزاریم تا فکر نکنه مفسر جی اس که این براکت ابجیکت مال اون ریترن نیست و این کد ریترن بشه
// const myFunc3 = ()=> ( {id: 1 , firstName : 'ali'} );
// console.log(myFunc3());


// ------------------------- rest operator---------------------
//وقتی که یه تابع یا فانکشن داریم  با تعداد ورودی های نامشخص و میخوایم که 
//موقع صدا زدن فانکشن هر تعداد وردی که بهش دادیم رو جمع کنه ممکنه 2 تا یا 4 تا باشه
//ولی خب برای جمع یا منها یا غیر حداقل باید از دوتا ورودی بیشتر باشه و از عملگر rest استفاده میکنیم
//...resst موقع تعریف فانکشن اینطوری مینویسم هالا این اسم دلخواه است و چیزی که برمیگردونه یه ارایه هست که مقادیری که وارد کرده توی ارایه ذخیره میشن
// کاری که این اپراتو میکنه میاد ورودی هارومیگیره موقع صدا زدن و همه رو داخل یه ارایه و تعویل میده

// function sum (...milad){
//     console.log(milad); //[5 , 10 , 15]
// }
// sum(5 , 10 , 10)

// پس اینطوری تونستیم یه تابع داشته باشیم که تعداد رودی هاش نامشخصه
// و هر چند تا وردی داشته باشه میتونیم عملیات که میخوایم رو روشون انجام بدیم

// function sum2 (num1 , num2 , ...milad){
//     console.log(num1 , num2 , milad); // 20 10 [10 , 30 ,5]
// }
//تو این حالت  مقدار اول میره تو نام یک و مقدار دوم میره تو نام دوم و از 
// اون به بعد هر مقدار وردی که داشته باشیم میره تو میلاد و بصورت یه  ارایه 
// sum2(20 , 10 , 10 , 30 , 5);


//  هم استفاده کینیمarrow function میتونیم همین اپراتور رو توی 
// let sum3 = (...arguments)=>{
//     console.log(arguments); //[10,40,20,10,5]
// }

// sum3(10 , 40 , 20 , 10 , 5)



// --------------------------------- spread operator ----------------------
//کاری که این عملگر میکنه میگه هرچی داخل این ارایه
//  یا ابجکت هست رو  سه نقطه و اسم اون ارایه یا ابجیکت هرچی که داخلش هست رو مقدار داخلش رو میده

//فرض کنید که ما دوتا ارایه داریم و میخوایم یه ارایه جدید درست کنیم 
// و مقدار های داخل ایندوتا ارایه رو  داخل اون ارایه جدید قرار بدیم


// let array1 = [1 , 2 , 3];
// let array2 = [4 , 5 , 6];

//شاید فکر کنید که اینطوری کنیم ولی اینطوری تو در تو میشه ارایه ها 
// let array3 = [array1 , array2] //[[1 ,2 ,3] , [4 ,5 , 6]]

//ما میخوایم همه اون اعداد داخل دوتا ارایه رو توی یه ارایه جدید بزاریم پس از اسپرید اپراتور استفاده میکنیم
// let arrays = [...array1 , ...array2] // [1 ,2 , 3 , 4 , 5 , 6]


// let obje1 = {
//     name : 'milad',
//     lName : 'bahrami'
// }
// let obje2 ={
//     fav :'fotbal',
//     color : 'red'
// }

// let obje3 = {...obje1 , ...obje2};
// console.log(obje3); //{name : 'milad' , lName:'bahrami' , fav : 'fotbal' , color : 'red'}



// ----------------------------------------- array destructuring ----------------------------

// array destructuring تخریب کردن ارایه
//ignore in array destructuring
//default values

//کاری که انجام میده میتونیم هرکدوم ار از اعضای ارایه رو درون متغیری که میخوایم ذخیره کنیم
// یا اینکه اون عضوی که میخوایم رو تخریب کنیم بریزیم تو یه متغیر

let array = ['milad' , 26 , true , {name : 'ali'} , 'reza'];

let [item1 , , item2 , ...item3] = array;
//کاری که اینجا انجام دادیم اینطوری بوده که ایتم یک میلاد داخلش  ذخیره میشه
// و یه اگنور یا مقدار عدد 26 رو درنطر نگرفتیم و ترو میشه ایتم 2
// و اومدیم از روش اسپرد استفاده کردیم و گفتیم هرچی مانده بود داخل ایتم سه قرار بده  که یه ارایه میده که هرچی هست توش ذخیره میشه

console.log(item1 , item2 , item3);  // milad 26 [{name : 'ali'} , reza]
