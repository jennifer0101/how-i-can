document.getElementById("testBtn").addEventListener("click", evalFunction);

// function to clear the text field when 'clear' button is clicked
function clearText(){
    document.getElementById("textArea").value="";
}

// function to find if input is a number or text
function evalFunction(){
    const inputString = document.getElementById("textArea").value;
    let result;
    for (let i=0; i < inputString.length; i++) {   
    } if(isNaN(inputString)) {
        result = "The result is text.";
    } else {
        result = "The result is a number.";
    }
    timeDateNow(inputString, result);
  }

// function to get current date and time
function timeDateNow(inputString, result){
    const day = new Date ();
    const date = (day.getMonth()+1)+"/"+day.getDate()+"/"+day.getFullYear();
    const hours = new Date ();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: TextTrackCue
    };
    const time = new Intl.DateTimeFormat('en-US', options).format(hours)
    const dateTime = date+" "+time;
    const userInput = ("The user entered"+" "+inputString+".");
    addToArray(userInput, inputString, dateTime, result);
}

// function to take input string and add to an array, count number of items in array
function addToArray(userInput, inputString, dateTime, result){
    const inputArray = inputString.split('');
    const lengthArray = inputArray.length;
    const displayMessage = (userInput+" "+result+" "+"There are"+" "+lengthArray+" "+"items in the list."+" "+dateTime)
    addToList(displayMessage, inputArray);
}

function addToList(displayMessage, inputArray){
    
}





//add to list

   
//     let ul = document.getElementById("resultsList");
//     let listString = document.getElementById("textArea");
//     let li = document.createElement("li");
//     li.setAttribute('id', listString.value);
//     li.appendChild(document.createTextNode(listString.value));
//     ul.appendChild(li);   
//     document.getElementById("textArea").value="";






