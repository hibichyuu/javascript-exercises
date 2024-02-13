const findTheOldest = function(people = []) {
    people.sort((currGuy, nextGuy)=>{

        const currentYear = new Date().getFullYear();

        let currGuyAge = 
            (!currGuy.yearOfDeath) ?
            currentYear - currGuy.yearOfBirth :
            currGuy.yearOfDeath - currGuy.yearOfBirth;
        let nextGuyAge = 
            (!nextGuy.yearOfDeath) ?
            currentYear - nextGuy.yearOfBirth :
            nextGuy.yearOfDeath - nextGuy.yearOfBirth;

        return (currGuyAge > nextGuyAge) ? 1 : -1;
    });

return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
