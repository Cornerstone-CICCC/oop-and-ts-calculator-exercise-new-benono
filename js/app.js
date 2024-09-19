class Calculator {
  constructor() {
    const btn = document.querySelector("#calculateBtn");
    btn.addEventListener("click", () => {
      this.compute();
    });
  }
  add(num1, num2) {
    return Number(num1) + Number(num2);
  }
  substract(num1, num2) {
    console.log(num1, num2);
    return Number(num1) - Number(num2);
  }
  multiply(num1, num2) {
    return Number(num1) * Number(num2);
  }
  divide(num1, num2) {
    return Number(num1) / Number(num2);
  }
  compute() {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const operator = document.querySelector("#operation").value;
    let val;
    switch (operator) {
      case "add":
        val = this.add(num1, num2);
        break;
      case "subtract":
        val = this.substract(num1, num2);
        break;
      case "multiply":
        val = this.multiply(num1, num2);
        break;
      case "divide":
        val = this.divide(num1, num2);
        break;
    }
    this.render(val);
  }
  render(val) {
    document.querySelector("#result").innerHTML = String(val);
    return;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calculator = new Calculator();
});
