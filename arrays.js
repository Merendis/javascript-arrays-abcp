var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

addElementToBeginningOfArray(chocolateBars,"Heath");

<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element){
  var bars = array.unshift(element)
  bars;
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "Heath"));

function addElementToEndOfArray(array, element){
  return [ ...array, element];
=======
function destructivelyAddElementToBeginningOfArray(){
  chocolateBars = chocolateBars.unshift("Heath");
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "Heath");

function addElementToEndOfArray(array, element){
 return [ ...array, element];
  
>>>>>>> 3ada32141f1abe1651d82abd03a8504414ac8b13
}

addElementToEndOfArray(chocolateBars,foo);

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}

destructivelyAddElementToEndOfArray(chocolateBars,"Heath");

function accessElementInArray(array, index){
  return array[index];
}

accessElementInArray(chocolateBars, 3)

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
}

destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(array){
  array.slice(0, array.length -1);
}

removeElementFromEndOfArray(chocolateBars);