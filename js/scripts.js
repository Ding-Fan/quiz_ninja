var quiz = [
  ["What is Superman's real name?", "Clarke Kent"],
  ["What is Wonderwoman's real name?", 'Dianna Prince'],
  ["What is Batman's real name?", 'Bruce Wayne']
]

var score = 0 // initialize score

play(quiz)

function play (quiz) {
  // main game loop
  var quizNumber = quiz.length
  for (var i = 0; i < quizNumber; i++) {
    var question = quiz[i][0]
    var answer = ask(question)
    check(answer)
  }
  // end of main game loop
  gameOver()

  function ask (question) {
    return window.prompt(question)
  }

  function check (answer) {
    if (answer === quiz[i][1]) {
      window.alert('Correct!')
      score++
    } else {
      window.alert('Wrong!')
    }
  }

  function gameOver () {
    window.alert('Your score is ' + score)
  }
}





