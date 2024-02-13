const fibonacci = function(num) {

    Number(num);
    if(num < 0) return "OOPS";

    let nextNum = 1;
    let fibNum = 0;
    let placeHolder = 0;

    for(let i = 0; i < num; i++){
        placeHolder = nextNum;
        nextNum += fibNum;
        fibNum = placeHolder;
    }
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
