// The Quiz questions and answers
let questions = [
    {
        question: "At the end of which HTML element does the <script> tag go?",
         choiceA: "head", 
         choiceB: "body",
         choiceC: "html", 
         choiceD: "It goes in the css",
         correct: "B"
    },
    {
        question: "What is the basic structure for a for loop?",
         choiceA: "for(i=0; i<array.length; i++)",
         choiceB: "for(i=== array)",
         choiceC: "for (i==1 i++)",
         choiceD: "for === false",
         correct: "A"
    },
    {
        question: "Which of the following is that AND opperator?",
         choiceA: "||",
         choiceB: "~",
         choiceC: "&&",
         choiceD: "and",
         correct: "C"
    },
    {
        question: "Which of the following is NOT a primitve type?",
         choiceA: "string",
         choiceB: "boolean",
         choiceC: "number",
         choiceD: "array",
         correct: "D"
    },
    {
        question: "Keydown, Click, and Mouseover are types of what?",
         choiceA: "Event-Listener",
         choiceB: "Function",
         choiceC: "Method",
         choiceD: "Object",
         correct: "A"
    },
    {
        question: "Boleeans have two values what are they?",
         choiceA: "yes and no",
         choiceB: "true and false",
         choiceC: "a and b",
         choiceD: "They don't have values",
         correct: "B"
    },
    {
        question: "How would you access the first element in an array?",
         choiceA: "x(0)",
         choiceB: "x[1]",
         choiceC: "x[first]",
         choiceD: "x[0]",
         correct: "D"
    }
];

// setting variables for the timer, score, and the progress of the questions
let currentQuestionIndex = 0;
let timer = 90;
let score = 0;
let interval = 0;

// When the highscore button is clicked the highscores will show up
function showHighscores() {
    clearInterval(interval);
    $("#timer").text("Timer");
    $("#start-button").hide();
    $("#question-holder").hide();
    $("#highscore-container").show();

    $("#highscore-list p").remove();
    $("#highscore-list br").remove();

    highscores = JSON.parse(localStorage.getItem("highscores"));
    console.log(highscores);
    for (index in highscores){
        newElement = $('<p>'+highscores[index][0]+': '+highscores[index][1]+'</p><br/>');
        $("#highscore-list").append(newElement);
    }

}

// If you click the go back button while in highscores it will take you back to the start screen
function goBack() {
    $("#highscore-container").hide();
    $("#start-button").show();
}

// This stores the intials and associated highscore
function submitInitials() {
    initials = $("#initials").val();
    console.log("submitting initials: " + initials);

    highscores = JSON.parse(localStorage.getItem("highscores"));
    if(highscores === null)
        highscores = [[initials, score]];
    else
        highscores.push([initials, score]);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    $("#initials").val("");
    $("#end-screen").hide();
    $("#start-button").show();
}

// At the end of the Quiz you are shown the set intials form, the timer stops, and your score is shown
function endQuiz(){
    console.log("end quiz");
    clearInterval(interval);
    $("#timer").text("Done");
    $("#question-holder").hide();
    $("#end-screen").show();

    $("#score").text("Score: " + score);
}

// This function decrements the timer and ends the quiz if the timer is less than 1
function setTimer(){
    timer--;
    $("#timer").text(timer+"s");
    if(timer < 1)
        endQuiz();
}

// This increments the question index, then either diplays the next question or ends the quiz
function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
        displayQuestion();
    else
        endQuiz();
}

//If the right answer is picked increase the score by 1, tell them the right answer was picked, and display next question  
function correctAnswer() {
    console.log("Correct Answer");
    score++;
    $("#correct").show().text("Correct!").fadeOut(1000);
    nextQuestion();
}

//If the wrong answer is picked reduce the timer by 5 seconds, tell them the wrong answer was picked, and display next question 
function wrongAnswer() {
    console.log("Wrong Answer");
    timer -= 5;
    $("#correct").show().text("Wrong you stupid idiot!").fadeOut(1000);
    nextQuestion();
}

// This will display the next question and set event listeners
function displayQuestion() {
    item = questions[currentQuestionIndex];
    $("#question-holder").css("display", "block");
    //console.log(item.question);
    $("#questions").text(item.question);
    $("#btnA").text(item.choiceA);
    $("#btnB").text(item.choiceB);
    $("#btnC").text(item.choiceC);
    $("#btnD").text(item.choiceD);

    buttons = $(".buttons button");
    buttons.each(function () {
        $(this).off("click");
        if( this.id.includes(item.correct) ){
            $(this).on("click", correctAnswer);
        }else{
            $(this).on("click", wrongAnswer);
        }
    });
}

// start quiz by resetting question index, timer, and score, hiding the start button, starting the timer, and bringing up the first question
function beginQuiz() {
    currentQuestionIndex = 0;
    timer = 90;
    score = 0;
    $("#start-button").hide();
    console.log("start quiz");
    interval = setInterval(setTimer,1000);
    displayQuestion();
}

//Set click event listeners
$("#start-button").on("click", beginQuiz);
$("#submit").on("click", submitInitials);
$("#high-score").on("click", showHighscores);
$("#goback").on("click", goBack);
