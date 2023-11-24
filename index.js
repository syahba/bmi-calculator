// call elements
const submit = document.getElementById('submit');
const results = document.getElementById('results');
const inputBox = document.getElementsByClassName('input-box');
const card = document.getElementsByClassName('card');

// start action
submit.addEventListener('click', (event) => {
    event.preventDefault();
    getInput();
});

// get input value
const getInput = () => {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    inputBox[0].style.borderColor = '#C9E0E5';
    inputBox[1].style.borderColor = '#C9E0E5';

    if (!weight || !height) {
        if (!weight) {
            inputBox[0].style.borderColor = 'red';
        };
        if (!height) {
            inputBox[1].style.borderColor = 'red';
        };
        results.innerHTML = `<p style="color:red">Please check your weight and height again</p>`;
    } else {
        getBMI(weight, height);
    };
    card[0].style.height = '528px';
};

// calculate bmi
const getBMI = (weight, height) => {
    let category;

    const data = weight / ((height/100) ** 2);
    const bmi = Math.round(data * 10) / 10;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    };
    
    results.innerHTML = `<p>Your BMI is <b>${bmi}</b> which means you are <b>${category}</b></p>`;
};