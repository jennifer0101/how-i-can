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
    // console.log(inputString, dateTime, result);
    const displayMessage = ("The user entered"+" "+inputString+"."+" "+result+" "+dateTime);
    console.log(displayMessage);

}

// function to take input string and add to an array
// function addToArray(inputString, result){
//     const inputArray = inputString.split('');
//     const lengthArray = inputArray.length;

// }

















//add to list

   
//     let ul = document.getElementById("resultsList");
//     let listString = document.getElementById("textArea");
//     let li = document.createElement("li");
//     li.setAttribute('id', listString.value);
//     li.appendChild(document.createTextNode(listString.value));
//     ul.appendChild(li);   
//     document.getElementById("textArea").value="";







// psuedo code

// function find result

// function find textarea string (pass result)

//     console log result

//     getElementById textarea/string 

//     console log string

// function date/time (pass string, result)

//     console log result

//     find date and time of entry 

//     console log string + result + date/time

// function textarea amount (pass string, result, date/time)

//     console log string + result + date/time

//     add string to Array

//     loop through array

//     count keystrokes/text

//     console log textarea amount + string + result + date/time

// function display (textarea amount + string + result + date/time)

//     display textarea amount + string + result + date/time into list results 






