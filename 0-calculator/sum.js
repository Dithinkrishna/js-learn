function buttonclick(val) {
    document.getElementById('screen').value = document.getElementById('screen').value + val;
}
function clearDisplay() {
    document.getElementById("screen").value = ""
}
function buttonEquals(val) {
    var text = document.getElementById("screen").value;
    var result = eval(text)
    document.getElementById("screen").value = result
}
function operationClick(val){

    alert("WARNING..! Input is blocked")
}