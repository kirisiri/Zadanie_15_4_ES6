/* Zadanie 1 - dziala

function sayHelloTo(word1, word2) {
    console.log(`${word1} ${word2}`);
}

sayHelloTo("Hello", "World"); */


/* Zadanie 2 - dziala

const multiply = (x = 1, y = 1) =>  {
	
	var wynik = x * y;
	console.log(wynik)
}

multiply(5,6);  */

/* Zadanie 3 - ( nie potrafie petli for przeksztalcic na EC6  :/ - and believe me: I tried!
*/
var average = (...liczby) => {
	var suma = 0;
	for (var i=0;  i < liczby.length; i++) {
	var suma = suma + liczby[i];
	}
	var srednia = suma / liczby.length;
	console.log(srednia);
}
average(2,2,4,8);    


/* Zadanie 4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average(grades); */

/* Zadanie 5  - dziala
const mixedData = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = mixedData;
console.log(`firstname: ${firstname}, lastname: ${lastname}`); */


