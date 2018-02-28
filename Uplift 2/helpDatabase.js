src="http://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>


function myFunction() {
    var age = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

$(document).ready(function(){
var frm1 = $("#frm1");
var submitBtn = $("#submit-button");
submitBtn.click(function(e){
  e.preventDefault();
  var stress = $("#stress-select")
  alert(stress.val())
})
})
