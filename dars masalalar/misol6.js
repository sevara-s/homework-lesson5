let str = "React is fun";
let ar= str.split(" ");
let res = [];
for (let i = 0; i< ar.length; i++){
    let res1="";
    for(let j =0; j<ar[i].length; j++){
        res1 = ar[i][j] + res1;   
    }
    res.push(res1);
}
let final = res.join(" ");
console.log(final);