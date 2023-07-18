function checkAnswers() {
  var answers = {
    q1: {
      correctAnswers: ['a','e','i','o','u'],
      minOptions: 5
    },
    // Add more questions here...
  };

  var resultContainer = document.getElementById('result');
  resultContainer.textContent = '';

  var allCorrect = true;

  for (var question in answers) {
    var correctAnswers = answers[question].correctAnswers;
    var minOptions = answers[question].minOptions;

    var selectedAnswers = [];
    var checkboxes = document.getElementsByName(question);

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedAnswers.push(checkboxes[i].value);
      }
    }

    if (selectedAnswers.length < minOptions) {
      allCorrect = false;
      resultContainer.innerHTML += '<p>Please select at least ' + minOptions + ' option(s) for question ' + question.substr(1) + '.</p>';
    } else {
      for (var i = 0; i < selectedAnswers.length; i++) {
        if (!correctAnswers.includes(selectedAnswers[i])) {
          allCorrect = false;
          resultContainer.innerHTML += '<p>Incorrect answer for question ' + question.substr(1) + '.<a href="#"><button>get explanation</button></a></p> ';
          break;
        }
      }
    }
  }

  if (allCorrect) {
    resultContainer.innerHTML += '<p>All answers are correct!</p>';
  }
}
