/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

type Submission = {
    student: string;
    submitted: boolean;
    score: number;
};

const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(subs: Submission[]): number {
    return subs.length;
}

function countSubmittedAssignments(subs: Submission[]): number {
    let count = 0;
    for (let i = 0; i < subs.length; i++) {
        if (subs[i].submitted) {
            count++;
        }
    }
    return count;
}

function countMissingAssignments(subs: Submission[]): number {
    let count = 0;
    for (let i = 0; i < subs.length; i++) {
        if (!subs[i].submitted) {
            count++;
        }
    }
    return count;
}

function countPassedStudents(subs: Submission[]): number {
    let count = 0;
    for (let i = 0; i < subs.length; i++) {
        if (subs[i].submitted && subs[i].score >= 75) {
            count++;
        }
    }
    return count;
}

function countRevisionStudents(subs: Submission[]): number {
    let count = 0;
    for (let i = 0; i < subs.length; i++) {
        if (subs[i].submitted && subs[i].score < 75) {
            count++;
        }
    }
    return count;
}

function calculateAverageScore(subs: Submission[]): number {
    if (subs.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < subs.length; i++) {
        total += subs[i].score;
    }
    return total / subs.length;
}

function findHighestScore(subs: Submission[]): number {
    if (subs.length === 0) return 0;
    let highest = subs[0].score;
    for (let i = 1; i < subs.length; i++) {
        if (subs[i].score > highest) {
            highest = subs[i].score;
        }
    }
    return highest;
}

function findLowestScore(subs: Submission[]): number {
    if (subs.length === 0) return 0;
    let lowest = subs[0].score;
    for (let i = 1; i < subs.length; i++) {
        if (subs[i].score < lowest) {
            lowest = subs[i].score;
        }
    }
    return lowest;
}

function printReport(subs: Submission[]): void {
    console.log("=== LMS Assignment Report ===");
    console.log(`Total students          : ${countTotalStudents(subs)}`);
    console.log(`Submitted assignments   : ${countSubmittedAssignments(subs)}`);
    console.log(`Missing assignments     : ${countMissingAssignments(subs)}`);
    console.log(`Passed students         : ${countPassedStudents(subs)}`);
    console.log(`Students requiring rev  : ${countRevisionStudents(subs)}`);
    console.log(`Average score           : ${calculateAverageScore(subs).toFixed(2)}`);
    console.log(`Highest score           : ${findHighestScore(subs)}`);
    console.log(`Lowest score            : ${findLowestScore(subs)}`);
}

printReport(submissions);