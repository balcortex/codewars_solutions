function grabDoll(dolls) {
  var bag = [];
  var items = ["Hello Kitty", "Barbie doll"];

  for (let i = 0; i < dolls.length; i++) {
    let cur_doll = dolls[i];
    if (items.includes(cur_doll)) {
      bag.push(cur_doll);
    } else {
      continue;
    }
    if (bag.length >= 3) {
      break;
    }
  }

  return bag;
}
