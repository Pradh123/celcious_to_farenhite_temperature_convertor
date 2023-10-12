const first=document.getElementById('first');
const second=document.getElementById('second');
const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
   var cel= Number(first.value);
   var far=cel*(9/5)+32;
  second.value=far;
  first.value="";
})
first.addEventListener('focus',()=>{
    second.value="0";
})