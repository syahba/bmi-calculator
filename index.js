// calculate bmi
const getBMI = (weight, height) => {
    let category;

    const data = weight / ((height/100) ** 2);
    const bmi = Math.round(data * 10) / 10;
    bmi < 18.5 ? category = 'Underweight' : bmi >= 18.5 && bmi <= 24.9 ? category = 'Normal' 
    : bmi >= 25 && bmi <= 29.9 ? category = 'Overweight' : category = 'Obesity';

    const res = `Your BMI is ${bmi} which means you are ${category}`;
    return res;
};
console.log(getBMI(40, 155));