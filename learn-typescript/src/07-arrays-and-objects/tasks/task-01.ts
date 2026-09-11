/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */
type Student = {
  name: string;
  score: number;
}
const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const studentNames = students.map(student => student.name);
const passedStudents = students.filter(student => student.score >= 70);
const citra = students.find(student => student.name === "Citra");
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;

console.log("====== 1. STUDENT NAMES ======");
console.log(studentNames);

console.log("====== 2. PASSED STUDENTS ======");
console.log(passedStudents);

console.log("====== 3. FIND CITRA ======");
console.log(citra);

console.log("====== 4. AVERAGE SCORE ======");
console.log(averageScore);