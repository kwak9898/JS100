const score = [20, 30, 50];
let sum = 0;

for (let i = 0; i < score.length; i++) {
    sum += score[i];
}

const answer = sum / score.length;

console.log(Math.floor(answer));
