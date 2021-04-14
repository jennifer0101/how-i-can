document.getElementById("testBtn").addEventListener("click", evalFunction);

// function to clear the text field when 'clear' button is clicked
function clearText(){
    document.getElementById("textArea").value="";
}

// function to find if input is a number or text
function evalFunction(){
    let inputString = document.getElementById("textArea").value;
    let result;
    for (let i=0; i < inputString.length; i++) {
        // console.log('number', x[i]);    
    } if(isNaN(inputString)) {
        // document.getElementById("demo").innerHTML =("The result is text.");
        result = "The result is text.";
    } else {
        // document.getElementById("demo").innerHTML =("The result is a number.");
        result = "The result is a number.";
    }
    addToArray(inputString, result);
    // addToArray(result);
  }

//   function 


// function to take input string and add to an array
function addToArray(inputString, result){
    // console.log(result);
    let stringArray = [];
    stringArray = inputString
    // console.log (stringArray);
    
    timeDateNow(inputString, result)
}

// function to get current date and time
function timeDateNow(inputString, result){
    let day = new Date ();
    let date = (day.getMonth()+1)+"/"+day.getDate()+"/"+day.getFullYear();
    let hours = new Date ();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: TextTrackCue
    };
    let time = new Intl.DateTimeFormat('en-US', options).format(hours)
    console.log(time)
    let dateTime = date+" "+time;
    console.log(inputString, dateTime, result);
}

// function to evaluate text field, take one string, add to list, remove string from text field
// function evalFunction(){
   
//     let ul = document.getElementById("resultsList");
//     let listString = document.getElementById("textArea");
//     let li = document.createElement("li");
//     li.setAttribute('id', listString.value);
//     li.appendChild(document.createTextNode(listString.value));
//     ul.appendChild(li);   
//     document.getElementById("textArea").value="";
// }






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






