"use strict";

//self executing anonumous function
//IIFE immediately invoked function Expression

(function (){
let myFunctionalVariable = 0;

function Start() {
    let myLocalVariable =0;
    console.log(`App Started...${myFunctionalVariable}`);
}
window.addEventListener("load", Start)
})();
