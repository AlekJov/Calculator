const btns = document.querySelectorAll(".btn");
const scree = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

for (let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    let number = btns[i].getAttribute("data-num")
scree.value += number
})
}


equalBtn.addEventListener("click", function(){
if (scree.value === ''){
  alert('imuput is empty');
}else{
  let value = eval(scree.value);
  scree.value = value;
}
})

clearBtn.addEventListener('click', function(){
  scree.value = '';
})
