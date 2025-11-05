import _ from "lodash";

// 5.1 Parse Numbers Function
export function parseNumbers(input) {
  
  const numbers = _.map(input, (str) => Number(str));
  return _.filter(numbers, (num) => Number.isFinite(num));
}

// 5.2 Validate Operation Function
export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

