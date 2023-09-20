var feet=document.getElementById('feet');
var inches=document.getElementById('inches');


feet.addEventListener('input',function(){

let f=this.value;
let i=f*12;
inches.value=i;
});



inches.addEventListener('input',function(){

    let i=this.value;
    let f=i/12;

//here isInteger is method which looks inside f variable weather our element is integer or not    
if(!Number.isInteger(f)){ //if number is not integer means not a complete number,eg 1.2,0.5,5.7 this are non integer numbers
    f=f.toFixed(2);    //tofixed is inbuilt method which gives you how many numbers u want after decimal point,eg if ur getting result 2.833333333 
}                      //and u want only 2 digit after decinal then by using this method u will get only 2 number after decimal which is 2.83
 feet.value=f;
});