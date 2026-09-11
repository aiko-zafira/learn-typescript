/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */
type StudentInput = {
    id: number
    name: string
    answers: string[]
}

type StudentScore = {
    id: number
    name: string
    score: number
}

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers: string[] = ["A", "B", "C", "A", "B"];

const studentScores: StudentScore[] = students.map(student => {
    let correctCount = 0;
    for (let i = 0; i < student.answers.length; i++) {
        if (student.answers[i] === correctAnswers[i]) {
            correctCount++;
        }
    }
    return {
        id: student.id,
        name: student.name,
        score: correctCount * 20
    };
});
const passedStudents = studentScores.filter(student => student.score > 70);
const topStudent = studentScores.reduce((max, student) => {
    return student.score > max.score ? student : max;
}, studentScores[0]);
const totalClassScore = studentScores.reduce((sum, student) => sum + student.score, 0);
const classAverage = totalClassScore / studentScores.length;

console.log("====== 1. STUDENT SCORES ======");
console.log(studentScores);

console.log("====== 2. PASSED STUDENTS (> 70) ======");
console.log(passedStudents);

console.log("====== 3. HIGHEST SCORE STUDENT ======");
console.log(topStudent);

console.log("====== 4. CLASS AVERAGE SCORE ======");
console.log(classAverage);