function shout(string){
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
    let lowerCase = "I can't hear you!";
    let upperCase = "YES INDEED!";
    let loveYou = "I love you, too.";

    if(string===string.toLowerCase(string)){
        return lowerCase;
    }
    else if(string===string.toUpperCase(string)){
        return upperCase;
    }
    else if(string==="I love you, Grandma."){
        return loveYou;
    }
}
