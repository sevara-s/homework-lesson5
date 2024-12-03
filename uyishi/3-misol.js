let str = "apple orange apple banana orange";
let to_arr= str.split(" ");
let res=[];
for(let i = 0; i<to_arr.length; i++){
     if(!res.includes(to_arr[i])){
        res.push(to_arr[i]);

     }
}
console.log(res);