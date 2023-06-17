interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercise = (dailyHours: number[], target: number): ExerciseResult => {

    let trainingDays: number = 0;
    let totalHours: number = 0;

    dailyHours.forEach((hours) => {
        if (hours > 0) {
            trainingDays += 1;
            totalHours += hours;
        }
    }) 
    const periodLength: number = dailyHours.length;
    const average: number = totalHours/periodLength;

    let success: boolean;
    let rating: number;
    let ratingDescription: string;

    if (average >= target) {
        success = true;
        rating = 3;
        ratingDescription = "Good job! Target reached.";      
    } else {
        success = false;
        if (average >= target/2) {
            rating = 2;
            ratingDescription = "not too bad but could be better";
        } else {
            rating = 1;
            ratingDescription = "TFar from target. Try harder next time.";
        }
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }

} 

console.log(calculateExercise ([3,0,2,4.5,0,3,1],2));