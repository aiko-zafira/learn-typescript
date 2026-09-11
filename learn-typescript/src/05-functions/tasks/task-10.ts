/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(data: Enrollment[]): number {
    return data.length;
}

function countCompletedEnrollments(data: Enrollment[]): number {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].completed) {
            count++;
        }
    }
    return count;
}

function countIncompleteEnrollments(data: Enrollment[]): number {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (!data[i].completed) {
            count++;
        }
    }
    return count;
}

function calculateCompletionPercentage(data: Enrollment[]): number {
    if (data.length === 0) return 0;
    let completed = countCompletedEnrollments(data);
    return (completed / data.length) * 100;
}

function findHighestScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;
    let highest = data[0].score;
    for (let i = 1; i < data.length; i++) {
        if (data[i].score > highest) {
            highest = data[i].score;
        }
    }
    return highest;
}

function findLowestScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;
    let lowest = data[0].score;
    for (let i = 1; i < data.length; i++) {
        if (data[i].score < lowest) {
            lowest = data[i].score;
        }
    }
    return lowest;
}

function calculateAverageScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;
    let totalScore = 0;
    for (let i = 0; i < data.length; i++) {
        totalScore += data[i].score;
    }
    return totalScore / data.length;
}

function countPassingStudents(data: Enrollment[]): number {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsByCourse(data: Enrollment[], courseName: string): number {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].course === courseName) {
            count++;
        }
    }
    return count;
}

function calculateAverageScoreByCourse(data: Enrollment[], courseName: string): number {
    let totalScore = 0;
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].course === courseName) {
            totalScore += data[i].score;
            count++;
        }
    }
    if (count === 0) return 0;
    return totalScore / count;
}

function calculateTotalLearningHours(data: Enrollment[]): number {
    let totalHours = 0;
    for (let i = 0; i < data.length; i++) {
        totalHours += data[i].duration;
    }
    return totalHours;
}

function calculateAverageLearningDuration(data: Enrollment[]): number {
    if (data.length === 0) return 0;
    let totalHours = calculateTotalLearningHours(data);
    return totalHours / data.length;
}

function printCourseBreakdown(data: Enrollment[], courseName: string): void {
    console.log(`  - ${courseName}: ${countStudentsByCourse(data, courseName)} students | Avg Score: ${calculateAverageScoreByCourse(data, courseName).toFixed(2)}`);
}

function printAcademyDashboard(data: Enrollment[]): void {
    console.log("========================================");
    console.log("       ONLINE ACADEMY DASHBOARD         ");
    console.log("========================================");
    
    console.log("\n[ Completion Statistics ]");
    console.log(`Total enrollments    : ${countTotalEnrollments(data)}`);
    console.log(`Completed enrollments: ${countCompletedEnrollments(data)}`);
    console.log(`Incomplete enrollments: ${countIncompleteEnrollments(data)}`);
    console.log(`Completion percentage: ${calculateCompletionPercentage(data).toFixed(2)}%`);
    
    console.log("\n[ Academic Statistics ]");
    console.log(`Highest score        : ${findHighestScore(data)}`);
    console.log(`Lowest score         : ${findLowestScore(data)}`);
    console.log(`Average score        : ${calculateAverageScore(data).toFixed(2)}`);
    console.log(`Passing students     : ${countPassingStudents(data)}`);
    
    console.log("\n[ Course Statistics ]");
    printCourseBreakdown(data, "TypeScript");
    printCourseBreakdown(data, "Database");
    printCourseBreakdown(data, "Backend");
    
    console.log("\n[ Learning Statistics ]");
    console.log(`Total learning hours : ${calculateTotalLearningHours(data)} hrs`);
    console.log(`Average duration     : ${calculateAverageLearningDuration(data).toFixed(2)} hrs`);
    console.log("========================================");
}

printAcademyDashboard(enrollments);