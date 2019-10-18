// 1. Zaimportuj moduł File System (fs)
const fs = require('fs');
// 2. Zaimportuj stworzony moduł
const utils = require('./utils');
// 3. Wywołaj funkcje, które wcześniej stworzyłeś, a ich wyniki przypisz do zmiennych
const sum = utils.add(2, 4);
const difference = utils.subtract(4, 2);
// 4. Za pomocą metody writeFileSync, która jest dostępna na module fs utwórz plik,
// w którym zapiszesz tekst "Wynik dodawania: 2" (wynikiem dodawania ma być wynik
// twojej funkcji, która dodaje 2 liczby)
fs.writeFileSync('test.txt', `Wynik dodawania: ${sum}`);
// 5. Za pomocą metody appendFileSync, która jest dostępna na module fs do twojego pliku
// dodaj tekst "Wynik odejmowania: 2" (wynikiem odejmowania ma być wynik twojej funkcji,
// która odejmuje 2 liczby)
fs.appendFileSync('./test.txt', ` Wynik odejmowania: ${difference}`);
// 6. Za pomocą metody readFileSync, odczytaj wcześniej utworzony plik, następnie wynik
// przypisz do zmiennej
const result = fs.readFileSync('./test.txt', { encoding: 'utf8' });

// 7. Wyświetl zmienną w konsoli
console.log(result);