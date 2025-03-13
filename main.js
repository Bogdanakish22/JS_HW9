function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);



function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' '); 
    return words.length * pricePerWord; 
}

console.log(calculateEngravingPrice('Best wishes for you', 10)); 



function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 



function formatString(string) {
    return string.length > 40 ? string.slice(0, 40) + '...' : string;
}


console.log(formatString("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")); 
console.log(formatString("Hello, world!"));



function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

console.log(checkForSpam("Get the best SALE offer now!")); 
console.log(checkForSpam("This is a regular message.")); 
console.log(checkForSpam("Win a free SPAM meal today!")); 



let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число (або натисніть Cancel для завершення):");

    if (input === null) {
        break; 
    }

    input = Number(input);

    if (isNaN(input)) {
        alert("Було введено не число, спробуйте ще раз.");
    } else {
        numbers.push(input);
    }
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній, підсумок відсутній.");
}
