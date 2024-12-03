let soz = "Javascript makes web development enjoyable";
let sozarr = soz.split(" ");
let maxlen = 0;
let minlen = sozarr[0].length;
let max = "";
let min = "";

for (let i = 0; i < sozarr.length; i++) {
  if (sozarr[i].length > maxlen) {
    max = sozarr[i];
    maxlen = sozarr[i].length;
  }

  if (minlen > sozarr[i].length) {
    min = sozarr[i];
    minlen = sozarr[i].length;
  }
}

console.log(max);
console.log(min);
