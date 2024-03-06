function hexToDec(hexString) {
  const neg = hexString[0] == "-";
  if (neg) {
    hexString = hexString.replace("-", "");
  }

  const num = Number(`0x${hexString}`);

  return !neg ? num : -num;
}
