// 1. Rest/Spread для объектов
const items = { first, second, ...others };

// 2. Асинхронная итерация for-await-of
const arr = [1, 2, 3, 4]

async function test1() {
   for await (const el of arr) {
        setTimeout(() => {
            console.log(el);
        }, 1000)
    }
}
test1(); // 1, 2, 3, 4

//3. Promise.prototype.finally()
fetch("https://...")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("finished"));  // выполнится в любом случае

// 4. Улучшения регулярных выражений
// ?= -- за строкой следует строка
// /Java(?=Script)/ ищет Java перед Script, 
/Java(?=Script)/.test('JavaScript is cool'); // true

// ?! противоположено ?=
// /Java(?!Script)/
/Java(?!Script)/.test('JavaScript is cool'); // false

// ?<=
// /(?<=Java)Script/ -- ищем строку ‘Java’ за которой стоит ‘Script’.
/(?<=Java)Script/.test('JavaScript is cool'); // true

// ?<! противоположено ?<=
// /(?<!Java)Script/
/(?<!Java)Script/.test('JavaScript is cool'); // false

// 5. Управляющая последовательность Unicode в \p{…} и \P{…}
// проверка на ASCII, ASCII_Hex_Digit, Uppercase, Lowercase, White_Space, Alphabetic, Emoji и другие:
/^\p{ASCII}+$/u.test('abc'); // true
/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF'); // true
/^\p{Lowercase}$/u.test('h'); // true
/^\p{Uppercase}$/u.test('H'); // true
/^\p{Script=Greek}+$/u.test('ελληνικά'); // true
/^\p{Emoji}+$/u.test('🙃🙃') // true

// 6. Захват именованных групп в регулярных выражениях
// ДО
const re1 = /(\d{4})-(\d{2})-(\d{2})/;
const result1 = re1.exec("2019-04-10");
console.log(result1);
// ["2019-04-10", "2019", "04", "10", index: 0, input: "2019-04-10", groups: undefined]

// ПОСЛЕ (ECMAScript ES2018)
const re2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result2 = re2.exec("2019-04-10");
console.log(result2);
// [ "2019-04-10", "2019", "04", "10", index: 0, input: "2019-04-10",
//    groups: {year: "2019", month: "04", day: "10"}
// ]

// result2.groups.year === '2019';
// result2.groups.month === '04';
// result2.groups.day === '10';

// 7. Флаг s для регулярных выражений( . как символ новой строки)
const re3 = /hi.welcome/;
const re4 = /hi.welcome/s;

re3.test("hi\nwelcome"); // false
re4.test("hi\nwelcome"); // true

re4.dotAll; // true
re4.flags; // "s"
