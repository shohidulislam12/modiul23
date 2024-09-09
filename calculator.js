function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function divid(num1,num2){
    return num1/num2;
}
function remain(num1,num2){
    return num1%num2;
}
function calculator(a,b,operation){
    if(operation==="add"){
        const result=add(a,b);
        return result;
    }
    if(operation==="sub"){
        const result=sub(a,b);
        return result;
    }
    if(operation==="mul"){
        const result=mul(a,b);
        return result;
    }
    if(operation==="divid"){
        const result=divid(a,b);
        return result;
    }
    if(operation==="remain"){
        const result=remain(a,b);
        return result;
    }
}


console.log(calculator(34,23,'remain'));