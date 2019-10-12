// 1. Zaimportuj moduł file system 
const fs = require('fs');

// 2. Użyj metody writeFileSync i za jej pomocą utwórz plik o nazwie first.txt
// z wiadomością "Mój pierwszy plik"

fs.writeFileSync('first.txt', 'Mój pierwszy plik');

// 3. Za pomocą metody appendFileSync, którą znajdziesz w dokumentacji w module
// File System dodaj do pliku string " stworzony w Node.js!"

fs.appendFileSync('./first.txt', ' stworzony w Node.js');
// 4. Za pomoca metody readFileSync, która też znajduje się w dokumentacji w tym
// samym module odczytaj plik i wynij przypisz do zmiennej

const result = fs.readFileSync('./first.txt', { encoding: 'utf8' });

// 5. Wyświetl zmienna za pomoca console.log 

console.log(result);

// 6. Odpal swój skrypt