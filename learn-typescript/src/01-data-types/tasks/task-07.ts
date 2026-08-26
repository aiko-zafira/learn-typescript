/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

const registration1: { studentID: string; fullName: string; gradeLevel: number; courseID: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
  studentID: "ST123456",
  fullName: "Jung Jaehyun",
    gradeLevel: 12,
    courseID: "CS101",
    courseTitle: "Introduction to Programming",
    instructorName: "Dr. John Smith",
    totalLearningHours: 40,
    registrationDate: "2023-10-01",
    isPaymentCompleted: true
}; 
 const registration2: { studentID: string; fullName: string; gradeLevel: number; courseID: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
  studentID: "ST654321",
  fullName: "Mark Lee",
    gradeLevel: 11,
    courseID: "CS102",
    courseTitle: "Data Structures and Algorithms",
    instructorName: "Prof. Jane Doe",
    totalLearningHours: 50,
    registrationDate: "2023-10-02",
    isPaymentCompleted: false
};

const registration3: { studentID: string; fullName: string; gradeLevel: number; courseID: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
  studentID: "ST0987654",
  fullName: "Lucas",
    gradeLevel: 12,
    courseID: "CS103",
    courseTitle: "Web Development",
    instructorName: "Dr. Michael Johnson",
    totalLearningHours: 60,
    registrationDate: "2023-10-03",
    isPaymentCompleted: true
};


console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);
