const products=[
{name:"shampo",price:300,  quantity:2 },
{name:"chironi ",price:600,quantity:3 },
{name:"shirt",price:700,   quantity:4 },
{name:"pant",price:800,    quantity:5 },

]
 function totalShopping(array){
           let sum=0;
           for(let product of products){
               sum=sum+product.price*product.quantity;

           }
   return sum
 }
 let result=totalShopping(products);
 console.log(result);