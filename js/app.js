var i = 0;
var n = 1;
var numRight = 0;

function incrementIndex(){
	i++;
	n++;
	return
}

function changeAnswerSet() {
	var currentAnswerSet = ".form_container"+i;
	var nextAnswerSet = ".form_container"+n;
	$(nextAnswerSet).css("visibility", "visible");
	if(n<=5){
		$(currentAnswerSet).css("visibility", "hidden");
		} else {
		return
	}
}

function displayQuestion() {
	var questions = ["1. What is the most popular breed of dog?", "2. What is the most popular male dog name?", "3. What is the most popular female dog name?", "4. Which dog breed has a black tongue?", "5. What is the name of the phobia for someone who has a fear of dogs?"];
	var question = questions[i];
	$('#question').text(question);
	return
}

function countCorrectAnswers() {
	var answer = $(".list").find("input[name=answer]:checked").val();
	if(answer === "right") {
		numRight++;
		console.log(numRight);
	} else {
		return
	}
}

function displayFunFact() {
	var factList = ["","Fact: Labradors are athletic, playful, and the most popular breed of dog by registered ownership in Australia, Canada, New Zealand, the United Kingdom, and the United States (since 1991).", "Fact: After Max, the names Charlie, Buddy and Jack are the next most popular names for male dogs.", "Fact: The name Bella is the most popular, with Lucy, Bailey and Daisy as the following top choices for female dogs.", "Fact: The blue-black/purple tongue gene appears to be dominant, as most mixed breed dogs that come from a Chow Chow retain that tongue color.", "Fact: Agrizoophobia is a fear of wild animals, Barophobia is the irrational fear of gravity, and Ranidaphobia is the fear of frogs and toads."]
	$("#funFact").text(factList[i]);
}
