let str = "Javascript123 is fun";

let res ="";
for(let i = 0; i<str.length; i++){
    if(str[i]===str[i].toLocaleLowerCase() && str[i] != " " &&   !+str[i]){
        res = str[i] + res;
    }
}
console.log(res);