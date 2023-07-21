import express from 'express';
import {calculateBmi} from './bmiCalculator';
import { calculateExercise } from './exerciseCalculator';


 //import calculateBmi from './bmiCalculator';

const app = express();

app.use(express.json());

app.get('/hello',(_req,res) => {
    res.send('Hello Full Stack!');
});


app.get('/bmi',(req,res) => {    



    if (!req.query.weigth || isNaN(Number(req.query.weigth))|| !req.query.heigth || isNaN(Number(req.query.heigth)) ){
        res.status(400).send('malformatted parameters');
    } else {
        res.send( {
            weigth: req.query.weigth,
            heigth: req.query.heigth,
            bmi: calculateBmi(Number(req.query.heigth),Number(req.query.weigth)),
        });
    }
    
});

app.post('/exercises',(req,res) => {

//    console.log(req.body);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access 
if (!req.body.daily_exercises || !req.body.target) {

    res.status(400).send("parameters missing");
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
 else if (!Array.isArray((req.body.daily_exercises)) || isNaN(Number(req.body.target))) {

    res.status(400).send("malformatted parameters");
} else {

const daily_exercises : number[] = [];
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    for (const hours of req.body.daily_exercises) {
        if (isNaN(Number(hours))) {
            res.status(400).send("malformatted parameters");
            return;
  
        }
        daily_exercises.push(Number(hours));
    }
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
res.send(calculateExercise(daily_exercises,Number(req.body.target)));
}
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});