function Calculator (operation, firstVal, secondVal){
  if (operation == "addition"){
    return firstVal + secondVal;
  } else if (operation == "subtraction"){
    return firstVal - secondVal;
  } else if (operation == "multiplication"){
    return firstVal * secondVal;
  } else if (operation == "division"){
    return firstVal / secondVal;
  } 
}

console.log(Calculator("addition", 1, 2));
console.log(Calculator("subtraction", 589, 312));
console.log(Calculator("division", 840, 2));
console.log(Calculator("multiplication", 3, 39));