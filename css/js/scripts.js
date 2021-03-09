


$(document).ready(function() {
  $("button.h6").click(function() {
    $(".walrus").toggle();
  });
  $(document).ready(function() {
    $("button.h7").click(function() {
      $(".walrus").toggle();
    });
    $(document).ready(function() {
      $("button.h8").click(function() {
        $(".walrus").toggle();
      });
       $("p").hover(function(){
        $(this).css("background-color", "lightcyan");
        });
});
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["femail"].value;
  var k = document.forms["myForm"]["fmessage"].value;
  if (x == "Elvis") {
    alert("Elvis we have received your message.Thank you for reaching out to us");
    return false;
  }