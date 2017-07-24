





var alphabet = ["A", "B", "C", "D", "E", "F","G","H","I","J","K","L","M", "N", "O","P", "Q", "R", "S", "T","U","V", "W", "X", "Y", "Z"];
function randLetter(num){
    console.log(alphabet[Math.floor(Math.random()*num)]); 
}

randLetter(26);

function randWord(){
    var word = '';
    var length = 1 + rand(15);
    for (var i=0; i< length; i++){
        word = word + randLetter();
    }
    return word;
}

function randSentence(){
    var sentence = randWord();
    var length = rand(18);
    for (var i = 0; i < length, i++){
        sentence = sentence 
    }
}
