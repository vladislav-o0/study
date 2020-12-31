let tasksCountBtn = document.querySelectorAll('.count');
let resetButtons = document.querySelectorAll('button[type="reset"]');

for (let i = 0; i < resetButtons.length; i++) {

    resetButtons[i].addEventListener('click', function(e) {
        e.preventDefault();

        let parent = this.parentNode;
        let inputs = parent.querySelectorAll('input');
        let resultArea = parent.querySelector('.resultArea');

        if (!inputs.length) {
            console.clear();
            return;
        }

        resultArea.innerHTML = '';

        for (let j = 0; j < inputs.length; j++) {
            inputs[j].value = '';
        }
    });
}

tasksCountBtn[0].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-one');
    let answerArea = taskContainer.querySelector('.resultArea');
    let input = taskContainer.querySelector('input');
    
    if (Number.isNaN(-input.value)) {
        answerArea.innerHTML = 'Некорректное значение';
        return;
    } 
    if (input.value % 1) {
        answerArea.innerHTML = 'Введите целое число';
        return;
    }

    let sum = 0;

    for (let i = 0; i < input.value.length; i++) {
        sum += +input.value[i];
    }
     
  
    answerArea.innerHTML = `Результат: ${sum}`;
    
});

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-two');
    let answerArea = taskContainer.querySelector('.resultArea');
    let inputs = taskContainer.querySelectorAll('input');
    
    let str = inputs[0].value;
    let symbol = inputs[1].value;

    if (!str || !symbol) {
        answerArea.innerHTML = 'Заполните все поля.';
        return;
    }

    if (!str.includes(symbol)) {
        answerArea.innerHTML = `Нет такого символа в строке.`;
        return;
    }

    let newStr = str.replaceAll(symbol, symbol.repeat(2));
  
    answerArea.innerHTML = newStr;
    
});

tasksCountBtn[2].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-three');
    let answerArea = taskContainer.querySelector('.resultArea');
    let input = taskContainer.querySelector('input');
    
    let pas = input.value;

    if (pas.length < 9) {
        answerArea.innerHTML = 'Пароль не может быть менее 9 символов.';
        return;
    }
    if (!pas.match(/(?=.*[A-Z])(?=.*[a-z])/)) {
        answerArea.innerHTML = 'Пароль должен содержать латинские символы в верхнем и нижнем регистре.';
        return;
    }
    if (!pas.match(/(?=(.*\d){3})/)) {
        answerArea.innerHTML = 'Пароль должен содержать более 2 цифр.';
        return;
    }
    if (!pas.match(/(?=.*[!@_#&^$%])/)) {
        answerArea.innerHTML = 'Пароль должен содержать служебные символы.';
        return;
    }

    answerArea.innerHTML = 'Пароль подходит.';
    
});





