$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var nounInput = $("input#noun").val();
    var verbInput = $("input#verb").val();
    var exclamationInput = $("input#exclamation").val();
    var adjectiveInput = $("input#adjective").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".noun").text(nounInput);
    $(".verb").text(verbInput);
    $(".exclamation").text(exclamationInput);
    $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();
  });
});
