//ابجکت ها مقدار های کلید مقدار راند میتونیم داخلشون متد و حتی
//  ابجکت های توردر تو هم داشته باشیم

//useing object leteral => معمولا از این روش  استفاده میشه
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

// ---------- create object instance------
//روش دوم ساخت ابجیکت
const person = new Object(
        name : "milad",
    lastName : "karime",
    age : 28,
    coding : function(){
        console.log("milad is coding");
    },
    skills : {
        html : 100 ,
        css : 90 ,
        js : 80 ,
        php : 80
    }
)
console.log(person);