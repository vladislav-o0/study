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
    let boxes = taskContainer.querySelector('.boxes');
    
    boxes.onclick = function(e) {
        let target = e.target;

        target.classList.toggle('box-repaint');
    };
     
}

tasksCountBtn[0].addEventListener('click', function(e) {
    e.preventDefault();
    
    this.innerText++;
    
});

tasksCountBtn[1].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-three');
    let comments = taskContainer.querySelector('.comments');
    let textarea = taskContainer.querySelector('.task-textarea');

    let commentText = textarea.value;
    
    if (!commentText.search(/^ *$/)) {
        textarea.style.backgroundColor = '#ff000026';
        setTimeout(() => textarea.style.backgroundColor = '', 1000);
        return;
    }

    addComment(comments, 'Author', 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', new Date(), textarea.value);

    function addComment(container, name, avatar, date, text) {
        let comment = document.createElement('div'),
                img = document.createElement('img'),
             p_name = document.createElement('p'),
             p_date = document.createElement('p'),
             p_text = document.createElement('p');

        img.src = avatar;
        p_name.innerText = name;
        p_date.innerText = date.getDate() + ':' + String(date.getMonth() + 1).padStart(2, '0') + ':' + date.getFullYear();
        p_text.innerText = text;

        comment.classList.add('comment');

        comment.append(img);
        comment.append(p_name);
        comment.append(p_date);
        comment.append(p_text);

        container.append(comment);
    }
    
});

tasksCountBtn[2].addEventListener('click', function(e) {
    e.preventDefault();
    
    let taskContainer = document.querySelector('.task-four');
    let resultArea = taskContainer.querySelector('.resultArea');


    let booksArr = [{
                    author: 'Фёдор Миха́йлович Достое́вский',
                      name: 'Белые ночи',
               description: 'Главный герой повести — мечтатель, одинокий и робкий человек. Белой ночью мечтатель случайно знакомится с девушкой Настенькой и влюбляется в неё, а она видит в нём родную душу, брата. Настенька рассказывает ему свою историю. ... Главный герой прощает её и всё равно продолжает любить.',
                       art: 'b1'
                    }, {
                    author: 'Лев Николаевич Толстой',
                      name: 'Война и мир',
               description: 'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Эпилог романа доводит повествование до 1820 года.',
                       art: 'b1'
                    }, {
                    author: 'Михаил Афанасьевич Булгаков',
                      name: 'Мастер и Маргарита',
               description: 'Роман «Мастер и Маргарита» - произведение, в котором находят отражения философские, а значит вечные темы. Любовь и предательство, добро и зло, истина и ложь, поражают своей дуальностью, отражая противоречивость и, вместе с тем, полноту человеческой природы.',
                       art: 'b1'
                    }, {
                    author: 'Антон Павлович Чехов',
                      name: 'Палата №6',
               description: 'В небольшом больничном флигеле, который имеет «тот особый унылый, окаянный вид, какой у нас бывает только у больничных и тюремных построек», находится палата № 6 для душевнобольных. В палате обитают пять человек, среди которых дурачок Моисейка и бывший судебный пристав Иван Дмитрич Громов.',
                       art: 'b1'
                    }];

    booksRender(resultArea, booksArr);

    this.hidden = true;
                    
    function booksRender(container, arr) {
        let table = document.createElement('table');

        table.setAttribute('border', 1);
        table.style.margin = '10px 0';

        table.insertRow().innerHTML = '<th>Автор</th><th>Название</th><th>Артикул</th><th>Описание</th>';

        for (let i = 0; i < arr.length; i++) {
            table.insertRow().innerHTML = `<td>${arr[i].author}</td><td>${arr[i].name}</td><td>${arr[i].art}</td><td>${arr[i].description}</td>`;
        }
        
        container.append(table);
    }
    
     
});





