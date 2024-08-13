/*---------------------Upright Triangular Pyramid-----------------------*/
for (var i = 1; i <= 5; i++) {
    var row = '';
    // Add spaces to right-align the stars
    for (var j = 1; j <= 5 - i; j++) {
        row += ' ';
    }
    // Add stars
    for (var k = 1; k <= i; k++) {
        row += '* ';
    }
    console.log(row);
}
/*---------------------Inverted Triangular Pyramid-----------------------*/
for (var i = 5; i >= 1; i--) {
    var row = '';
    // Add spaces before stars
    for (var k = 1; k <= 5 - i; k++) {
        row += ' ';
    }
    // Add stars
    for (var j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
