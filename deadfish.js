function parse(data) {
  const solution = [];
  const operation = data.split("");

  let val = 0;
  for (let i = 0; i <= operation.length; i++) {
    if (operation[i] === "i") {
      val = val + 1;
    } else if (operation[i] === "d") {
      val = val - 1;
    } else if (operation[i] === "s") {
      val = val * val;
    } else if (operation[i] === "o") {
      solution.push(val);
    }
  }
  return solution;
}

console.log(parse("iiisdoso"));
