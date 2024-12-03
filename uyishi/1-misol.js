let str = "JavaScriptIsAmazing";
let start = 4;
let end = 14;
let str2= str.slice(start,end);
let res = "";
for(let i = 0; i<str2.length; i++){
    if (str2[i] == str2[i].toUpperCase()){
        res+=str2[i].toLocaleLowerCase();
    }else{
        res+=str2[i];
    }
}
console.log(res);