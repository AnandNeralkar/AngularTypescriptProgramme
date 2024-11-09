class Arithmatic1{
    //charateristics
    no1:number
    no2:number

   
    constructor(x:number,y:number)
    {
      
        this.no1=x
        this.no2=y
    }
    //Behaviour
    Addition()
    {
        var ans :number=0
        ans=this.no1+this.no2
        return ans
    }
    Substraction()
    {
        var ans :number=0
        ans=this.no1-this.no2
        return ans
    }
    
}

var obj =new Arithmatic1(11,10)


Result=obj.Addition()
console.log("Addition  " +Result)

Result=obj.Substraction()
console.log("Substraction  " +Result)


var obj3=new Arithmatic1(51,11)


var Result:number=0
Result=obj3.Addition()
console.log("Addition  " +Result)

Result=obj3.Substraction()
console.log("Substraction  " +Result)
