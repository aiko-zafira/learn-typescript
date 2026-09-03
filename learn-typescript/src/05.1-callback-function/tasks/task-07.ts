/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */
type Student = {
    name: string
    score: number
    attendance: number
}
const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudents<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {
    const results: T[] = [];
    for (const student of arr) {
        results.push(callback(student));
    }
    return results;
}

function getPassStatus(student: Student) {
    let status = "Failed";
    if (student.score >= 75 && student.attendance >= 90) {
        status = "Passed";
    }
    return { ...student, status };
}

function getAcademicCategory(student: Student) {
    let category = "Needs Improvement";
    if (student.score >= 90) {
        category = "High Achiever";
    }
    if (student.score >= 75 && student.score < 90) {
        category = "Proficient";
    }
    return { ...student, category };
}

function getAttendanceStatus(student: Student) {
    let attendanceStatus = "Poor Attendance";
    if (student.attendance >= 90) {
        attendanceStatus = "Good Attendance";
    }
    return { ...student, attendanceStatus };
}

function getRecommendation(student: Student) {
    let recommendation = "Improve Academic Performance";
    if (student.score >= 90 && student.attendance >= 90) {
        recommendation = "Excellent";
    }
    if (student.score >= 75 && student.score < 90 && student.attendance >= 90) {
        recommendation = "Good";
    }
    if (student.score >= 75 && student.attendance < 90) {
        recommendation = "Improve Attendance";
    }
    return { ...student, recommendation };
}

console.log("====== PASS/FAIL STATUS ======");
console.log(processStudents(students, getPassStatus));

console.log("====== ACADEMIC CATEGORY ======");
console.log(processStudents(students, getAcademicCategory));

console.log("====== ATTENDANCE STATUS ======");
console.log(processStudents(students, getAttendanceStatus));

console.log("====== FINAL RECOMMENDATION ======");
console.log(processStudents(students, getRecommendation));