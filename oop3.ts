class Demo2{
    no:number
    str:string


    constructor(x:number,name:string)
    {
        console.log("Inside the Parameterized constructor Of Demo Class")
        this.no=x
        this.str=name
    }
    fun():void
    {
        console.log("Inside Fun Of Demo Class")
        console.log("Value of NO is   :" + this.no)
        console.log("Value of str is   :" + this.str)
  
    }
}

var obj1=new Demo2(11,"ANA")
 var obj2=new Demo2(12,"BNA")

 obj1.fun()
 obj2.fun()