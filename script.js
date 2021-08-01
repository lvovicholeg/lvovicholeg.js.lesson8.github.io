
let str1 = prompt('Введіть текст (перевірка на кількість пробілів)');
let count = 0;
for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == ' ') {
        count++
    }
}
console.log(`У стрічці ${count} пробілів/ла.`)


let str2 = prompt('Введіть емейл (перевірка на правельний емейл)');
for (let i = 0; i < str2.length; i++) {
    if (str2.charAt(0) == '@' || str2.charAt(str2.length - 1) == '@') console.log('e-mail введено не вірно')
    else if (str2.includes('@') == false) console.log('e-mail введено не вірно, відсутній символ "@"')
    else console.log('e-mail введено успішно')
}

let str3 = prompt('Введіть текст з текстом "html" (перевірка на кількість ввеених "html")');
let start = 0;
let count1 = 0;
while (true) {
    let find = str3.indexOf('html', start);
    if (find === -1) break;
    count1++;
    start = find + 1;
}
console.log(`У стрічці ${count1} разів зустрічається текст "html"`);


let str4 = prompt('Введіть сайт (Скорочення ві тексту" " https:// або http:// "")');
if (str4.includes('https://') == true) {
    console.log(str4.replace('https://', ''));
}
else if (str4.includes('http://') == true) {
    console.log(str4.replace('http://', ''));
}
else {
    console.log(str4);
}
