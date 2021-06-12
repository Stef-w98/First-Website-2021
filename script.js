

var submit = document.getElementById("isubmit");
console.log(submit);
submit.addEventListener("click", getInputValue );

function getInputValue(){

  var inputVal = document.getElementById("uname").value;


  alert(inputVal);
}
