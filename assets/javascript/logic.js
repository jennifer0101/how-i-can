document.getElementById("testBtn").addEventListener("click", evalFunction);



// function to clear the text field when 'clear' button is clicked
function clearText(){
    document.getElementById("textArea").value="";
}

// function to evaluate text field and display results
function evalFunction(){
    // let x = document.getElementById("textArea").value;
    // console.log(x);
    let ul = document.getElementById("resultsList");
    let listString = document.getElementById("textArea");
    let li = document.createElement("li");
    li.setAttribute('id', listString.value);
    li.appendChild(document.createTextNode(listString.value));
    ul.appendChild(li);   
    document.getElementById("textArea").value="";
}


    




    // for (let i=0; i < x.length; i++) {
    //     console.log('number', x[i]);    
    // } if(isNaN(x)) {
    //     document.getElementById("demo").innerHTML =("The result is text."); 
    // } else {
    //     document.getElementById("demo").innerHTML =("The result is a number.");
    // }
//   }


