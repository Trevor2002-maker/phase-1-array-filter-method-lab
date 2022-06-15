// Code your solution here
function findMatching(drivers, string){
    const names = drivers.filter(function(name){
        return name.toUpperCase() === string.toUpperCase();
    });
return names;
}
findMatching(drivers,"Bo")

function fuzzyMatch(drivers){
   const drivers = [];
   return undefined;
}