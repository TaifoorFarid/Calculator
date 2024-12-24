export function addSpaces(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") &&
      i !== 0
    ) {
      result += ` ${str[i]} `;
    } else {
      result += str[i];
    }
  }
  return result;
}

export function preFixExp(node) {
  const exp = [];
  pfe(node, exp);
  return exp;
}
function pfe(node, exp) {
  if (typeof node === "string") {
    exp.push(node);
    return;
  }
  exp.push(node.value);
  pfe(node.left, exp);
  pfe(node.right, exp);
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export function expressionTree(exp) {
  const tookens = exp.split(" ");
  while (tookens.length > 1) {
    let highPre = 1;
    for (let i = 1; i < tookens.length; i += 2) {
      if (precedence(tookens[highPre]) < precedence(tookens[i])) {
        highPre = i;
      }
    }
    const node = new Node(tookens[highPre]);
    node.left = tookens[highPre - 1];
    node.right = tookens[highPre + 1];
    tookens[highPre] = node;
    tookens.splice(highPre - 1, 1);
    tookens.splice(highPre, 1);
  }
  return tookens[0];
}
function precedence(op) {
  if (op === "*" || op === "/") return 2;
  if (op === "-" || op === "+") return 1;
}

export function solEquation(exp) {
  const stack = [];
  for (let i = exp.length - 1; i >= 0; i--) {
    if (!isNaN(exp[i])) {
      stack.push(Number(exp[i]));
    } else {
      let res = evaluate(stack.pop(), stack.pop(), exp[i]);
      stack.push(res);
    }
  }
  return stack[0];
}
function evaluate(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? undefined : num1 / num2;
    default:
      return undefined;
  }
}

// console.log();2*5+9-10/2
// console.log(solEquation(preFixExp(expressionTree(addSpaces("2*5+9-10/2")))));
// preFixExp({ value: 5, left: null, right: null });
