const questions=[
    {
        question:"What is the maximum length of a Python identifier?",
        answers:[
            {text:"32",correct:false},
            {text:"16",correct:false},
            {text:"128",correct:false},
            {text:"No fixed length is specified",correct:true},
        ] 

},
{
    question:"How is a code block indicated in Python?",
    answers:[
        {text:"Brackets",correct:false},
        {text:"Indentation",correct:true},
        {text:"key",correct:false},
        {text:"None",correct:false},
    ] 

}, {
    question:" Which of the following types of loops are not supported in Python?",
    answers:[
        {text:"for",correct:false},
        {text:"while",correct:false},
        {text:"none",correct:false},
        {text:"do-while",correct:true},
    ] 

}, {
    question:"Which of the following functions converts date to corresponding time in Python?",
    answers:[
        {text:"strptime()",correct:true},
        {text:"strftime()",correct:false},
        {text:"Both A and B",correct:false},
        {text:"None",correct:false},
    ] 

},
{
    question:" Which of the following blocks will always be executed whether an exception is encountered or not in a program?",
    answers:[
        {text:"try",correct:false},
        {text:"except",correct:false},
        {text:"finally",correct:true},
        {text:"None",correct:false},
    ] 

}
];
const questionElement=document.getElementById("question");
const ansbutton=document.getElementById("ansbtn");
const nextbutton=document.getElementById("next-btn");
var currentQuesIndex=0;
var score=0;
function startQuiz(){
    currentQuesIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
var currentQuestion=questions[currentQuesIndex];
var quesNo=currentQuesIndex+1;
questionElement.innerHTML=quesNo+ "." + currentQuestion.question;
currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    ansbutton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }

    button.addEventListener("click",selectAnswer);
});
}
function  resetState(){
    nextbutton.style.display="none";
    while(ansbutton.firstChild){
        ansbutton.removeChild(ansbutton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansbutton.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`Your Scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuesIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});
startQuiz();
