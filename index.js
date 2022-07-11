

/*let a1 = 94;
let a2 = 120;
let a3 = 103;

let l1 = 116 ;
let l2 = 94;
let l3 = 123;

let m1 = 97;
let m2 = 134;
let m3 = 105;
*/



let a1 = 100;
let a2 = 120;
let a3 = 113;

let l1 = 106 ;
let l2 = 104;
let l3 = 123;

let m1 = 107;
let m2 = 134;
let m3 = 85;

let avgALeeza = (a1+a2+a3)/3;
let avgLis = (l1+l2+l3)/3;
let avgMary = (m1+m2+m3)/3;



console.log('the average of team Aleeza is ', avgALeeza);
console.log('the average of team Lis is ', avgLis);
console.log('the average of team Mary is ', avgMary);


if( avgALeeza > avgLis && avgALeeza > avgMary){

    console.log(`Team Aleeza  won with avg score of ${avgALeeza}!!`);
} 
else if( avgLis > avgALeeza && avgLis > avgMary){
    console.log(`Team Lis won with avg score of ${avgLis}!!`);
}

else if( avgMary > avgALeeza && avgMary > avgLis){
    console.log(`Team Mary won with avg score of ${avgMary}!!`);
}

else{
    console.log('its a draw!!');
}