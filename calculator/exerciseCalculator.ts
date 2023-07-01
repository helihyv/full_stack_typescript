interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

interface ExerciseValues {
    target: number;
    dailyHours: number[];
}

const parseExerciseArguments = (args: string[]): ExerciseValues => {

    if (args.length < 4) throw new Error('Not enough arguments');

    if (isNaN(Number(args[2]))) throw new Error('First argument (target value) was not a number');

    const dailyHours = args.slice(3).map( element => Number(element));


    dailyHours.forEach(element => {
        if (isNaN(element)) {
            throw new Error ('At least one of the arguments for daily hours was not a number!');
        }
        
    });

    return {
        target: Number(args[2]),
        dailyHours
    };


}; 
const calculateExercise = (dailyHours: number[], target: number): ExerciseResult => {

    let trainingDays = 0;
    let totalHours = 0;

    dailyHours.forEach((hours) => {
        if (hours > 0) {
            trainingDays += 1;
            totalHours += hours;
        }
    }); 
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
            ratingDescription = "Far from target. Try harder next time.";
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
    };

}; 

try {
    const {target, dailyHours} = parseExerciseArguments(process.argv);
    console.log(calculateExercise (dailyHours,target));
} catch (error: unknown) {
    let errorMessage = 'An error occurred. ';
    if (error instanceof Error) {
        errorMessage += 'Error: ' + error.message;
    }
    console.log(errorMessage);
}