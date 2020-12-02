//Basla
const month = 12;
const day = 23;

if (month <= 0 || month > 12 || (day <= 0 || day > 31)) {
    console.log("hey aylar ve gunler dogru degil");
}
else if (month == 3 && day >= 21) {
    console.log("Burcunuz Koc");
} else if (month == 3 && day < 21) {
    console.log("burcunuz Balik");
}

else if (month == 4 && day >= 21) {
    console.log("Burcunuz Boga");
} else if (month == 4 && day < 21) {
    console.log("burcunuz Koc");
}
    
 else if (month == 5 && day >= 22) {
    console.log("Burcunuz Ikizler");
} else if (month == 5 && day < 22) {
    console.log("Burcunuz Boga");
}
    
else if (month == 6 && day >= 23) {
    console.log("Burcunuz Yengec");
} else if (month == 6 && day < 23) {
    console.log("Burcunuz Ikizler");
}
    
 else if (month == 7 && day >= 23) {
    console.log("Burcunuz Aslan");
} else if (month == 7 && day < 23) {
    console.log("Burcunuz Yengec");
}
 else if (month == 8 && day >= 23) {
    console.log("Burcunuz Basak");
} else if (month == 8 && day < 23) {
    console.log("Burcunuz Aslan");
}

else if (month == 9 && day >= 23) {
    console.log("Burcunuz Terazi");
} else if (month == 9 && day < 23) {
    console.log("Burcunuz Basak");
}

else if (month == 10 && day >= 23) {
    console.log("Burcunuz Akrep");
} else if (month == 10 && day < 23) {
    console.log("Burcunuz Terazi");
}

else if (month == 11 && day >= 22) {
    console.log("Burcunuz Yay");
} else if (month == 11 && day < 22) {
    console.log("Burcunuz Akrep");
}

else if (month == 12 && day >= 22) {
    console.log("Burcunuz Oglak");
} else if (month == 12 && day < 22) {
    console.log("Burcunuz Yay");
}

else if (month == 1 && day >= 22) {
    console.log("Burcunuz Kova");
} else if (month == 1 && day < 22) {
    console.log("Burcunuz Oglak");
}

else if (month == 2 && day >= 20) {
    console.log("Burcunuz Balik");
} else if (month == 2 && day < 20) {
    console.log("Burcunuz Kova");
}

else { console.log("Are u Ok something is  wrong") } 
//bitir
    
