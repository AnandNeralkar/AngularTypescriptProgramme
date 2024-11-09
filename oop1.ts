class Arithmatic{
    //charateristics
    no1:number
    no2:number

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

var obj =new Arithmatic()
obj.no1=11
obj.no2=10

var Result:number=0
Result=obj.Addition()
console.log("Addition  " +Result)

Result=obj.Substraction()
console.log("Substraction  " +Result)
