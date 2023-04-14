// var arr1 = [
//     20,
//     25,
//     26,
//     29,
//     100
// ]

// var concatArray = arr1.filter(item => item > 24);
// console.log(concatArray);

// var getNumber = document.getElementById('number');
// var btnFilter = document.getElementById('btn');

// console.log(getNumber.value);

// btnFilter.onclick = function()
// {
//     console.log(getNumber.value);
//     console.log(typeof parseInt(getNumber.value));
//     console.log(Math.max(...arr1));
//     console.log(typeof Math.max(...arr1));
//     console.log(parseInt(getNumber.value) > Math.max(...arr1));
//     if(getNumber.value > Math.max(...arr1)){
//         document.getElementById('text').innerHTML = 'Không có số nào lớn hơn các số trong mảng';
//     }
//     var value = arr1.filter(item => item >= getNumber.value);
//     document.getElementById('text').innerHTML ='Các số trong mảng lớn hơn là: '+ value;
// }
    


// function checkAge(age){
//     console.log(age);
//     return age > 25
// }

function mystery(...a){
    return a;
}

let a = mystery(1,23,4)
console.log(a)
// var RandomNumber = Math.floor(Math.random() * 20) + 20;
// console.log(RandomNumber);
 
// function total(a,b){
//     var x = a + b;
//     return x;
// }

// var x = total(5,6);
// console.log('Tổng hai số a và b là : '+total(5,6));