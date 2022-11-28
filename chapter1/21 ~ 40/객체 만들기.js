const student = 'Yujin Hyewon'.split(' ');
const mathScores = '70 100'.split(' ');
let obj = {}

for (let i = 0; i < student.length; i++) {
    obj [student[i]] = parseInt(mathScores[i]);
}

console.log(obj);
