//My forEach

var array = ['a','j','b','r','5'];

function miForEach(arreglo, callback){
		// completa aqui
    for (var i = 0; i < arreglo.length; i++){
        var element = arreglo[i];
        callback(element);
    }
}


miForEach(array, function(element) {
  console.log(element);
});

//My map
var array = ['A','J','B','R','H'];
var myArray = [];


function miMap(arreglo, callback){
  for (var i = 0; i < arreglo.length; i++){
      var element = arreglo[i];

      var item = callback(element);

      myArray.push(item);
  }
  return myArray;

}

miMap(array, function(element) {
   var lower = element.toLowerCase();
   return lower;
});

console.log(myArray);

//My filter

var array = [9,20,3,10,5];
var myArray = [];

function miForEach(arreglo, callback){
		// completa aqui
    for (var i = 0; i < arreglo.length; i++){
        var element = arreglo[i];

        if (element >= 10 ) {
          myArray.push(element);
        }
    }
    return myArray
    callback(element);
}

miForEach(array, function(element) {

});

//My reduce
