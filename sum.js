function sumInRange(array, lowerLimit, upperLimit) {
    let sum = 0;
    while(upperLimit >= lowerLimit){
        sum = sum + array[upperLimit];
        upperLimit--;
    }
    return sum;
  }


  module.exports = sumInRange;