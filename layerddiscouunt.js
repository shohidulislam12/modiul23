//multilayer discouunt
// 100-----no disscount
//100-200-----90taka
//200+---70tk

function multilayer(quantity){

const frist100price=100;
const second100price=90;
const remining100price=70;
if(quantity<=100){
 const total=quantity*frist100price;
 return total;
}
else if(quantity<=200){
 const total=100*frist100price+ (quantity-100)*second100price;
 return total;
}
else if(quantity>200){
 const total=100*frist100price+100*second100price+(quantity-200)*remining100price;
 return total;
}
}

const result=multilayer(400);
console.log(result);