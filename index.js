const quizData = [
    {
        question: 'What is the doctype for HTML5 document?',
        a: '<!DOCTYPE HTML5>',
        b: '<!DOCTYPEHTML>', 
        c: '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML5.0 Strict//EN">',
        correct: 'b',
    },
    {
        question: 'What is the syntax for declaring the character encoding of the document in UTF-8?',
        a: '<meta encoding = "text / html; charset = utf-8">',
        b: '<meta charset = "text / html; UTF-8">',
        c: '<meta charset = "utf-8">',
        correct: 'c',
    },
    {
        question: 'What new section tag is used to group content tangential to the main content of the document?',
        a: '<details>',
        b: '<sidebar>',
        c: 'aside',
        correct: 'c',
    },
    {
        question: 'The new <time> tag is used to tag a structured date. What would be its syntax for April 1, 2012 at 13:37?',
        a: '<time datetime = "2012-04-01T13: 37: 00Z"> </time>',
        b: '<time value = "2012-04-01 13:37"> </time>',
        c: '<time datetime = "04/01/2012 13H37M00S"> </time>',
        correct: 'a',
    },
    {
        question: 'From which version of Internet Explorer can the HTML5 section elements be used natively (without a hack or additional script)?',
        a: 'Internet Explorer 8',
        b: 'Internet Explorer 9',
        c: 'Internet Explorer 10',
        correct: 'b',
    },
    {
        question: 'What is the method of associating a complete caption with an illustration?',
        a: '<figure> <img src = "image.jpg"> <figcaption> The caption ... </figcaption> </figure>',
        b: '<figure src = "image.jpg" legend = "# cap1"> </figure> <figcaption id = "cap1"> The legend ... </figcaption>',
        c: '<figure> <legend> The legend ... </legend> <img src = "image.jpg"> </figure>',
        correct: 'a'
    },
    {
        question: 'How to represent a 50% progress bar?',
        a: '<progress value="50" max="100">50%</progress>',
        b: '<input type="progress" value="0.5">50%</progress>',
        c: '<input type="progress" value="50" max="100" title="50%" />',
        correct: 'a'
    },
    {
        question: 'How do I associate a choice/suggestion list with a text input field?',
        a: '<input datalist="fruits"><list id="fruits"><option value="Kiwi"><option value="Orange"><option value="Mangue"></list>',
        b: '<input list="fruits"><datalist id="fruits"><option>Kiwi</option><option>Orange</option><option>Mangue</option></datalist>',
        c: '<input list="fruits"><select><datalist id="fruits" values="Kiwi,Orange,Mangue" /></select>',
        correct: 'b'
    },
    {
        question: 'Which attribute allows to display a default image for the <video> element ?',
        a: '<video preview="apercu.jpg">',
        b: '<video><param name="thumbnail" value="apercu.jpg" /></video>',
        c: '<video poster="apercu.jpg">',
        correct: 'c'
    },
    {
        question: 'Which tag should allow the inclusion of text subtitles in videos played with <video> ?',
        a: '<track src="soustitres.vtt">',
        b: '<subtitle source="soustitres.srt">',
        c: '<captions source="soustitres.srt">',
        correct: 'a'
    }
]

let currentQuiz = 0;
let answer = undefined;
let score = 0;

const questionEl = document.getElementById ('question');
const aText = document.getElementById ('aText');
const bText = document.getElementById ('bText');
const cText = document.getElementById ('cText');
const submitBtn = document.getElementById ('submit');
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

loadQuiz();

function loadQuiz () {

    deselectAnswer ();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
}

function getSelected () {

    

    let answer = undefined;

    answersEls.forEach(answerEl => {

        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer;
}

function deselectAnswer () {

    answersEls.forEach(answerEl => {

        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++; 

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button> `;
        }
    }

    
      
})