// TODO: add your solutions here!
function combineWords(word1, word2) {
    var newWord = word1 + word2;
    return newWord;
}

var result = combineWords("dog", "house");
console.log(result);


function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);


function toTheNthPower(number, power) {
    var result = 1;
    for (var i = 0; i < power; i++) {
        result *= number;
    }

    return result;
}

var resultN = toTheNthPower(4, 5);
console.log(resultN);


function areaOfACicle(radius) {
    rad = radius * radius;

    var area = Math.PI * rad;

    return area;
}

var circle = areaOfACicle(2);
console.log(circle);


function pythagoreanTheorem(a, b) {
    var cSquared = Math.pow(a, 2) + Math.pow(b, 2);
    result = Math.sqrt(cSquared);

    return result;
}

var resultP = pythagoreanTheorem(3, 4);
console.log(resultP);


function isXEvenlyDivisibleByY(x, y) {
    return x % y === 0;
}

var resultX = isXEvenlyDivisibleByY(99, 3);
console.log(resultX);


function countVowels(word) {
    var count = 0;
    word = word.toLowerCase();

    for (var i = 0; i < word.length; i++) {

        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] ==="o" || word[i] === "u") {
            count++;
        }
    }

    return count;

}

var resultV = countVowels("stealing");
console.log(resultV);


function findWdi(array) {

    for(var i = 0; i < array.length; i++) {
        var currentSpot = array[i];
    }

    return currentSpot === "wdi"
}

console.log(findWdi([9, "Bart Simpson", true, "wdi"]));
console.log(findWdi(["a", "b", "c"]));


function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var tier = '';

		for(var j = 0; j < i; j++) {
			tier += '*';
		}

		console.log(tier);
	}
}
console.log(printTriangle(4));
