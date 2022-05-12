var input=
[
    {
        name: "Animal",
        parent_id: null,
        id: 1
    },
     {
        name: "Lion",
        parent_id: 1,
        id: 2
    },
    {
        name: "Bird",
        parent_id: null,
        id: 3
    },
    {
        name: "Parrot",
        parent_id: 3,
        id: 4
    },
    {
        name: "Pigeon",
        parent_id: 3,
        id: 5
    }
];
var output=[]
input.map((inv)=>{
    if(inv.parent_id===null){
        inv.child=[];
        
        output.push(inv);
        console.log(inv.name);
    }
})
output.map((out)=>{
    input.map((inv)=>{
        if(out.id===inv.parent_id){
            out.child.push(inv)
        }
    })
})
console.log(input.length)
console.log(JSON.stringify(output))
console.log(output.length)
console.log(output)
//Sample inputs and Sample outputs
var input=
[
    {
        name: "Animal",
        parent_id: null,
        id: 1
    },
     {
        name: "Lion",
        parent_id: 1,
        id: 2
    },
    {
        name: "Bird",
        parent_id: null,
        id: 3
    },
    {
        name: "Parrot",
        parent_id: 3,
        id: 4
    },
    {
        name: "Pigeon",
        parent_id: 3,
        id: 5
    }
];
[{"name":"Animal","parent_id":null,"id":1,"child":[{"name":"Lion","parent_id":1,"id":2}]},{"name":"Bird","parent_id":null,"id":3,"child":[{"name":"Parrot","parent_id":3,"id":4},{"name":"Pigeon","parent_id":3,"id":5}]}]
2
[ { name: 'Animal', parent_id: null, id: 1, child: [ [Object] ] },
  { name: 'Bird',
    parent_id: null,
    id: 3,
    child: [ [Object], [Object] ] } ]
