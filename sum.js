function sumInRange(array, lowerLimit, upperLimit) {
    if(array.length === 0 || !Number.isInteger(lowerLimit) || !Number.isInteger(upperLimit)){
        return null;
    }else{
        let sum = 0;
        while(upperLimit >= lowerLimit){
            sum = sum + array[upperLimit];
            upperLimit--;
        }
        return sum;
    }
}


  module.exports = sumInRange;