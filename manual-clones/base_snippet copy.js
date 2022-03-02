function sequential_substraction(value, times, amount) {
  for (let index = 0; index < times; index++) {
    value = value - amount;
    if (value < 0) {
      break;
    }
  }
  return value;
}

new_value = sequential_substraction(100, 10, 9);
console.log(new_value);
