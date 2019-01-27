"use strict";

//self executing anonumous function
//IIFE immediately invoked function Expression

(function (){
let myFunctionalVariable = 0;

function Start() {
 
    console.log(`%c App Started...`,
    "font-size: 20px; color:blue;"
    );
}
window.addEventListener("load", Start)
})();
