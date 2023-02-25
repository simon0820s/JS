const base=document.getElementById("base");
const expo=document.getElementById("exponent");
const btn=document.getElementById("calculate");
const result=document.getElementById("result");

btn.addEventListener("click",calculate);

function calculate(){
    const b=parseFloat(base.value);
    const e=parseFloat(expo.value);

    if (isNaN(b)||isNaN(e)){
        result.innerHTML="Error!!";
    }
    else{
        const res=Math.pow(b,e);
        result.innerHTML=b+"ʌ"+e+" = "+res;
    }
}

