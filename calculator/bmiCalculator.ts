interface BmiValues {
    height: number;
    weight: number;
}

const parseArguments = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {

        if (Number(args[2]) > 0 && Number(args[3]) > 0) {

            return {
                height: Number(args[2]),
                weight: Number(args[3])
            } 
        } else {
            throw new Error('Provided arguments were not positive numbers!');
        }
    } else {
        throw new Error('Provided arguments were not numbers!');
    }
}

export const calculateBmi = (height: number, weight: number): string => {


    const bmi = weight/((height/100)**2);

    if (bmi < 18.5) {

        return "Underweight (unhealthy weight)";
    }
    
    if (bmi < 25) {
        return "Normal (healthy weight)";
    }
    
    if (bmi < 30) {
        return "Overweight (unhealthy weight)";
    }


    
    return "Obese (unhealthy weight)";

}

try {
    const {height, weight} = parseArguments(process.argv);
    console.log(calculateBmi(height,weight));
} catch (error: unknown) {
    let errorMessage = 'An error occurred. '
    if (error instanceof Error) {
        errorMessage += 'Error: ' + error.message;
    }
    console.log(errorMessage);
}
