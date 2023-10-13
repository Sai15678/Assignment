function sortDescending(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
}
const numbers = [5, 2, 8, 1, 4];
console.log("Original array:", numbers);
sortDescending(numbers);
console.log("Sorted array in descending order:", numbers);