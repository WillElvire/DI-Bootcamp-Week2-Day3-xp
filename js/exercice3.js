let numberTypedByUser = prompt("Can you please type a number");

if(typeof numberTypedByUser == "string") {
    while(numberTypedByUser < 10) {
        numberTypedByUser = prompt("Can you please type a number");
    }
}

