var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
var confirm = document.getElementById("confirm");
var result = document.getElementById("result");
var BMI, height, weight;

confirm.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.innerText = BMI;

    if (BMI < 18.5) {
        result.innerText = "您的BMI為" + BMI + ", 小於健康範圍18.5";
    } else if ((BMI > 18.5) && (BMI < 24.9)) {
        result.innerText = "您的BMI為" + BMI + ", 非常健康，繼續保持喔";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        result.innerText = "您的BMI為" + BMI + ", 有點超過範圍，要注意飲食及運動喔";
    } else {
        result.innerText = "您的BMI為" + BMI + ", 身體亮紅燈囉，請加強控制飲食及運動";
    }
});