var names = ["Mac", "Sam", "Kellen", "Adam"]
var complement = " is great!"


var  complementGiver = function(array, string){
  var completed = [];
  for(var i = 0; i < array.length; i++){
    completed.push(array[i] + string);
  }
  return completed 
  }

console.log(complementGiver(names,complement))