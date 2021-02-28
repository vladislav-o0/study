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
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }


    class Basket {
        constructor() {
            this.productArr = [];
            this.productNum = 0;
            this.productSum = 0;
        }
        addProduct(product) {
            this.productArr.push(product);
            this.productNum = this.productArr.length;
            this.productSum += +product.price;
        }
        getSumProduct() {
            return this.productSum;
        }
        getNumProduct() {
            return this.productNum;
        }
    }

    let basket = new Basket();

    tasksCountBtn[0].addEventListener('click', function(e) {
        e.preventDefault();
        
        let taskContainer = document.querySelector('.task-one');
        let answerArea = taskContainer.querySelector('.resultArea');
        let form = document.querySelector('.task-one form');
    
        let name = form.name.value;
        let price = form.price.value;

        if (!(name && price)) {
            answerArea.innerText = 'Заполните все поля';
            return;
        }
        if (!(+price)) {
            answerArea.innerText = 'Цена должна указываться в цифрах';
            return;
        }
        
        let product = new Product(name, price);

        basket.addProduct(product);
    
        answerArea.innerText = `Товаров в корзине: ${basket.getNumProduct()}
                                Общая стоимость: ${basket.getSumProduct()}`;
    });
    

}
{


    class People {
        constructor(name, age, gender, interests) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.interests = interests;
        }
        toString() {
            return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.interests}`;
        }
    }

    class Student extends People {
        constructor(name, age, gender, interests, study) {
            super(name, age, gender, interests);
            this.study = study;
        }
        toString() {
            return `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.interests}. Обучается в ${this.study}`;
        }
    }

    function addUser(e) {
        e.preventDefault();

        let taskContainer = document.querySelector('.task-two');
        let answerArea = taskContainer.querySelector('.resultArea');
        let form = document.querySelector('.task-two form');
 
        let target = e.target;

        if (target.classList.contains('add-man')) {
            let fieldset = form.man;

            let name = fieldset.elements.name.value,
                 age = fieldset.elements.age.value,
              gender = fieldset.elements.gender_man.value,
           interests = fieldset.elements.interests.value;

            let people = new People(name, age, gender, interests);

            let li = document.createElement('li');
            li.innerText = people.toString();
            answerArea.append(li);
        } else {
            let fieldset = form.student;

            let name = fieldset.elements.name.value,
                 age = fieldset.elements.age.value,
              gender = fieldset.elements.gender_student.value,
           interests = fieldset.elements.interests.value,
               study = fieldset.elements.study.value;

            let student = new Student(name, age, gender, interests, study);

            let li = document.createElement('li');
            li.innerText = student.toString();
            answerArea.append(li);
        }

    }

    tasksCountBtn[1].addEventListener('click', addUser);
    tasksCountBtn[2].addEventListener('click', addUser);

}





