let tree = '';

for (let i = 0; i < 5; i++) {
    let star = '';
    for (let j = 0; j <= 5-i; j++) {
        star += ' ';
    }
    for (let k = 1; k <= 2*i-1; k++) {
        star += '*';
    }
    tree += star + '\n';
}

console.log(tree);
