let students = [
    {
        name: "João",
        firstGrade: 7.8,
        secondGrade: 4
    },
    {
        name: "Letícia",
        firstGrade: 8,
        secondGrade: 7
    },
    {
        name: "Diego",
        firstGrade: 2,
        secondGrade: 10
    },
    {
        name: "Júlia",
        firstGrade: 6.9,
        secondGrade: 10
    }
];

function avarage(firstGrade, secondGrade) {
    return (firstGrade + secondGrade) / 2;
};

function result(student) {
    return `A média do(a) aluno(a) ${student.name} foi: ${avarage(student.firstGrade, student.secondGrade)}`;
};

for (let student of students) {
    let finalGrade = result(student);
    
    if (avarage(student.firstGrade, student.secondGrade) >= 7) {
        alert(`${finalGrade} \nParabéns!!! Você passou no concurso.`);
    } else {
        alert(`${finalGrade} \nNão foi dessa vez.`);
    }
};