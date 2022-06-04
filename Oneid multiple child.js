console.log("Welcome to Programiz!");
const input= [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "carrot" },
  { id: 1, name: "donut" },
  { id: 3, name: "fries" },
  { id: 1, name: "apple" },
  { id: 3, name: "carrot" },
  { id: 1, name: "donut" }
];
let output=[];
let i=0;
let j=0;
input.map((inp)=>
{if(i==0){
 output.push({id:inp.id,names:[]});
 i=1;
}else{
   output.map((outp)=>{
      if(inp.id==outp.id){
        
         j++;
      }
   })
   if(j==0)
   {
      output.push({id:inp.id,names:[]});
   }
}
 /*if(i==0)
   {

    output.push({id:inp});
    i=1;
   }
else
{
    output.map((outp)=>{
    if(outp.id==inp.id)
       {
   output.push({id:inp});
        }
     })
     }
	 */
     })
     output.map((outp)=>{
        outp.names=[];
        input.map((inv)=>{
           
           if(outp.id==inv.id){
              console.log(outp.id);
              outp.names.push(inv.name);
           }
        })
     })
console.log(output)
/* Output
Welcome to Programiz!

1
1
1
2
3
3
3
[ { id: 1, names: [ 'apple', 'donut', 'apple', 'donut' ] },
  { id: 2, names: [ 'banana' ] },
  { id: 3, names: [ 'carrot', 'fries', 'carrot' ] } ]

*/
