const colors   = ["Orange","Green","Red","Yellow","Pink"];
const suffixes = ["st","nd","rd","th"];

for(let color in colors) {

    console.log(`My #${color} choice is ${colors[color]}`); 

    if(color == 1) {
        console.warn(`${Number.parseInt(color)}${suffixes[color-1]} choice`);
    }else if(color == 2) {
        console.warn(`${Number.parseInt(color)}${suffixes[color-1]} choice`);
    }else if(color == 3){
        console.warn(`${Number.parseInt(color)}${suffixes[color-1]} choice`);
    }else if(color!=0){
        console.warn(`${Number.parseInt(color)}${suffixes[color-1]} choice`);
    }
    
   
}