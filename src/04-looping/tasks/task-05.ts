/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

// 1. Initialize variables for counting medals and the total score
let goldCount = 0;
let silverCount = 0;
let bronzeCount = 0;
let noMedalCount = 0;
let totalScore = 0;

// 2. Iterate through the scores using a loop
for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    
    // Add to the total score for the average calculation later
    totalScore += score;

    // 3. Use conditional logic to check the medal brackets
    if (score >= 95) {
        goldCount++;
    } else if (score >= 85) {
        // We only need to check if it's >= 85 here, because the previous 
        // condition already caught anything 95 or higher.
        silverCount++;
    } else if (score >= 75) {
        bronzeCount++;
    } else {
        noMedalCount++;
    }
}

// 4. Calculate the average score
const averageScore = totalScore / scores.length;

// Display the results
console.log(`Gold Medals: ${goldCount}`);
console.log(`Silver Medals: ${silverCount}`);
console.log(`Bronze Medals: ${bronzeCount}`);
console.log(`No Medal: ${noMedalCount}`);
console.log(`Average Score: ${averageScore}`);