$(document).ready(function () {
// In case of refreshing the site, we're going to clean up the input
$('#add-val').val("");
  $("#send").click(function() {
    var userInput = $("#add-val").val();
    if(userInput !== ""){
      $('ul').append("<li id='item' class='list-group-item'>" + userInput + "</li>");
      $('#add-val').val("");
    } else {
      alert("Empty input!");
    };
  });

  // Event handling through .on() using doubleclick selecting li elements then using some fancy animations to make elements dissapear.
  $('ul').on('dblclick', 'li', function() {
    $(this).slideUp();
  });
});