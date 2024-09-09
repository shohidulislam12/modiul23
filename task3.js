 //Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk



function calculateElectronicsBudget(laptop,tablets,mobile) {
     const tlaptop =  35000*laptop ;
     const  ttablet = 15000*tablets ;
     const   tmobile =mobile*20000;
      const result= tlaptop+ttablet +tmobile;
      return result;

}
console.log(calculateElectronicsBudget(2,2,2));