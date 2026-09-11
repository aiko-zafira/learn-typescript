/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */
function processScores(
    score: number[],
    callback: (score: number) => void
): void{
    for (const score of scores){
        callback(score);
    }
}

function checkPassStatus(score:number): void{
    const status = score >= 70? "Passed":"Failed";
    console.log(`Score:${score}-${status}`);
}

function showGrade(score: number) {
    let grade = `D`;
    if (score >= 90) grade = `A`;
    if (score >= 80 && score < 90) grade = `B`;
    if (score >= 70 && score < 80) grade = `c`;
    console.log(`Score: ${score} - Grade: ${grade}`);
}

function addBonusPoints(score: number): void {
    const newScore = score + 5;
    console.log(`Original: ${score} -> With Bonus: ${newScore}`);
}

function checkExcellence(score: number): void {
    const classification = score > 90 ? "Excellent" : "Reguler";
    console.log(`Score: ${score} - ${classification}`);
}

console.log("--- Pass/Fail Status ---");
processScores(scores, checkPassStatus);

console.log("\n--- Grades ---");
processScores(scores, showGrade);

console.log("\n--- Bonus Points (+5) ---");
processScores(scores, addBonusPoints);

console.log("\n--- Excellence Check ---");
processScores(scores, checkExcellence);