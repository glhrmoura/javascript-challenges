const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);

const sub = (a, b) => Math.max(a, b) - Math.min(a, b);

const exec = (command, stack) => {
  switch (command) {
    case 'ADD', '+':  
      stack = [...stack.slice(0, stack.length - 2), sum(stack.slice(stack.length - 2, stack.length))];
    case 'SUB', '-':
      stack = [...stack.slice(0, stack.length - 2), sub(...stack.slice(stack.length - 2, stack.length))];
    case 'POP':
      stack = stack.slice(0, stack.length - 1);
    case 'DUP':
      stack = [...stack, stack[stack.length - 1]];
    default:
      stack.push(Number(command));
  }
}

const stackMachineCalculator = (instructions) => {
  let stack = [];
  const commands = instructions.split(' ');

  commands.forEach((command) => exec(command, stack));

  return stack[stack.length - 1];
}

module.exports = stackMachineCalculator
