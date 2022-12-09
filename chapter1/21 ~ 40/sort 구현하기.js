const data = '176 156 155 165 166 169';
let sortData = '';

sortData = data.split(' ').sort((a, b) => {
    return a - b;
}). join(' ');

if (sortData === data) {
    console.log('YES');
} else {
    console.log('NO');
}

console.log(sortData)
