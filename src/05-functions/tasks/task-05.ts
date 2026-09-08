/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highest=scores[0];
  for (let i = 1; i< scores.length; i++){
    if (scores[i] > highest){
      highest=scores[i];
    }
  }
  return highest;
}

function findLowestScore(scores: number[]): number {
  let lowest = scores[0];
  for (let i = 1; i< scores.length; i++){
    if (scores[i]<lowest){
      lowest = scores[i];
    }
  }
  return lowest;
}

function calculateAverage(scores: number[]): number {
    if (scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i<scores.length; i++){
      sum += scores[i];
    }
    return sum/scores.length;
}

function countPassedStudents(scores: number[]): number {
  let count = 0;
  for (let i = 0; i < scores.length; i++){
    if (scores[i]>= 75){
      count++;
    }
  }
  return count;
}

function displayReport(scores: number[]): void {
    console.log("=== Laporan Statistik Nilai ===");
    console.log(`Nilai Tertinggi : ${findHighestScore(scores)}`);
    console.log(`Nilai Terendah  : ${findLowestScore(scores)}`);
    console.log(`Rata-rata Nilai : ${calculateAverage(scores).toFixed(2)}`);
    console.log(`Jumlah yang Lulus: ${countPassedStudents(scores)} siswa`);
}
displayReport(scores);