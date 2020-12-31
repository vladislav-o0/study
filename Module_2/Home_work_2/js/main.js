let tasksCountBtn = document.querySelectorAll('.count');
let resetButtons = document.querySelectorAll('button[type="reset"]');

for (let i = 0; i < resetButtons.length; i++) {

    resetButtons[i].addEventListener('click', function(e) {
        e.preventDefault();

        let parent = this.parentNode;
        let inputs = parent.querySelectorAll('input');
        let resultArea = parent.querySelector('p');

        if (!inputs.length) {
            console.clear();
            return;
        }

        resultArea.innerHTML = '';

        for (let j = 0; j < inputs.length; j++) {
            inputs[j].value = 0;
        }
    });
}

tasksCountBtn[0].addEventListener('click', function(e) {
    e.preventDefault();
    
    let input = document.querySelector('.task-one input');
    let answerArea = document.querySelector('.task-one p');
    let months = ['Январь',
                  'Февраль',
                  'Март',
                  'Апрель',
                  'Май',
                  'Июнь',
                  'Июль',
                  'Август',
                  'Сентябрь',
                  'Октябрь',
                  'Ноябрь',
                  'Декабрь'];

    let monthNum = input.value;
    let month, season;

    if (monthNum < 1 || monthNum > 12) {
        answerArea.innerHTML = "Введен некорректный номер";
        return;
    }
    
    switch (+monthNum) {
        case 12:
        case 1:
        case 2:
            season = 'Зима';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Весна';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Лето';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Осень';
            break;
    }

    monthNum--;

    month = months[monthNum];
  
    answerArea.innerHTML = `${season} : ${month}`;
    
});

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let input = document.querySelector('.task-two input');
    let select = document.querySelector('.task-two select');
    let answerArea = document.querySelector('.task-two p');
    let answer;
    let length = input.value;
    let num = select.value;
    
    if (num == 1) answer = num/10;
    else if (num == 2) answer = num*1000;
    else if (num == 3) answer = num;
    else if (num == 4) answer = num/1000;
    else if (num == 5) answer = num/100;

    answerArea.innerHTML = `Результат в метрах: ${answer}`; 
});

tasksCountBtn[2].addEventListener('click', function(e) {
    e.preventDefault();
    
    let input = document.querySelector('.task-three input');
    let answerArea = document.querySelector('.task-three p');
    let answer;
    let num = input.value;

    if (num > 999 || num < -999) answer = 'Значение некорректное';
    else {
        if (num > 0) answer = 'Положительное ';
        if (num < 0) {
            answer = 'Отрицательное ';
            num = -num;
        }
    }

    if (num == 0) answer = 'Нулевое число';

    if (num > 0 && num < 10) answer += 'однозначное число';
    if (num > 9 && num < 100) answer += 'двузначное число';
    if (num > 99 && num < 1000) answer += 'трехзначное число';

    answerArea.innerHTML = answer; 
});

tasksCountBtn[3].addEventListener('click', function(e) {
    e.preventDefault();
    
    let num = 1;

    while (num <= 100) {

        let container = '';

        if (!(num % 3)) {
           container = 'Three';
        }
        if (!(num % 5)) {
            container += 'Five';
        }
        
        if (container) {
            console.log(container);
            num++;
            continue;
        }
        console.log(num);
        num++;

    }
    
});




