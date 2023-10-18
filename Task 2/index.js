const obj = {
    name: 'Alex',
    surName: 'Max',
    AGE: 40,
};

while (true) {
    const userInput = prompt("Enter field name: ");
    if (userInput === null) {
        break;
    }

    const userInputLower = userInput.toLowerCase();

    let found = false;
    
    for (const key in obj) {
        if (key.toLowerCase() === userInputLower) {
            found = true;
            break;
        }
    }

    console.log(`${userInput} -> ${found}`);

}
