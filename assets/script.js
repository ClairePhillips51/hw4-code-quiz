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
    },
];

let timer = 90;

function setTimer(){
    timer--;
    $("#timer").text(timer+"s");
}

function displayQuestion(item, index) {
    $("#question-holder").css("display", "block");
    //console.log(item.question);
    $("#questions").text(item.question);
    $("#btn0").text(item.choiceA);
    $("#btn1").text(item.choiceB);
    $("#btn2").text(item.choiceC);
    $("#btn3").text(item.choiceD);

}

function beginQuiz() {
    console.log("start quiz");
    setInterval(setTimer,100);
    questions.forEach(displayQuestion);
}

//Set click event listener for start quiz button
$("#start-button").on("click", beginQuiz);
