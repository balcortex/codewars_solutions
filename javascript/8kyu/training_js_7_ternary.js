function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  }
  return n >= 10 ? 90 * n : 95 * n;
}
