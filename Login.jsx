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
        this.#UserInput = UserInput
        this.#NumOfChars = String(UserInput).length
    }

    testmethod() {console.log(this.NumOfLowers(this.#UserInput))}
    
    testmethod2(){console.log('test')}

    NumOfLowers(str) {return NumOfLowers(str)} //attempt to internally make function a method for entry (composition)
}

class UserEntry {

}

class PasswordEntry {

}

function NumOfLowers(str) {
    n = 0
    for (let eachletter in String(str)){
        e = str[eachletter]
        if (("a" <= e) && (e <= "z")) {n++} 
    }

    return n
}

function checkValid(MinNumOfChars   =  Number(), MaxNumOfChars   = Number(),
                    MinNumOfLowers  =     0    , MinNumOfCaps    =    0    ,
                    MinNumOfNumbers =     0    , MinNumOfSymbols =    0    ) {

    
}

function checkNumOfChars(min, value, max){
    if   ((min <= value) && (value <= max))  
        {return true}
    else 
    //if (!((min <= value) && (value <= max))) //line redundant
        {return false}
}


E = new entry('b1an')
E.testmethod()











/*Credits:
https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter

*/