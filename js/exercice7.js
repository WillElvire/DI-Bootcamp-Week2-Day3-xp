const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firmName = [];

for(let name of names.sort()) {
    firmName.push(name.charAt(0));
}

console.log(firmName.join(""))