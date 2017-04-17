// welcome the user
alert("Welcome to Quiz Ninja!");

var question = "What is Superman's real name?"
var answer = prompt(question)

window.alert('You answered ' + answer)

var quiz = [
  ["What is Superman's real name?", "Clarke Kent"],
  ["What is Wonderwoman's real name?", 'Dianna Prince'],
  ["What is Batman's real name?", 'Bruce Wayne']
]

var score = 0 // initialize score
var quizNumber = quiz.length
for (var i = 0; i < quizNumber; i++) {
  var answer = window.prompt(quiz[i][0])
  if (answer === quiz[i][1]) {
    window.alert('Correct!')
    score++
  } else {
    window.alert('Wrong!')
  }
}

window.alert('Your score is ' + score)