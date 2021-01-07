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
    let inputs = taskContainer.querySelectorAll('input');

    let array_one = inputs[0].value.split(',');
    let array_two = inputs[1].value.split(',');

    function arrayComp(arrOne, arrTwo) {

        if (arrOne.length != arrTwo.length) return false;

        for (let i = 0; i < arrOne.length; i++) {
            if (arrOne[i] !== arrTwo[i]) return false;
        }
        return true;
    }
  
    answerArea.innerHTML = `Результат: ${arrayComp(array_one, array_two)?'Они равны':'Они разные'}`;
    
});

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-two');
    let answerArea = taskContainer.querySelector('.resultArea');
    let inputs = taskContainer.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++) {
        if (Number.isNaN(+inputs[i].value)) answerArea.innerHTML = 'Некорректное значение, используйте только числа';
    }
    
    let rangeStart = +inputs[0].value;
    let rangeEnd = +inputs[1].value;
    let rangeStep = +inputs[2].value || undefined;



    function range(start, end, step = 1) {
        let arr = [];

        for (;start <= end; start += step) {
            arr.push(start);
            console.log(start);
        }
        return arr;
    }

    answerArea.innerHTML = `Результат: [${range(rangeStart, rangeEnd, rangeStep)}]`;
    
});

tasksCountBtn[2].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-three');
    let answerArea = taskContainer.querySelector('.resultArea');
    let inputs = taskContainer.querySelectorAll('input');
    
    let obj = {
        name: inputs[0].value,
     surname: inputs[1].value,
         age: inputs[2].value,
   interests: inputs[3].value.split(','),
 institution: inputs[4].value
    };

    function objectShow(obj) {
       answerArea.innerHTML = `<table border="1">
                                    <caption>Студент</caption>
                                    <tr><td>Имя</td><td>${obj.name}</td></tr>
                                    <tr><td>Фамилия</td><td>${obj.surname}</td></tr>
                                    <tr><td>Возраст</td><td>${obj.age}</td></tr>
                                    <tr><td>Интересы</td><td>${obj.interests}</td></tr>
                                    <tr><td>Место учебы</td><td>${obj.institution}</td></tr>
                                </table>`;
    }
    
    objectShow(obj);
});





