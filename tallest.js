
function getMax(array){
 let max=array[0];
for(let i=0;i<array.length;i++){
if(array[i]>max){
    max=array[i];
}

}

return max;
}


const height=[43,45,65,66,87]
console.log(getMax(height));