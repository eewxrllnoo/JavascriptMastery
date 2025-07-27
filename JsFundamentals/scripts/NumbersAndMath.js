export function numbersMath() {
  const sum = 2 + 2 + 2;
  console.log(sum);

  const sum2 = 10.9 * 2 + 20.95;
  console.log(sum2);

  // Order of Operations
  //   * / are done first
  // + - are done after

  // * / have the same priority - calculate from left to right
  // + - have the same priority

  // We can use (...) to control which parts gets done first

  const sum3 = 1 + 1 * 3;
  console.log(sum3);

  const sum4 = (1 + 1) * 3;
  console.log(sum4);
}
