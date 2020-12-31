let tasksCountBtn = document.querySelectorAll('.count');
let resetButtons = document.querySelectorAll('button[type="reset"]');

for (let i = 0; i < resetButtons.length; i++) {

    resetButtons[i].addEventListener('click', function(e) {
        e.preventDefault();

        let parent = this.parentNode;
        let inputs = parent.querySelectorAll('input');
        let resultArea = parent.querySelector('p');

        resultArea.innerHTML = '';

        for (let j = 0; j < inputs.length; j++) {
            inputs[j].value = 0;
        }
    });
}

tasksCountBtn[0].addEventListener('click', function(e) {
    e.preventDefault();
    
    let inputs = document.querySelectorAll('.task-one input');
    let answerArea = document.querySelector('.task-one p');
    let square, width, height;
    let answer;

    square = inputs[0].value;
    width = inputs[1].value;
    height = inputs[2].value;

    answer = (square * 1000) % (height * width);

    if (isNaN(answer)) return;
    
    answerArea.innerHTML = `Результат: ${answer}`;
    
});

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let inputs = document.querySelectorAll('.task-two input');
    let answerArea = document.querySelector('.task-two p');
    let ovalSquare, ovalCutSquare;
    let answer;

    ovalSquare = inputs[0].value;
    ovalCutSquare = inputs[1].value;

    answer = ovalSquare / 100 - ovalCutSquare / 10000;

    if (isNaN(answer)) return;
    
    answerArea.innerHTML = `Результат: ${answer} м²`;
    
});

tasksCountBtn[2].addEventListener('click', function(e) {
    e.preventDefault();
    
    let inputs = document.querySelectorAll('.task-three input');
    let answerArea = document.querySelector('.task-three p');
    let num1, num2, num3, intermediate;
    let answer;

    num1 = inputs[0].value;
    num2 = inputs[1].value;
    num3 = inputs[2].value;

    (num1 < num2)?intermediate = num1:intermediate = num2;
    (intermediate < num3)?answer = intermediate:answer = num3;
    
    answerArea.innerHTML = `Наименьшее число: ${answer}`;
    
});

tasksCountBtn[3].addEventListener('click', function(e) {
    e.preventDefault();
    
    let inputs = document.querySelectorAll('.task-four input');
    let answerArea = document.querySelector('.task-four p');
    let num1, num2, diff1, diff2;
    let answer;

    num1 = inputs[0].value;
    num2 = inputs[1].value;

    diff1 = 10 - num1;
    diff2 = 10 - num2;

    if (diff1 < 0) diff1 = -diff1;
    if (diff2 < 0) diff2 = -diff2;

    if (diff1 === diff2) {
        answer = 'На одинаковом расстоянии';
    } else {
        (diff1 < diff2)?answer = num1:answer = num2;
    }
    
    answerArea.innerHTML = `${answer}`;
    
});