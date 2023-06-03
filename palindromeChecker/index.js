function getInputValue(){
    let inputValue=document.getElementById("textBox").value;
    var reverseInput=inputValue.split('').reverse().join('');

    if(inputValue=== reverseInput){
        document.getElementById("result").innerHTML = "The input is a palindrome.";
    }
    else{
        document.getElementById("result").innerHTML = "The input is not a palindrome.";
    }
}