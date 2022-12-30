const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
//console.log(Object.keys(building.numberOfAptByFloor).length)
console.log(building.nameOfTenants[1] , building.numberOfRoomsAndRent.dan[0]);

const buildingRents = building.numberOfRoomsAndRent;

if(buildingRents.sarah[1] + buildingRents.david[1] > buildingRents.dan[1])  buildingRents.dan[1] = 1200;




