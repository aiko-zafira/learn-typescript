/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

const attendance1:{employeeID:string; employeeName:string; date:string; checkInTime:string; checkOutTime:string; totalWorkingHours:number; isPresent:boolean} = {
  employeeID: "YG001",
  employeeName: "Na Jaemin",
  date: "2023-10-01",
  checkInTime: "09:00",
  checkOutTime: "17:00",
  totalWorkingHours: 8,
  isPresent: true
};

const attendance2:{employeeID:string; employeeName:string; date:string; checkInTime:string; checkOutTime:string; totalWorkingHours:number; isPresent:boolean} = {
  employeeID: "BigHit002",
  employeeName: "Keonho",
  date: "2023-10-01",
  checkInTime: "10:00",
  checkOutTime: "18:00",
  totalWorkingHours: 8,
  isPresent: true
};

const attendance3:{employeeID:string; employeeName:string; date:string; checkInTime:string; checkOutTime:string; totalWorkingHours:number; isPresent:boolean} = {
  employeeID: "Pledis003",
  employeeName: "Moonbin",
  date: "2023-10-01",
  checkInTime: "08:30",
  checkOutTime: "16:30",
  totalWorkingHours: 8,
  isPresent: false
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);