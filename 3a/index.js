function Calculator(value) {
  this.value = value;
}

Calculator.prototype.add = function (value) {
  this.value = this.value + value;
  return this;
};

Calculator.prototype.subtract = function (value) {
  this.value = this.value - value;
  return this;
};

Calculator.prototype.getAnswer = function () {
  return this.value;
};

console.log(new Calculator(2).add(2).add(2).subtract(3).getAnswer());
