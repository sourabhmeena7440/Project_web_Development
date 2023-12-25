const questions = [{
    'que' : 'which of the following is a markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JavaScript',
    'd' : 'PHP',
    'correct' : 'a'
},
    {
    'que' : 'what year was JavaScript launched?',
    'a' : "1996",
    'b' : "1995",
    'c' : "1994",
    'd' : "none of the above",
    'correct' : "b"
    },
    {
        'que' : 'what does Css stands for',
        'a' : "Hypertext Markup Language",
        'b' : "Cascadind style Sheet",
        'c' : "Json Object Natation",
        'd' : "Helicopters Termibals motorboats Lamborginis",
        'correct' : "c"
    },
]

// pahel hamene queson se answer laye
let index = 0;
let total = questions.length;
let right = 0 ,wrong = 0;
// 1. fir hamne quesion ka increement liya 
const quesBox = document.getElementById("quesBox")
// queson ke change hone ke sath answer bhi show hoga
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    // reset ka use
    if(index === total){
        return endQuiz()
    }
    reset();

    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    
}
// 3. submitQuiz ka use hame answer check karne ke liye use karte hai
const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    // next question par jane ke liye ap kya karoge
    index++;
    loadQuestion();
    // function yha se return kar rha hai
    return;
}
// 2.
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                // console.log(input.value)
                answer = input.value;
            }
        }
    )
    return answer;
}
//  4 reset karne ka kam karega
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
// 5
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> thank you for playing </h3>
        <h2> ${right} /${total} are correct <h2/>
    </div>
    `
}
//inital coll
loadQuestion();