
let soz = "Hello World!";

let soz2 = soz.split("");

for (let i = 0; i < soz2.length; i++) {
  if (soz2[i] === soz2[i].toUpperCase()) {
    soz2[i] = soz2[i].toLowerCase();
  } else if (soz2[i] === soz2[i].toLowerCase()) {
    soz2[i] = soz2[i].toUpperCase();
  }
}
soz = soz2.join("");
console.log(soz);
