while (true) {

    const userInput = prompt("Enter data: ");
    
    if (userInput === null) {
        break;
  }

  const reversedString = userInput
  .split('')
  .reverse()
  .map(char => {

  if (char === char.toUpperCase()) {
    return char.toLowerCase();
} else {
    return char.toUpperCase();
}
})

.join(''); 



console.log(`${userInput} -> ${reversedString}`);

}