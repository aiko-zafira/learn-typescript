/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Student = {
  name: string;
  major: string;
  active: boolean;
};

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(studentsList: Student[]): number {
    let count = 0;
    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i].active === true) {
            count++;
        }
    }
    return count;
}

function countInactiveStudents(studentsList: Student[]): number {
    let count = 0;
    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i].active === false) {
            count++;
        }
    }
    return count;
}

function countStudentsByMajor(studentsList: Student[], majorName: string): number {
    let count = 0;
    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i].major === majorName) {
            count++;
        }
    }
    return count;
}

function printEnrollmentReport(studentsList: Student[]): void {
    console.log("=== Laporan Pendaftaran Mahasiswa ===");
    console.log(`Total Students            : ${studentsList.length}`);
    console.log(`Active Students           : ${countActiveStudents(studentsList)}`);
    console.log(`Inactive Students         : ${countInactiveStudents(studentsList)}`);
    console.log(`Software Engineering      : ${countStudentsByMajor(studentsList, "Software Engineering")}`);
    console.log(`Networking                : ${countStudentsByMajor(studentsList, "Networking")}`);
    console.log(`Multimedia                : ${countStudentsByMajor(studentsList, "Multimedia")}`);
}

printEnrollmentReport(students);