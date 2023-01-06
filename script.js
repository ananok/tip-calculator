const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tipAmount = document.querySelector(".tip");
const totalAmount = document.querySelector(".total");
const tips=document.querySelectorAll(".btn")
const resetBtn = document.querySelector(".reset");
const custom = document.querySelector("#custom");
const error=document.querySelector("#error")

bill.addEventListener('input', billfunction)
people.addEventListener('input', peoplefunction)
tips.forEach(function (e) {
    e.addEventListener('click', handleClick)
});
custom.addEventListener('input',customfun)
resetBtn.addEventListener("click",reset)

bill.value=""
people.value=""
custom.value=""


tipAmount.innerHTML="$0.00"
totalAmount.innerHTML="$0.00"


let billvalue;
let peoplevalue;
let tipvalue;
let customvalue;

function reset(){
    bill.value="0.0"
    people.value="0"
    custom.value="Custom"
    tipAmount.innerHTML="$0.00"
    totalAmount.innerHTML="$0.00"
    tips.forEach(function(e){
        e.classList.remove("active-tip")})
    error.style.display="none"
}

function customfun(){
    customvalue=parseFloat(custom.value)/100
    calculate()
}
function billfunction(){
    billvalue=parseFloat(bill.value)
    calculate()
}

function peoplefunction(){
    peoplevalue=parseFloat(people.value)
    calculate()
    
}

function handleClick(event){
tips.forEach(function(e){
    e.classList.remove("active-tip")
    if (event.target.innerHTML==e.innerHTML){
        e.classList.add("active-tip")
        tipvalue=parseFloat(e.innerHTML)/100
    }
})
calculate()
}

function calculate(){
    if (people.value<=0){
        error.innerHTML="Can't be Zero"
        error.style.color="#E17457"
    } else if (custom.value==""){
        error.style.display="none"
        let tipCalc=(billvalue * tipvalue) / peoplevalue
        let totalCalc=(billvalue + (billvalue * tipvalue)) / peoplevalue
        tipAmount.innerHTML="$"+(tipCalc).toFixed(1)
        totalAmount.innerHTML="$"+(totalCalc).toFixed(1)
    }else {
        error.style.display="none"
        let tipCalc=(billvalue * customvalue) / peoplevalue
        let totalCalc=(billvalue + (billvalue * customvalue)) / peoplevalue
        tipAmount.innerHTML="$"+(tipCalc).toFixed(1)
        totalAmount.innerHTML="$"+(totalCalc).toFixed(1)
    }
}