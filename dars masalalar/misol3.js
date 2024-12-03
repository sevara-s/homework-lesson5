let soz = "apple banana apple orange apple";
let word = "apple";
let count = 0;
let sozarr = soz.split(" ");
for (let i= 0; i<sozarr.length; i++){
    if (sozarr[i]==word){
        count++;
    }
}
console.log(word+" " +"dan" + " "+ count + "ta bor");


