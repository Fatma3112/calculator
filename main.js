

 function deletChar() {
    var result = document.getElementById("input");
    var remove = result.value;
    remove = remove.slice(0,-1);
    result.value = remove;

}

function number(num) {
    var result = document.getElementById("input");
    result.value += num;
}

function result() {
    var result = document.getElementById("input");
    var res = document.getElementById("output");
    res.value = eval(result.value);
}
function   clearResult() {
    var result = document.getElementById("input");
    result.value = "";
}








