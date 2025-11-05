// 4.1 Add Function
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 4.2 Subtract Function
export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  // Start from the first number, subtract all others
  return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
}

// 4.3 Multiply Function
export function multiply(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((product, num) => product * num, 1);
}

// 4.4 Divide Function
export function divide(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((acc, num) => {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    return acc / num;
  }, numbers[0]);
}


