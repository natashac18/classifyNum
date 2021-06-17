
function classifyNum(){
    let num = prompt("Enter a number");
    let test= num % 2;


    if (test===0){
        document.getElementById("Answer").innerHTML= "The number " + num + " is EVEN!"
    } else {
        document.getElementById("Answer").innerHTML= "The number " + num + " is ODD!"
    }  
}