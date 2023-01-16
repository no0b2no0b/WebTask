const quizDB =[
    {
        question: "Q1: HTML is a ?",
        a: "Programming Language ",
        b: "Database software ",
        c: "Markup Language with Tags ",
        d: "Operating system ",
        ans: "ans3"
    },
    {
        question: "Q2: The main containt of the page are kept inside? ",
        a: "Inside Head section of the page ",
        b: "After closing html tag of the page ",
        c: "Inside body section of the page ",
        d: "Before the Head section of the page ",
        ans: "ans3 "
    },
    {
        question: "Q3: HTML tags are executed by? ",
        a: "Remote Web Server ",
        b: "Operating system of client computer ",
        c: "By Proxy servers present in the network ",
        d: " By web browser of client computer",
        ans: "ans4 "
    },
    {
        question: "Q4: How many pairs of BODY tags are kept inside a html page? ",
        a: "one only ",
        b: " twn only",
        c: "ten numbers ",
        d: "As many as required. ",
        ans: "ans1 "
    },
    {
        question: "Q5: Title tag is kept inside? ",
        a: "body tag ",
        b: " head tag",
        c: "before starting of the main content ",
        d: "before starting of html tag ",
        ans: "ans2 "
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }        
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };


    questionCount++;

    deselectAll();


    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHtml = `
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        
        showScore.classList.remove('scoreArea');
        
        
    };

});