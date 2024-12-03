let str ="apple342banana3349orange";
let res = "";
for (let i = 0; i<str.length; i++){
    if (isNaN(str[i])){
        res+=str[i];
    }
}
console.log(res);