//funkcje
console.log('Hello'); //podstawowa metoda pozwalająca wyświetlać treść w konsoli, np. w celu weryfikacji poprawności danych;
alert('Hello World!'); //funkcja, która wyświetli komunikat na stronie;
prompt('Jak masz na imię?'); //funkcja, która wyświetli komunikat z możliwością wpisania treści w polu, a treść ta będzie typem danych 'string';
confirm('Czy masz 18 lat?'); //funkcja, która wyświetli komunikat z możliwością potwierdzenia lub anulowania, a w zależności co klikniemy zostanie zwrócona wartość logiczna true lub false;



//zmienne
//inicjowanie zmiennej
let age = 18; //zmienna let, to zmienna której można zmieniać przypisaną wartość; 
console.log(age);
age = '21'; //zmieniono przypisaną wartość oraz typ danych;
console.log(age);


const name = 'Adam'; //zmienna const, to zmienna, która ma wartość przypisaną na stałe i nie możemy jej zmienić;
console.log(name);
//name = 'Tomek'; //aby sprawdzić czy wyświetli się błąd, usuń dwa slashe na początku;
//console.log(name); //usuń dwa slashe na początku aby sprawdzić czy wyświetli się błąd;


//znaczenie wielkosci liter
const myNumber = 5;
const myNUMBER = 2;
console.log(myNumber);
console.log(myNUMBER);


//sprawdzenie typu danych
const a = 5;
const b = '5';
console.log(typeof(a)); //wyświetlając wynik zauważymy, że zmienna a to number
console.log(typeof(b)); //wyświetlając wynik zauważymy, że zmienna b to string 

//przyrównanie typu danych, a wartości
console.log(a == b); //wyświetla się true, ponieważ zarówno zmienna a jak i b, mają wartość 5;
console.log(a === b); //wyświetla się false, ponieważ zmienna a to number, a zmienna b to string;

