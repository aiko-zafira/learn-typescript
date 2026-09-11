/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const score of scores) {
        callback(score);        
    }        
}


function printScore(score: number) {
    console.log(`Score: ${score}`);
}


function showGrade(score: number) {
    let grade = `D`;
    if (score >= 90) grade = `A`;
    if (score >= 80 && score < 90) grade = `B`;
    if (score >= 70 && score < 80) grade = `c`;
    console.log(`Score: ${score} - Grade: ${grade}`);
}


// implementation of callback function
processScores(scores, printScore)
processScores(scores, showGrade)