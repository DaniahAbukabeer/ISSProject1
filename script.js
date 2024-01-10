var p;
var q;
var n;
var cyperText;
var plainText;

function MainForm(pval, qval, nval) {
  p = document.getElementById(pval).value;
  q = document.getElementById(qval).value;
  n = document.getElementById(nval).value;

  console.log("function is called and the values are " + p + q + n);
}


function Encrypte(plainTextValue, outputId) {
  plainText = plainTextValue;


  DisplayOutPut(outputId, plainText)
}

function Decrypte(cyperTextValue) {

  cyperText = cyperTextValue;
}


function DisplayOutPut(feildId, outPut) {

  var temp = document.getElementById(feildId);
  temp.textContent = outPut;
}