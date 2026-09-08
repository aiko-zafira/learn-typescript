/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patientList: Patient[]): number {
    return patientList.length;
}

function countAdmittedPatients(patientList: Patient[]): number {
    let count = 0;
    for (let i = 0; i < patientList.length; i++) {
        if (patientList[i].admitted) {
            count++;
        }
    }
    return count;
}

function countDischargedPatients(patientList: Patient[]): number {
    let count = 0;
    for (let i = 0; i < patientList.length; i++) {
        if (!patientList[i].admitted) {
            count++;
        }
    }
    return count;
}

function countPatientsByDepartment(patientList: Patient[], departmentName: string): number {
    let count = 0;
    for (let i = 0; i < patientList.length; i++) {
        if (patientList[i].department === departmentName) {
            count++;
        }
    }
    return count;
}

function findHighestBill(patientList: Patient[]): number {
    if (patientList.length === 0) return 0;
    let highest = patientList[0].bill;
    for (let i = 1; i < patientList.length; i++) {
        if (patientList[i].bill > highest) {
            highest = patientList[i].bill;
        }
    }
    return highest;
}

function findLowestBill(patientList: Patient[]): number {
    if (patientList.length === 0) return 0;
    let lowest = patientList[0].bill;
    for (let i = 1; i < patientList.length; i++) {
        if (patientList[i].bill < lowest) {
            lowest = patientList[i].bill;
        }
    }
    return lowest;
}

function calculateTotalRevenue(patientList: Patient[]): number {
    let total = 0;
    for (let i = 0; i < patientList.length; i++) {
        total += patientList[i].bill;
    }
    return total;
}

function calculateAverageBill(patientList: Patient[]): number {
    if (patientList.length === 0) return 0;
    let total = calculateTotalRevenue(patientList);
    return total / patientList.length;
}

function getAdmittedPatientNames(patientList: Patient[]): string[] {
    let admittedNames: string[] = [];
    for (let i = 0; i < patientList.length; i++) {
        if (patientList[i].admitted) {
            admittedNames.push(patientList[i].name);
        }
    }
    return admittedNames;
}

function printHospitalReport(patientList: Patient[]): void {
    console.log("=== Daily Hospital Report ===");
    console.log(`Total patients          : ${countTotalPatients(patientList)}`);
    console.log(`Total admitted patients : ${countAdmittedPatients(patientList)}`);
    console.log(`Total discharged patients: ${countDischargedPatients(patientList)}`);
    console.log(`Pediatrics Department   : ${countPatientsByDepartment(patientList, "Pediatrics")} patients`);
    console.log(`Cardiology Department   : ${countPatientsByDepartment(patientList, "Cardiology")} patients`);
    console.log(`Orthopedics Department  : ${countPatientsByDepartment(patientList, "Orthopedics")} patients`);
    console.log(`Highest hospital bill   : Rp${findHighestBill(patientList).toLocaleString("id-ID")}`);
    console.log(`Lowest hospital bill    : Rp${findLowestBill(patientList).toLocaleString("id-ID")}`);
    console.log(`Average hospital bill   : Rp${calculateAverageBill(patientList).toLocaleString("id-ID", { maximumFractionDigits: 0 })}`);
    console.log(`Total hospital revenue  : Rp${calculateTotalRevenue(patientList).toLocaleString("id-ID")}`);
    console.log(`Names of admitted       : ${getAdmittedPatientNames(patientList).join(", ")}`);
}

printHospitalReport(patients);