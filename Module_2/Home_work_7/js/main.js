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

{
    let taskContainer = document.querySelector('.task-one');
    let answerArea = taskContainer.querySelector('.resultArea');
   
    function getTime() {
        let time = new Date();
        let hourse = time.getHours().toString().padStart(2, '0'),
           minutes = time.getMinutes().toString().padStart(2, '0'),
           seconds = time.getSeconds().toString().padStart(2, '0');

        return `<i style="color: red">${hourse}</i>:<i style="color: green">${minutes}</i>:<i style="color: blue">${seconds}</i>`
    }
  
    answerArea.innerHTML = `${getTime()}`;

    setInterval(function() {
        answerArea.innerHTML = `${getTime()}`;
    }, 1000);
}

tasksCountBtn[0].addEventListener('click', function(e) {
    e.preventDefault();
    
    let productsContainer = document.querySelector('.products');
    
    let productArr = [{
        img: './img/1.jpg',
        name: 'Хлеб',
        art: 'p1',
        descr: 'Продукт, который получается путем выпекания, обработки паром или жарки теста, оно состоит (минимум) из воды и муки.'
    }, {
        img: './img/2.jpg',
        name: 'Масло',
        art: 'b1',
        descr: 'Молочный продукт, получаемый сбиванием или сепарированием сливок из коровьего молока.'
    }, {
        img: './img/3.jpg',
        name: 'Молоко',
        art: 'b2',
        descr: 'Многокомпонентная жидкость, секретируемая молочными железами самок млекопитающих. Поскольку оно предназначено для вскармливания потомства, в его составе присутствует огромное разнообразие полезных веществ.'
    }];

    for (let i = 0; i < productArr.length; i++) {
        productRender(productsContainer, productArr[i]);
        if (i == productArr.length - 1) {
            this.style.display = 'none';
        }
    }

    function productRender(container, prod) {
        let div = document.createElement('div');

        div.style.cssText = 'border-top: 1px solid';
        let img = document.createElement('img');
        
        img.src = prod.img;
        img.style.width = '100%';
        div.append(img);

        let header = document.createElement('h3');

        header.innerText = prod.name;
        div.append(header);

        let descr = document.createElement('p');

        descr.innerText = prod.descr;
        div.append(descr);

        let article = document.createElement('p');

        article.innerText = 'Артикул: ' + prod.art;
        div.append(article);

        container.append(div);
    }

});

{
    let lights = document.querySelectorAll('.lights div');


    setTimeout(function() {
        lights[0].classList.toggle('bgRed');
        setInterval(function() {
            lights[0].classList.toggle('bgRed');
        }, 2000);
    }, 0);


    setTimeout(function() {
        lights[1].classList.toggle('bgYellow');    
        setTimeout(function() {
            lights[1].classList.toggle('bgYellow');
        }, 500);

    }, 1500);

    setInterval(function() {

        setTimeout(function() {
            lights[1].classList.toggle('bgYellow');

            setTimeout(function() {
                lights[1].classList.toggle('bgYellow');
            }, 500);

        }, 1500);

    }, 2000);

    setTimeout(function() {
        lights[2].classList.toggle('bgGreen');

        setInterval(function() {
            lights[2].classList.toggle('bgGreen');
        }, 2000);
    }, 2000);
}

{

    let resultArea = document.querySelector('.task-four .resultArea');

    function getTimeUntilNewYear() {
        let msInDay  = 1000*60*60*24;
        let msInHour = 1000*60*60;
        let msInMin  = 1000*60;

        let now = Date.now();
        let newYear = new Date(new Date().getFullYear() + 1, 0).getTime();

        let msBefore = newYear - now;

        let day = Math.floor(msBefore / msInDay);
        msBefore = msBefore - (msInDay * day);

        let hours = Math.floor(msBefore / msInHour);
        msBefore = msBefore - (msInHour * hours);

        let min = Math.floor(msBefore / msInMin);

        day += '';
        hours += '';
        min += '';

        if (day[day.length - 2] == '1') {
            day += ' дней';
        } else {
            switch(day[day.length - 1]) {
                case '1':
                    day += ' день';
                    break;
                case '2':
                case '3':
                case '4':
                    day += ' дня';
                    break;
                default:
                    day += ' дней';
            }
        }

        if (hours[hours.length - 2] == '1') {
            hours += ' часов';
        } else {
            switch(hours[hours.length - 1]) {
                case '1':
                    hours += ' час';
                    break;
                case '2':
                case '3':
                case '4':
                    hours += ' часа';
                    break;
                default:
                    hours += ' часов';
            }
        }

        if (min[min.length - 2] == '1') {
            min += ' минут';
        } else {
            switch(min[min.length - 1]) {
                case '1':
                    min += ' минута';
                    break;
                case '2':
                case '3':
                case '4':
                    min += ' минуты';
                    break;
                default:
                    min += ' минут';
            }
        }
        
        return `До Нового Года: ${day + ' ' + hours + ' ' + min}`;
    
    }

    setTimeout (function() {
        resultArea.innerText = getTimeUntilNewYear();
        setInterval(function() {
            resultArea.innerText = getTimeUntilNewYear();
        }, 60000);
    }, 0);
}