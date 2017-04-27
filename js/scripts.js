var quiz = {
  "name": "Super Hero Name Quiz",
  "description": "How many super heroes can you name?",
  "question": "What is the real name of ",
  "questions": [
    {
      "question": "Superman", "answer": "Clarke Kent"
    },
    {
      "question": "Batman", "answer": "Bruce Wayne"
    },
    {
      "question": "Wonder Woman", "answer": "Dianna Prince"
    }
  ]
}



var score = 0 // initialize score

play(quiz)

function play (quiz) {
  // main game loop
  var quizNumber = quiz.questions.length
  for (var i = 0; i < quizNumber; i++) {
    console.log(i)
    var question = quiz.questions[i].question
    var answer = ask(question)
    check(answer)
  }
  // end of main game loop
  gameOver()

  function ask (question) {
    return window.prompt(quiz.question + question)
  }

  function check (answer) {
    if (answer === quiz.questions[i].answer) {
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





