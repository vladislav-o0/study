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
    
    let answerArea = document.querySelector('.resultArea');

    let arrayA = [12, 4, 3, 10, 1, 20],
        arrayB = [-3, -7, -100, -33],
        arrayC;
    
    arrayC = arrayA.concat(arrayB);
  
    answerArea.innerHTML = `Массив С : [${arrayC}]`;
    
});

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-two');
    let answerArea = taskContainer.querySelector('.resultArea'); 

    let inputs = taskContainer.querySelectorAll('input');
    let arr = [];
    
    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].value;

        if (value !== '' && value !== '1' && value !== '0') {
            answerArea.innerHTML = `Значение ${value} недопустимо!`;
            return;
        }
        if (!value) value = null; 
        if (value == 1) value = 'X'; 

        arr.push(value);
    }
  
    answerArea.innerHTML = `<table border="1">
    <tr><td>${arr[0]}</td><td>${arr[1]}</td><td>${arr[2]}</td></tr>
    <tr><td>${arr[3]}</td><td>${arr[4]}</td><td>${arr[5]}</td></tr>
    <tr><td>${arr[6]}</td><td>${arr[7]}</td><td>${arr[8]}</td></tr>
</table>`;
    
});

tasksCountBtn[2].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-three');
    let answerArea = taskContainer.querySelector('.resultArea'); 

    let arr = [12,4,3,10,1,20];
    let max = arr[0], min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    let index;

    index = arr.indexOf(max);
    arr.splice(index, 1);

    index = arr.indexOf(min);
    arr.splice(index, 1);
   
  
    answerArea.innerHTML = `Результат: [${arr}]<br>
                            Наибольшим значением было: ${max}<br>
                            Наименьшим значением было: ${min}`;
    
});





