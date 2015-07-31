userNumber = parseInt(prompt("Pick a number between 1 and 100"));

var userList = function(maxValue) {
    for(var i = 0; i < maxValue ; i++) {
        if(i % 15 === 0){
            console.log("fizzbuzz");
        }
        else if(i % 5 === 0){
            console.log("buzz");
        }
        else if(i % 3 === 0){
            console.log("fizz");
        }
        else{
            console.log(i);
        }
        
    }
    
};

userList(userNumber)
