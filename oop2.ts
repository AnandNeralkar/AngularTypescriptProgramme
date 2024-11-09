class Demo1{
    no:number
    str:string

    constructor()
    {
        console.log("Inside the constructor Of Demo Class")
    }
    fun():void
    {
        console.log("Inside Fun Of Demo Class")
    }
}

var obj1=new Demo1()
 var obj2=new Demo1()

 obj1.fun()
 obj2.fun()