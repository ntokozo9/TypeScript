function FizzBuzz(number1:number):string{
    if(number1 % 3==0 && number1 % 5==0){

        return "FIZZ-BUZZ"
    }
    else if(number1 % 3==0){
        return "fizz"
    }
    else if(number1 % 5==0){

        return "buzz"
    }

    else{
        return "number"
    }

    

}
console.log(FizzBuzz(15))