const removeFromArray = function(array, ...removedElement) {
    let newArray = [];
    let concatable = true;

    for(let i = 0; i < array.length; i++){

        for(let element of removedElement){
            if(array[i] === element) concatable = false;
            if(!concatable) break;
        }

        if(concatable){
            newArray = newArray.concat(array[i]);
         }

         concatable = true;
     }
    

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
