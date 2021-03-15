function clearText(){
document.getElementById("textArea").value="";

}

function evalFunction() {
    var x = document.getElementById("textArea").value;
    document.getElementById("demo").innerHTML = x;
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
