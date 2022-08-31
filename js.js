let a=``;
let b=``;
let c=``;
let s=0;
let signs=``;
let finish=false;




const screen=document.querySelector(`.downScr`)
const upScreen=document.querySelector(`.upScr`)
console.log(screen)

let numb=document.querySelectorAll(`.numbers`);
numb=Array.from(numb);
let sign = document.getElementsByClassName(`sign`);
sign=Array.from(sign);
const dlt = document.getElementById(`delete`);


//Ввод a и b
numb.forEach(button => {
    button.addEventListener(`click`,function(){
      
      if(a>99999999){
        alert(`введено максимальное число,ваше число будет обрезано на 1 знак`)
        upScreen.innerHTML=a=a.slice(0,-1);
        
      }
      else if(b>99999999){
        alert(`введено максимальное число,нажимайте равно`)
        screen.innerHTML=b=b.slice(0,-1);
      }
        else if ( b===`` && signs===`` && c===`` ) {
            a+=button.id;
            screen.textContent=a;
            console.log(a,b,signs,`1 условие`)            
          }
          else if(b===`` && signs===`` && finish){
            a=``;
            c=``;
            a+=button.id;
            finish=false;
            screen.textContent=a;
            console.log(c, `условие 2`)
          }
          else if(a!=='' && b!==`` && finish){
            b+=button.id;
            finish=false;
            screen.textContent=b;
            console.log(b,`3 условие`);
          }
          else {
            b+=button.id;
            screen.innerHTML=b;
            console.log(a,b,signs+`условие 4`)
          }
          
 }) 
});
// Ввод знака
sign.forEach(button => {
    button.addEventListener(`click`,function(){
          if(signs===`` )  {
            signs=button.id;
            upScreen.innerHTML=a+signs;
            s=0;
          console.log(a,b,signs,`введен знак`)}

      else if(b===``){
        signs=button.id;
            upScreen.innerHTML=a+signs;
            s=0;
        
      }
      else{
        switch(signs){
        case `+`:
            a=(+a)+(+b);
            
            break;
            case `-`:
            a=(+a)-(+b);
            
            break;
            case `*`:
            a=(+a)*(+b);
            
            break;
            case `/`:
            a=(+a)/(+b);
            break;}
            s=0;
      b=``;
      signs=button.id;
      upScreen.innerHTML=a+signs;
      screen.innerHTML=``;

      console.log(a,b,signs,`ты рядом`)
      }
  
      })
           }) 

// кнопка очистки

const clear=document.getElementById(`clear`);
clear.addEventListener(`click`,function(){
     a='';
     b=``;
     c=``;
     signs='';
     finish=false;
     screen.innerHTML=0
     upScreen.innerHTML=``;
}) 

const equals= document.getElementById(`equals`);
equals.addEventListener(`click`,function(){
    if(b===``){b=a;};
switch(signs){
    case `+`:
        a=(+a)+(+b);
        
        break;
        case `-`:
        a=(+a)-(+b);
        
        break;
        case `*`:
        a=(+a)*(+b);
        
        break;
        case `/`:
        a=(+a)/(+b);
        break;
}
s=1;
b=``;
console.log(a,signs,b)
finish=true;
upScreen.innerHTML=a+signs;
screen.innerHTML=``;
c=`1`;
});






   





