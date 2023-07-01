import express from 'express';
import {calculateBmi} from './bmiCalculator';


 //import calculateBmi from './bmiCalculator';

const app = express();

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

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});