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

let currentQuestionIndex = 0;
let timer = 90;
let score = 0;
let interval = 0;

function endQuiz(){
    console.log("end quiz");
    clearInterval(interval);
    $("#timer").text("Done");
}

function setTimer(){
    timer--;
    $("#timer").text(timer+"s");
    if(timer < 1)
        endQuiz();
}

function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
        displayQuestion();
    else
        endQuiz();
}

function correctAnswer() {
    console.log("Correct Answer");
    score++;
    nextQuestion();
}

function wrongAnswer() {
    console.log("Wrong Answer");
    timer -= 5;
    nextQuestion();
}

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


function beginQuiz() {
    console.log("start quiz");
    interval = setInterval(setTimer,1000);
    displayQuestion();
}

//Set click event listener for start quiz button
$("#start-button").on("click", beginQuiz);
