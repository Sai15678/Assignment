function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => reverseString(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputSentence = "I'm in bengaluru";
const result = reverseWords(inputSentence);
console.log("Original sentence:", inputSentence);
console.log("Reversed words:", result);