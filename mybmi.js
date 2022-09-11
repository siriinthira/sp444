const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to BMI Calculator');
});

app.get('/bmi/:h/:w', (req,res) => {
    let height = parseInt(req.params.h)/100;
    let weight = parseInt(req.params.w);
    let bmi = (weight / (height * height));
    bmi =  bmi.toFixed(2);
   
 
    if (bmi < 18.5)
    res.send("Your BMI is: " + bmi + ", you're underweight");    

    else if (bmi >= 18.5 && bmi < 24.9)
        res.send("Your BMI is: " + bmi + " , you're Healthy");

    else if (bmi >= 24.9 && bmi < 30)
    res.send("Your BMI is: " + bmi + ", you're overweight");

    else if (bmi >= 30)
        res.send("Your BMI is: " + bmi + " , you're suffering from Obesity");

 });

 app.listen(3000,function(){
    console.log("APIs running at port 3000");
})