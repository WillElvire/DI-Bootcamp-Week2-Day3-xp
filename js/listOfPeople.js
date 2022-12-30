const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[people.indexOf("James")]="Jason";
people.push("Wilfried");
console.log(people.indexOf("Mary"));
const peopleCp = people.slice(1,people.length-1);
console.log(peopleCp);
console.log(people);
console.log(people.indexOf("foo"))
// because the element has not been found 

const last = people[people.length-1];
// the table length can help us find out the last element of table
console.log(last);


for(const person of people) {
    console.log(person);
}

console.log("---------- loop ---------")

for(const person of people) {
    console.log(person);
    if(person == "Jason") break; 
}