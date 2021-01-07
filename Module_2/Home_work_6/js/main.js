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
    
    let a = {
        name: 'static',
        count: 0
        }

    foo(a, 'count', 10);


    function foo(obj, prop, num) {
        let arr = [];
        
        for (let i = 0; arr.length < num; i++) {
            let o = {};

            for (let p in obj) {
                o[p] = obj[p];
            }
            o[prop] = i;
            arr.push(o);
        }

        console.log(arr);
    }


    answerArea.innerHTML = `Откройте консоль`;
    
});

let arrRandNumbers = [];
let strRandNumbers = '';

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-two');
    let answerArea = taskContainer.querySelector('.resultArea');
    
    function randNum() {
        let num;
        let coincidence = 0;

        if (arrRandNumbers.length > 99) {
            console.log('End');
            return '';
        }

        while (coincidence != -1) {
            num = Math.floor(Math.random() * 100 + 1);
            coincidence = arrRandNumbers.indexOf(num);
        }

        arrRandNumbers.push(num);
        console.log(arrRandNumbers);

        return num;
        
    }
    
    strRandNumbers += `${randNum()} `;

    answerArea.innerHTML =  strRandNumbers;

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
 institution: inputs[4].value,
   getDescr() {
        return `${this.name} ${this.surname}, возраст ${this.age}. Интересы: ${this.interests}. Место обучения: ${this.institution}.`;
    }
     };

    for (let prop in obj) {
        if (obj[prop] === '') {
            answerArea.innerHTML = 'Заполните все поля!';
            return;
        }
        if (Array.isArray(obj[prop])) {
            if (obj[prop][0] === '') {
                answerArea.innerHTML = 'Заполните все поля!';
                return;
            }
        }
    }
     answerArea.innerHTML = obj.getDescr();
    
});

tasksCountBtn[3].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-four');
    let answerArea = taskContainer.querySelector('.resultArea');
    let input = taskContainer.querySelector('input');
    
    let num = +input.value;

    function getFactorial(n, c = n) {

        if (n == 1) {  
            return c;
        }
    
        c = c * (--n)
            
        return getFactorial(n, c);
        
    }

    answerArea.innerHTML = `Факториал числа: ${getFactorial(num)}`;   
});

tasksCountBtn[4].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-five');
    let answerArea = taskContainer.querySelector('.resultArea');
    
    let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4}];

    function sortFoo(a, b) {
        return a.price - b.price;
    }

    console.log(arr.sort(sortFoo));

    answerArea.innerHTML = `Откройте консоль`;   
});





