This is an implementation of chain of responsibilites design pattern in nodejs.

### Installation 

```
npm install chain_patternx
```

### Usuage 

```
let person={name:"alex"};

let chain=new Chainer(person);

//here you add new part in the chain 
// update the person object and adding age property
//then call next to go to the next part of the chain

chain.addChain(function(data,next){
    data.age=23
    next()
})

chain.addChain(function(data,next){
    data.phone="1223456789"
    next();
})

chain.addChain((data,next)=>{
    data.gender = "male";
})
chain.start()


```
                               