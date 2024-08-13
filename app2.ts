/*---------------------Upright Triangular Pyramid-----------------------*/

for(let i = 1; i <= 5; i++){
    let row = '';
    
    // Add spaces to right-align the stars
    for(let j = 1; j <= 5 - i; j++){
        row += ' ';   
    }
    
    // Add stars
    for(let k = 1; k <= i; k++){
        row += '* ';
    }
    
    console.log(row);
}

/*---------------------Inverted Triangular Pyramid-----------------------*/

for (let i = 5; i >= 1; i--) {
    let row = '';

    // Add spaces before stars
    for (let k = 1; k <= 5 - i; k++) {
        row += ' ';
    }

    // Add stars
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }

    console.log(row);
}

