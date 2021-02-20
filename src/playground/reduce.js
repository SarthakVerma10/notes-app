const data = [1,2,3,4]

const reducer = (acc, currVal) => {
  console.log(` acc = ${acc} and currVal = ${currVal}`);
  return acc + currVal;
}

console.log(data.reduce(reducer));
