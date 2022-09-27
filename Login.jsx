//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render()

class entry {
    #UserInput    = String()
    #NumOfChars   = Number()
    #NumOfLowers  = Number()
    #NumOfNumbers = Number()
    #NumOfCaps    = Number()
    #NumOfSymbols = Number()
    #Valid        = Boolean()

    constructor(UserInput){
        //this.#UserInput = UserInput
        this.#NumOfChars   = String(UserInput).length                  
        this.#NumOfCaps    = this.NumOfCaps(UserInput)
        this.#NumOfLowers  = this.NumOfLowers(UserInput)
        this.#NumOfNumbers = this.NumOfNumbers(UserInput)
        this.#NumOfSymbols = this.NumOfSymbols(UserInput)
    }

    testmethod() {let i = 'á'; let a = 'a'; let z = 'z';console.log((a <= i) && (i <= z))}
    
    //testmethod2(){console.log('test')}
    
    //attempt to internally make function a method for entry (composition)
    NumOfNumbers(str) {return NumOfAType(str,'N')}
    NumOfSymbols(str) {return NumOfAType(str,'S')}
    NumOfLowers(str) {return NumOfAType(str,'L')}
    NumOfCaps(str) {return NumOfAType(str,'U')}
}

function NumOfAType(str, Type) {
    
    if (!(Type === 'S')){
        let a
        let z
        if (Type === 'L'){a = 'a'; z ='z'}
        else
        if (Type === 'U'){a = 'A'; z = 'Z'}
        else
        if (Type === 'N'){a = '0'; z = '9'}

        n = 0
        for (let eachletter in String(str)){
            e = str[eachletter]
            
            if ((a <= e) && (e <= z)) {n++} 
        }
        return n
    }
    else //any char that isn't a standard letter or number is treated as a symbol
    //if (Type === 'S') //line redundant
        {return (String(str).length - 
            (NumOfAType(str, 'L') + 
             NumOfAType(str, 'U') + 
             NumOfAType(str, 'N'))
       )}
}

function checkNumOfChars(min, value, max){
    if   ((min <= value) && (value <= max))  
        {return true}
    else 
    //if (!((min <= value) && (value <= max))) //line redundant
        {return false}
}

function checkValid(MinNumOfChars   =  Number(), MaxNumOfChars   = Number(),
                    MinNumOfLowers  =     0    , MinNumOfCaps    =    0    ,
                    MinNumOfNumbers =     0    , MinNumOfSymbols =    0    ) {

    
}

class UserEntry {

}

class PasswordEntry {

}




E = new entry('b1An')
E.testmethod()

/*Credits:
https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter

*/
