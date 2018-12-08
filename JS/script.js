var correct =function(one , two , three , four , five){
  return parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four) + parseInt(five);
}


$(document).ready(function() {
  $("form#questions").submit(function(event) {

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var answer = correct(question1,question2,question3,question4,question5);



    $("#result").text("Your answer is "+answer);

      $(".answer").show();
      event.preventDefault();
  });
});




$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").append(person1Input);
        $(".person2").append(person2Input);
        $(".animal").append(animalInput);
        $(".exclamation").append(exclamationInput);
        $(".verb").append(verbInput);
        $(".noun").append(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});
