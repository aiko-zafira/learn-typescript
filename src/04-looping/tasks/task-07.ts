/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

// 1. Initialize variables for counting and storing names
let presentCount = 0;
let absentCount = 0;
const absentNames = [];

// 2. Iterate through the array of objects using a loop
for (let i = 0; i < attendances.length; i++) {
    const student = attendances[i];
    
    // 3. Check the 'present' property of the current student object
    if (student.present === true) {
        presentCount++;
    } else {
        absentCount++;
        // Add the absent student's name to our list
        absentNames.push(student.name); 
    }
}

// 4. Calculate the attendance percentage
const totalStudents = attendances.length;
const attendancePercentage = (presentCount / totalStudents) * 100;

// Display the results
console.log(`Present: ${presentCount} students`);
console.log(`Absent: ${absentCount} students`);
console.log(`Absent Students List: ${absentNames.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage}%`);