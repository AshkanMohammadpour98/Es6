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

//----متد سازنده (cnstractor method) در کلاس ها----
//متد هایی که داخل کلاس مینویسم مثل متد ها داخل اشیا یا ابجکت ها هستند
//فقط ما داخل کلاس یه متد به اسم constracrot داریم که متد خاصی است و بقیه متد ها عادی هستن
// class ClassName {
//     constructor(){////code}
//     method1(){////code}
//     method2(){////cdoe}
// }

//چند تا نکته درمورد این متد کانسترکتور وجود داره که باهم برسی میکنیم
//1-هربار که ما بیاییم از این  کلاس یک شی جدید رو درست کنیم این متد کانسترکتور یک بار بصورت اتوماتیک اجرا میشه و فراخوانی میشه
//2- اسم این متد دقیقن باید همین باشه  constractor
//3-کابربد این متد سازنده کا کانسترکتور چیست
//یک ابجکت رو درنطر بگیرید یه سری پراپرتی مثلا نام و سن داره  و مثلا نام  مقدارشو میلاد و غیره گزاشتیم
//توسط این متد سازنده کانستکتور ما میتونیم به  پراپرتی ها ی ابجکتی که داریم مقدار دهمی اولیه بدیم
//4-اگه ما متد کانسترکتور رو ننویسیم خود جی اس بصورت اتومات خود این متد کانسترکتور خالی رو میسازه ماشاید نبینیم ول در پس زمینه میسازه که کدی داخلش نیست
//5-کلا متد هایی که داخل کلاس میسازیم دقیقن مثل متد های عادی رفتار میکنن و میتون ورودی بگیرن و غیره
//کلاس ها توی جی اس خیلی شباهت به کانستراکتور فانکشن ها دارن که تو قسمت های قبل بهاش  کار کردیم

//کلمه  کلیدی  this را برای پراپرتی های دیگه فقط داخل 
//متد کامنستراکتور قرار میدهیم و جاهایی که نیاز به اون پراپرتی های  کانسترکتور داریم
// در بقیه  متد ها کلمه دthis را نمیخوایم

// class Person {
//     constructor(name = 'مشخص نشده' , age = 18){
//         this.name = name,
//         this.age = age
//     }
//     codeng(){
//         return `${this.name} is coding.`
//     }
// }

// const person1 = new Person('ali' , 29);
// console.log(person1);

// const person2 = new Person('ashkan' , 27)
// console.log(person2.codeng());

// const person3 = new Person()
// console.log(person3);


//-----یک مثل از کلاس ها example class -----
//خاطرمون باشه که کار کانسترکتور مقدار دهی کردن  پراپرتی های ابجیکت ها هستش

// class Car {
//     constructor(car_name , car_Year , car_color){
//         this.name = car_name ,
//         this.year = car_Year,
//         this.color = car_color
//     }

//     age(){
//         let d = new Date();
//         return d.getFullYear() - this.year
//     }
//     info(){
//         return `
//         carName : ${this.name}
//         carColor : ${this.color}
//         carAge : ${this.age()}
//         `
//     }
// }

//this.name ? اشاره میکنه به اون رودی که موقعی که داریم new Car درست میکنیم
//درواقع پراپرتی های ابجکتی هستن که  از روی کلاس کار ساخته میشه
//car-name ? اشاره میکنه به ورودی کانسترکتور
//البته اینا میتونن همنام هم باشن

// const car1 = new Car('mazda3' , 2015 , 'red');

// console.log(car1)
// console.log(car1.info());
//از همین کلاس ماشین میتونیم هرچندتا که خوایم درست کنیم


//----------------- class inheritance  ارث بری در کلاس ها ---------------------

//هر چیزی که توی دنیای واقعی داریم رو میتونیم تبدیل به یه ابجیکت یا شی در جی اس تبدیل کنیم
//مثلا یه انسان  رو اگه یه  شی درنطر بگیریم
//یه سری ویژگی ها  داره مثل قد  وزن کد ملی و .. 
//و یه سری رفتار ها ییم داشته باشه اون فعلی که میتونه انجام بده مثل خابیدن راه رفتن مطالعه کردن
// و نکته بعدی همونطوز که یه انسان میتونه یه سری چیزا رو  به ارث ببره
//کلاس ها  هم از هم میتونن ارث بری کنن

//JavaScript class inheritance

//extends
//super

class Person {
    constructor(name , age ){
        this.name = name,
        this.age = age
    }
    awake(){
        return `${this.name} بیدار شد`
    }
}

class Student extends Person{
    constructor (name , age , field , school){
        super(name , age)
        this.field = field
        this.school = school
    }
    doHomeWork(){
        return ` فلانی تکالیفش را انجام داد`
    }
}

class Athlete extends Person{
    constructor(name , age , sportField){
        super(name , age)
        this.sportField = sportField
    }
    infoAthlete(){
        return `${this.name} در رشته ورزشی ${this.sportField}  فعالیت میکند`
    }
}

const p = new Student('علی ' , 25 , 'کامپیوتر' , 'حافظ');
console.log(p);
console.log(p.awake());
console.log(p.doHomeWork());

const pSport = new Athlete('محمد رضا' , 21 , 'سخره نوردی');
console.log(pSport);
console.log(pSport.infoAthlete());