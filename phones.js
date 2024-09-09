
function getCheapestPhon(array){
let min =phones[0];
for(let phone of phones){
    if(phone.price<min.price){
        min=phone;
    }
}
return min;
}


const phones=[
    {name:"samsung",price:56000,camera:"12mp",colour:"black"},
    {name:"oppo",price:89000,camera:"12mp",colour:"black"},
    {name:"walton",price:10000,camera:"12mp",colour:"black"},
    {name:"vivo",price:5000,camera:"12mp",colour:"black"},
    {name:"xiami",price:98000,camera:"12mp",colour:"black"},
]
let result =getCheapestPhon(phones);
console.log(result.name);