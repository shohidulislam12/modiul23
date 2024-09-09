//Find the friend with the smallest name.
const friends= ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmall(array){
  let min=array[0];
  /*for(let i=0;i<array.length;i++){
   if(array[i].length<array[0].length){
    min=array[i]
   }
  }*/
 for(let friend of friends){
    if(friend.length<array[0].length){
        min=friend;
    }

 }
return  min;
}
const small=getSmall(friends);
console.log(small);