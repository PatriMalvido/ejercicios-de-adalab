"use strict";

function get100Numbers() {
  const arr = [];
  const arrlength = 101;
  for (let i = 1; i < arrlength; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(get100Numbers());

function getReversed100Numbers() {
  const res = get100Numbers();
  return res.reverse();
}

console.log(getReversed100Numbers());
