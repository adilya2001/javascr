"use strict";

if(4 == 9){
    console.log('ok');
}
else{
    console.log('wrong');
}



// if(num < 49){
//     console.log('error');
// }
// else if(num > 100){
//     console.log('lot');
// }
// else{
//     console.log('ok');
// }

// (num == 50) ? console.log('ok') :  console.log('error');
const num = 50;
switch (num) {
 case 49:
     console.log('wrong');
     break;
     case 100:
     console.log('wrong');
     break;
     case 50:
     console.log('ok');
     break;
     default:
        console.log('loose');
        break;
}