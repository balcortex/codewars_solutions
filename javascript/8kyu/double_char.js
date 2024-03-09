function doubleChar(str) {
  strOut = "";

  for (const c of str) {
    strOut += c + c;
  }

  return strOut;
}
