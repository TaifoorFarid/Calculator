import * as calFile from "./calculationsFile.js";

const ac = document.getElementsByClassName("ac")[0];
const del = document.getElementsByClassName("del")[0];
const div = document.getElementsByClassName("div")[0];
const multi = document.getElementsByClassName("multi")[0];
const subtract = document.getElementsByClassName("subtract")[0];
const add = document.getElementsByClassName("add")[0];
const equal = document.getElementsByClassName("equal")[0];
const dot = document.getElementsByClassName("dot")[0];

const zero = document.getElementsByClassName("zero")[0];
const one = document.getElementsByClassName("one")[0];
const two = document.getElementsByClassName("two")[0];
const three = document.getElementsByClassName("three")[0];
const four = document.getElementsByClassName("four")[0];
const five = document.getElementsByClassName("five")[0];
const six = document.getElementsByClassName("six")[0];
const seven = document.getElementsByClassName("seven")[0];
const eight = document.getElementsByClassName("eight")[0];
const nine = document.getElementsByClassName("nine")[0];

const textArea = document.getElementsByClassName("text-field")[0];

equal.addEventListener("click", () => {
  let equation = textArea.innerText;
  equation = calFile.addSpaces(equation);
  equation = calFile.expressionTree(equation);
  equation = calFile.preFixExp(equation);
  const result = calFile.solEquation(equation);
  textArea.innerHTML = result;
});

// console.log(ac);
ac.addEventListener("click", () => {
  textArea.innerHTML = "";
});

del.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML = equation.slice(0, equation.length - 1);
});

div.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "/";
});

multi.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "*";
});

subtract.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "-";
});

add.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "+";
});

dot.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += ".";
});

zero.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "0";
});

one.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "1";
});

two.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "2";
});

three.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "3";
});

four.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "4";
});

five.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "5";
});

six.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "6";
});

seven.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "7";
});

eight.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "8";
});

nine.addEventListener("click", () => {
  const equation = textArea.innerText;
  textArea.innerHTML += "9";
});
