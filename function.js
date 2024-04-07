// //Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm)verilir. Pul bərabər hissələrə bölünərək hər ay verilməlidir. Məs:1000 manat götürülür, 3 ayliq.Ekrana yazdirilmalidir: 1-ci ay 333manat, 2-ci ay 333manat, 3-cu ay 334 manat;

let kredit = parseInt(prompt("Kredi meblegini daxil edin:"));
let ay = parseInt(prompt("Nece aya bolunecek?"));
let aylig = kredit / ay;
for (var i = 1; i <= ay; i++) {
    console.log(`${i}ci ay odenilecek ${aylig}`)
}




//Reqemlerden ibaret arrayda duplicate reqemi qaytarin (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. Arrayde yalniz bir eded duplicate olacaq) : 
//let myArr =  [1,3,4,2,2] // this is example. funksiya qaytarmalidir 2; Cunki 2 iki defe yazilib;
//let myArr =  [1,3,4,4,]; funksiya qaytarmalidir 4; cunki 4 iki defe yazilib.


// function duplicate(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] == array[j]) {
//                 return array[i];
//             }
//         }
//     }
//     return null; 
// }
// let array1 = [1, 23, 42, 36, 42];
// let array2 = [21, 43, 90, 21];

// console.log("Tekrar edenin sayi:", duplicate(array1)); 
// console.log("Tekrar edenin sayi:", duplicate(array2));



// //Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.

// function fahrenheitToCelsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }
// console.log(fahrenheitToCelsius(80));

