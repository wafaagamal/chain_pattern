

class Chainer{
    constructor(data) {
        this.data = data;
        this.arr = [];
        this.curIndex=-1; 
      }
    next(){
        this.curIndex++;
        this.arr[this.curIndex].bind(this)(this.data,this.next.bind(this));
    }
    addChain(fn){
        this.arr.push(fn)
    }
    start(){
       this.next()
    }
}

module.exports= Chainer

let person={name:"alex"};

let chain=new Chainer(person);


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


