function pickIt(arr) {
  var odd = [],
    even = [];

  for (const n of arr) {
    if (n % 2 == 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }
  return [odd, even];
}
