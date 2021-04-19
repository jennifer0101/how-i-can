const inputArray = [];

document.getElementById("testBtn").addEventListener("click", evalFunction);
   
// function to find if input is a number or text
function evalFunction(){
    const inputString = document.getElementById("textArea").value;
    if (inputString == null || inputString == "") {
       clearText();
        return false;
    }
    let result;
    for (let i=0; i < inputString.length; i++) {  
    } if(isNaN(inputString)) {
        result = "This is text.";
    } else {
        result = "This is a number.";
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
        second: 'numeric',
        hour12: TextTrackCue
    };
    const time = new Intl.DateTimeFormat('en-US', options).format(hours)
    const dateTime = date+" "+time;
    const userInput = ("The user entered:"+" "+inputString+".");
    addToArray(userInput, dateTime, result);
}

// function to add input items to an array, count number of items
function addToArray(userInput, dateTime, result){
    textvalue = document.getElementById('textArea').value;
    inputArray.push(textvalue);  
    console.log(inputArray);
    const lengthArray = inputArray.length;
    const displayMessage = (userInput+" "+result+" "+"There are"+" "+lengthArray+" "+"items in the list."+" "+dateTime);
    addToList(displayMessage, inputArray);
}

// function to add the input text, result, number in array, date and time to list in results area.
function addToList(displayMessage, inputArray){
    if (inputArray === "") {
        clearText();
    } else {
        const list = document.getElementById("resultsList");
        const messageResult = displayMessage;
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(messageResult));
        list.appendChild(entry);
    }
    document.getElementById("textArea").value="";
}

// function to clear the text field when 'clear' button is clicked
function clearText(){
    document.getElementById("textArea").value="";
    
}


