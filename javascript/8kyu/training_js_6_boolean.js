function trueOrFalse(val) {
  if (val == false || val == NaN || val == undefined) {
    return "false";
  }
  return "true";
}
