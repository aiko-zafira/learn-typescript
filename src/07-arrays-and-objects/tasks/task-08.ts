/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
type Project = {
    name: string
    score: number
}

type Employee = {
    name: string
    department: string
    projects: Project[]
}

const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAverages = employees.map(emp => {
    const totalScore = emp.projects.reduce((sum, proj) => sum + proj.score, 0);
    const averageScore = emp.projects.length > 0 ? totalScore / emp.projects.length : 0;
    return {
        name: emp.name,
        averageScore: averageScore
    };
});
const topPerformers = employeeAverages.filter(emp => emp.averageScore > 85);
const employeesWithLowProjects = employees.filter(emp => {
    return emp.projects.some(proj => proj.score < 80);
});

console.log("====== 1. EMPLOYEE AVERAGE SCORES ======");
console.log(employeeAverages);

console.log("====== 2. EMPLOYEES WITH AVERAGE > 85 ======");
console.log(topPerformers);

console.log("====== 3. EMPLOYEES WITH AT LEAST ONE PROJECT < 80 ======");
console.log(employeesWithLowProjects);