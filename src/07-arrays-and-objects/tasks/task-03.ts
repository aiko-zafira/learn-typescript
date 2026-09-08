/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */
type Student = {
    id: number
    name: string
}

type AttendanceRecord = {
    studentId: number
    status: "present" | "absent" | "late"
}

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

// Helper function to find status by student id
function getAttendanceStatus(studentId: number): string {
    const record = attendance.find(a => a.studentId === studentId);
    return record ? record.status : "unknown";
}
const presentStudentNames = students
    .filter(student => getAttendanceStatus(student.id) === "present")
    .map(student => student.name);
const absentStudents = students
    .filter(student => getAttendanceStatus(student.id) === "absent")
    .map(student => student.name);
const lateStudents = students
    .filter(student => getAttendanceStatus(student.id) === "late")
    .map(student => student.name);
const studentAttendanceList = students.map(student => {
    const record = attendance.find(a => a.studentId === student.id);
    return {
        name: student.name,
        status: record ? record.status : "unknown"
    };
});

console.log("====== 1. PRESENT STUDENTS ======");
console.log(presentStudentNames);

console.log("====== 2. ABSENT STUDENTS ======");
console.log(absentStudents);

console.log("====== 3. LATE STUDENTS ======");
console.log(lateStudents);

console.log("====== 4. NAME & STATUS LIST ======");
console.log(studentAttendanceList);