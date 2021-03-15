// function to clear the text field when 'clear' button is clicked
function clearText(){
    document.getElementById("textArea").value="";
}

// function to evaluate text field and display results
// function evalFunction() {
//     let x = document.getElementById("textArea").value;
//     document.getElementById("demo").innerHTML = x;
//   }

function evalFunction() {
    let x = document.getElementById("textArea").value;
    console.log(x);
    for (let i=0; i < x.length; i++) {
        console.log('number', x[i]);
    }
    // document.getElementById("demo").innerHTML = x;
  }


// function evaluateText(input){
//     alert("clicked on " + element.value);
//     let str = String(input);
//     for( let i = 0; i < str.length; i++){
//               console.log(str.charAt(i));
//         if(!isNaN(str.charAt(i))){           //if the string is a number, do the following
//             return true;
//         }
//     }
// }
