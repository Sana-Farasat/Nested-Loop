/*----------------------Right-Angled Triangle---------------------------*/

let star= '* ';  //Star with space

for (let i = 1; i <= 5; i++) {    // Outer loop for lines
   
    let line = '';
    
    for (let j = 1; j <= i; j++) {  // Inner loop for stars in each line
     
        line += star;
    }
   
    console.log(line);  // Output the line after constructing it
}

/*---------------------------------------------------------------------*/

let star2= '*';  //Star without space

for (let i = 1; i <= 5; i++) {    // Outer loop for lines
    
    let line = '';
    
    for (let j = 1; j <= i; j++) {  // Inner loop for stars in each line
      
        line += star2;
    }
   
    console.log(line);  // Output the line after constructing it
}

/*---------------------------------------------------------------------*/

let star3= '*';  //Star without space

for (let i = 1; i <= 5; i++) {    // Outer loop for lines
    
    let line = '';
    
    for (let j = 1; j <= i; j++) {  // Inner loop for stars in each line
      
        line += star3;
    }
   
    console.log(`\n ${line}`);  // Output the line after constructing it with space in each row of star
}

/*--------------------------------------------------------------------*/

let star4= '* ';  //Star with space

for (let i = 1; i <= 5; i++) {    // Outer loop for lines
   
    let line = '';
    
    for (let j = 1; j <= i; j++) {  // Inner loop for stars in each line
     
        line += star4;
    }
   
    console.log('\n'+ line);  // Output the line after constructing it
}


