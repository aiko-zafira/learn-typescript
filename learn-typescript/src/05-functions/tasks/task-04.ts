/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

type Attendance = {
  name: string;
  present: boolean;
};

const attendances: Attendance[] = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(records: Attendance[]): void {
  let totalPresent = 0;
  let totalAbsent = 0;
  let absentNames: string[] = []; 

  for (let i = 0; i < records.length; i++) {
    if (records[i].present === true) {
      totalPresent++;
    } else {
      totalAbsent++;
      absentNames.push(records[i].name); // <-- Masukkan nama ke array di sini
    }
  }

  console.log("=== Laporan Kehadiran ===");
  console.log(`Total Present: ${totalPresent}`);
  console.log(`Total Absent : ${totalAbsent}`);
  console.log(`Names of absent students: ${absentNames.join(", ")}`);
}

printAttendanceReport(attendances);