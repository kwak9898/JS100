const score = '20 30 40'.split(' ');
let sum = 0;

for (let i = 0; i < score.length; i++) {
    sum += parseInt(score[i]);
}

console.log(Math.floor(sum / score.length));
