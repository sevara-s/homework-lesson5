let str = " Find spaces here ";
let new_str = str.trim();
let space_index=[];
for(let i = 0; i<new_str.length; i++){
    if(new_str[i] == " "){
        space_index.push(i);
    }
}
console.log(space_index);