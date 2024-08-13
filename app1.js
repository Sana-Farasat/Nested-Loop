/*----------------------Right-Angled Triangle---------------------------*/
var star = '* '; //Star with space
for (var i = 1; i <= 5; i++) { // Outer loop for lines
    var line = '';
    for (var j = 1; j <= i; j++) { // Inner loop for stars in each line
        line += star;
    }
    console.log(line); // Output the line after constructing it
}
/*---------------------------------------------------------------------*/
var star2 = '*'; //Star without space
for (var i = 1; i <= 5; i++) { // Outer loop for lines
    var line = '';
    for (var j = 1; j <= i; j++) { // Inner loop for stars in each line
        line += star2;
    }
    console.log(line); // Output the line after constructing it
}
/*---------------------------------------------------------------------*/
var star3 = '*'; //Star without space
for (var i = 1; i <= 5; i++) { // Outer loop for lines
    var line = '';
    for (var j = 1; j <= i; j++) { // Inner loop for stars in each line
        line += star3;
    }
    console.log("\n ".concat(line)); // Output the line after constructing it with space in each row of star
}
/*--------------------------------------------------------------------*/
var star4 = '* '; //Star with space
for (var i = 1; i <= 5; i++) { // Outer loop for lines
    var line = '';
    for (var j = 1; j <= i; j++) { // Inner loop for stars in each line
        line += star4;
    }
    console.log('\n' + line); // Output the line after constructing it
}
