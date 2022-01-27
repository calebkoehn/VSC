//function d6(){
    //var roll = Math.floor(Math.random() * 20) +1;

    //return roll;

//}

//var playerRoll = d6();
//console.log("The player rolled: " + playerRoll);

function roll8ball(){
    var lifesAnswers = [

        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var x = Math.floor(Math.random()* lifesAnswers.length);
    return lifesAnswers[x];
}

console.log(roll8ball());
