const sumAll = function(min, max) {

    let sum = -1;

    if(Number.isInteger(min) && Number.isInteger(max) && min >= 0 && max >= 0){

        if(min > max){
            const temp = min;
            min = max;
            max = temp;
        }

        for(let i = min ; i <= max; i++){
            sum += i;
        }
    }

    return (sum == -1) ? 'ERROR': sum + 1;
};

// Do not edit below this line
module.exports = sumAll;
