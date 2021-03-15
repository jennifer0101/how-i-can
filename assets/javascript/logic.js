// function to clear the text field when 'clear' button is clicked
function clearText(){
    document.getElementById("textArea").value="";
}

// function to evaluate text field and display results
function evalFunction(){
    let x = document.getElementById("textArea").value;
    console.log(x);
    for (let i=0; i < x.length; i++) {
        console.log('number', x[i]);    
    } if(isNaN(x)) {
        document.getElementById("demo").innerHTML =("The result is text."); 
    } else {
        document.getElementById("demo").innerHTML =("The result is a number.");
    }
  }


