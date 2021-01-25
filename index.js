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
        question: 'What is the method of associating a complete caption with an illustration?',
        a: '<figure> <img src = "image.jpg"> <figcaption> The caption ... </figcaption> </figure>',
        b: '<figure src = "image.jpg" legend = "# cap1"> </figure> <figcaption id = "cap1"> The legend ... </figcaption>',
        c: '<figure> <legend> The legend ... </legend> <img src = "image.jpg"> </figure>',
        correct: 'a'
    }
]

let currentQuiz = 0;

const questionEl = document.getElementById ('question');
const aText = document.getElementById ('aText');
const bText = document.getElementById ('bText');
const cText = document.getElementById ('cText');
const submitBtn = document.getElementById ('submit');

loadQuiz();

function loadQuiz () {

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
}

submitBtn.addEventListener('click', () => {

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    }

    
})