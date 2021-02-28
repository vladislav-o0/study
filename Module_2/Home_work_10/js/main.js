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
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    function Basket() {
        let productArr = [];
        let productNum = 0;
        let productSum = 0;

        this.addProduct = function(product) {
            productArr.push(product);
            productNum = productArr.length;
            productSum += +product.price;
        };
        this.getSumProduct = function() {
            return productSum;
        };
        this.getNumProduct = function() {
            return productNum;
        };
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
    function People(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.toString = function() {
            return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.interests}`;
        };
    }

    function Student(name, age, gender, interests, study) {
        let people = new People(name, age, gender, interests);

        people.study = study;
        people.toString = function() {
            return `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. Интересы: ${this.interests}. Обучается в ${this.study}`;
        };

        return people;
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
{
   
   function User(name) {
       this.name = name;
   }

   User.prototype.toString = function() {
       return this.name;
   };

   User.anonymous = function() {
       let anonymous = new this('Аноним');
       return anonymous;
   };
   
   User.userCreate = function(name, age) {
       if (!name) name = 'Aноним';
    
        let user = new this(name);
        if (age !== undefined) user.age = age;

        return user;
   };
   console.dir(User);
   console.log('Создал два фабричных метода:');
   console.log('Метод User.anonymous создает анонимного пользователя.');
   console.log('Метод User.userCreate создает пользователя из данных.');

}

{
    
    function Course(name) {
        this.name = name;
        this.teacher;
        this.apprentices = [];
    }

    Course.prototype.addTeacher = function(teacher) {
        if (!(teacher instanceof Teacher)) return 'Это не учитель';
        if (this.teacher) return 'На курсе уже есть учитель'; 
        if (teacher.course) return 'Учитель занят на другом курсе'; 
        this.teacher = teacher;
        teacher.course = this;
    };

    Course.prototype.getApprentices = function() {
        return this.apprentices;
    };

    Course.prototype.addApprentice = function(apprentice) {
        if (!(apprentice instanceof Apprentice)) return 'Это не ученик';
        if (!this.teacher) return 'На курсе еще нет учителя'; 

        if (apprentice.course) {
            let prevCourse = apprentice.course,
                prevTeacher = apprentice.teacher;

            let index = prevCourse.apprentices.indexOf(apprentice);

            prevCourse.apprentices.splice(index, 1);
            prevTeacher.apprentices.splice(index, 1);
        }

        this.apprentices.push(apprentice);
        this.teacher.apprentices.push(apprentice);
        apprentice.course = this;
        apprentice.teacher = this.teacher;
    };

    function Teacher(name) {
        this.name = name;
        this.course;
        this.apprentices = [];
    }

    Teacher.prototype.getCourse = function() {
        return this.course;
    };

    Teacher.prototype.hasCourse = function(course) {
        if (!(course instanceof Course)) return;
        if (course == this.course) return true;
        return false;
    };

    Teacher.prototype.addCourse = function(course) {
        if (!(course instanceof Course)) return 'Это не курс';
        if (this.course) return 'У учителя уже есть курс'; 
        if (course.teacher) return 'На курсе уже есть учитель'; 
        this.course = course;
        course.teacher = this;
    };

    Teacher.prototype.getApprentices = function() {
        return this.apprentices;
    };

    function Apprentice(name) {
        this.name = name;
        this.course;
        this.teacher;
    }

}



