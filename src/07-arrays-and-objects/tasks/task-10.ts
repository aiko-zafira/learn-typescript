/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */

    type Question = {
    id: number
    question: string
    correctAnswer: string
    category: string
}

type SubmissionAnswer = {
    questionId: number
    answer: string
}

type Submission = {
    student: string
    answers: SubmissionAnswer[]
}

const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const questionMap = new Map<number, Question>();
questions.forEach(q => questionMap.set(q.id, q));

const studentResults = submissions.map(sub => {
    let correctCount = 0;
    let wrongCount = 0;

    sub.answers.forEach(ans => {
        const question = questionMap.get(ans.questionId);
        if (question && question.correctAnswer === ans.answer) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    return {
        student: sub.student,
        correct: correctCount,
        wrong: wrongCount,
        score: correctCount * 25
    };
});
const categoryStats: { [category: string]: { totalScore: number; count: number } } = {};

submissions.forEach(sub => {
    sub.answers.forEach(ans => {
        const question = questionMap.get(ans.questionId);
        if (question) {
            const isCorrect = question.correctAnswer === ans.answer ? 100 : 0;
            if (!categoryStats[question.category]) {
                categoryStats[question.category] = { totalScore: 0, count: 0 };
            }
            categoryStats[question.category].totalScore += isCorrect;
            categoryStats[question.category].count += 1;
        }
    });
});

const categoryAverages: { [category: string]: number } = {};
for (const cat in categoryStats) {
    categoryAverages[cat] = Number((categoryStats[cat].totalScore / categoryStats[cat].count).toFixed(2));
}

const totalStudents = studentResults.length;
const totalScoreSum = studentResults.reduce((sum, s) => sum + s.score, 0);
const averageScore = Number((totalScoreSum / totalStudents).toFixed(2));
const highestScore = Math.max(...studentResults.map(s => s.score));
const lowestScore = Math.min(...studentResults.map(s => s.score));