function unique(arr) {
  let res = [];
  arr.forEach((el) => {
    if (!res.includes(el)) {
      res.push(el);
    }
  });
  return res;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
