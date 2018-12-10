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
