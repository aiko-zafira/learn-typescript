/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

// 1. Initialize variables for grades, totals, and min/max trackers
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
let totalScore = 0;

// Set the initial highest and lowest to the first student's score
let highestScore = students[0].score;
let lowestScore = students[0].score;

// 2. Loop through the array of student objects
for (let i = 0; i < students.length; i++) {
    const currentScore = students[i].score;

    // Add to the total score for the average calculation
    totalScore += currentScore;

    // 3. Find the highest and lowest scores
    if (currentScore > highestScore) {
        highestScore = currentScore;
    }
    if (currentScore < lowestScore) {
        lowestScore = currentScore;
    }

    // 4. Categorize the grades using an if/else if chain
    if (currentScore >= 90) {
        countA++;
    } else if (currentScore >= 80) {
        countB++;
    } else if (currentScore >= 70) {
        countC++;
    } else {
        countD++;
    }
}

// 5. Calculate the average score
const averageScore = totalScore / students.length;

// Display the results
console.log(`Grade A: ${countA} students`);
console.log(`Grade B: ${countB} students`);
console.log(`Grade C: ${countC} students`);
console.log(`Grade D: ${countD} students`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore}`);