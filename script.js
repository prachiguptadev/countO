function getLetterO(word) {
    let count = 0;

    word = word.toLowerCase();    //word convert to all lowercase 

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "o") {      //cheak condition
            count++;
        }
    }
    return count;
}

const str = "Rovor herO";
console.log(getLetterO(str));       //invoke the fuction