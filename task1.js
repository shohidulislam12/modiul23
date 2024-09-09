//Find the lowest number in the array below.

function getHeights(array){
    let max=array[0];
      for(let number of array){
        if(number>array[0]){
            max=number;
        }
      }
      return max;

}


const heights2 = [167, 190, 1207, 165, 137];
const result=getHeights(heights2);
console.log(result);