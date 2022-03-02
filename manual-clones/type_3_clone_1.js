function sequential_substraction(value, times, amount) {
  new_value = value;
  for (let index = 0; index < times; index++) {
    new_value = new_value - amount;
    if (new_value < 0) {
      break;
    }
  }
  return new_value;
}

new_value = sequential_substraction(100, 10, 9);
console.log(new_value);
