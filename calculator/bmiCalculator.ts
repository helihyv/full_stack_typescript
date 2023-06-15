const calculateBmi = (height: number, weight: number): string => {

    const bmi = weight/((height/100)^2);

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

console.log(calculateBmi(180,74));
