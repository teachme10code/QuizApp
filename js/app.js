var i = 0;
var n = 1;
var numRight = 0;
var is_checked = true;

function validateForm() {
	$('input').each(function() {
		is_checked = $(this).is(':checked');
		if (is_checked) {
			incrementIndex();
			changeAnswerSet();
			displayQuestionStuff();
			countCorrectAnswers();
			displayFunFact();
		}
		return
	});
}

function incrementIndex(){
	i++;
	n++;
	return
}

function changeAnswerSet() {
	var currentAnswerSet = ".form_container"+i;
	var nextAnswerSet = ".form_container"+n;
	$(nextAnswerSet).css("visibility", "visible");
	$(currentAnswerSet).css("visibility", "hidden");
	if(n>5){
		displayFinalResults();
	}
}

function displayQuestionStuff() {
	var questions = ["What is the most popular breed of dog?", "What is the most popular male dog name?", "What is the most popular female dog name?", "Which dog breed has a black tongue?", "What is the name of the phobia for someone who has a fear of dogs?"];
	var questionNumber = n + " of " + questions.length;
	var question = questions[i];
	if (n <= questions.length) {
		$('#questionNumber').text("Question " + questionNumber);
	}
	$('#question').text(question);
	return 
}

function countCorrectAnswers() {
	var answer = $(".list").find("input[name=answer]:checked").val();
	console.log(answer);
	if(answer === "right" && $('input').is(':checked')) {
		numRight++;
	}
	return
}

function displayFunFact() {
	var factList = ["","* Labradors are athletic, playful, and the most popular breed of dog by registered ownership in Australia, Canada, New Zealand, the United Kingdom, and the United States (since 1991).", "* After Max, the names Charlie, Buddy and Jack are the next most popular names for male dogs.", "* The name Bella is the most popular, with Lucy, Bailey and Daisy as the following top choices for female dogs.", "* The blue-black/purple tongue gene appears to be dominant, as most mixed breed dogs that come from a Chow Chow retain that tongue color.", "* Agrizoophobia is a fear of wild animals, Barophobia is the irrational fear of gravity, and Ranidaphobia is the fear of frogs and toads."]
	$("#funFact").text(factList[i]);
}

function displayFinalResults() {
	$('#questionNumber').css("visibility", "hidden");
	$('#question').css("visibility", "hidden");
	$('#submit').css("visibility", "hidden");
	$('#finalResults').css("visibility", "visible");
	$('#finalResults').text("You got " + numRight + " out of " + i + " correct!");
}
