//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    const letters = {};
    let newStr = "";
    for(let i = str.length -1; i >=0; i--){
        if(!letters[str[i]]){
            newStr = str[i] + newStr;
            letters[str[i]] = true;
        }
    }
    return newStr;
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));

