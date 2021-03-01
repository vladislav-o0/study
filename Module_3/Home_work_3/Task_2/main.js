let app = Vue.createApp({
    data() {
        return {
            posts: [{
                name: 'Статья 1',
                text: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex maximus, tempor lectus a, convallis quam. Aenean blandit ipsum eu magna tempor, in commodo diam sagittis. Pellentesque lectus risus, egestas vel massa quis, aliquam vehicula ligula. In hac habitasse platea dictumst. Nullam tincidunt justo non nisl consequat, eget tristique enim efficitur. Aliquam quis euismod lectus, sit amet malesuada eros. Fusce vitae laoreet est, id varius erat. Quisque vestibulum blandit nisi, eu suscipit sem interdum vehicula. Donec dictum orci nec urna pulvinar maximus. Nunc iaculis mattis nunc, ornare aliquam dolor rhoncus a. Integer metus erat, sollicitudin ac lacus vitae, aliquet luctus velit. Praesent non varius ligula, sit amet molestie ante. Quisque sem nisi, semper in tincidunt vel, venenatis in lorem. Phasellus convallis pellentesque arcu, eget consequat quam consectetur eu.',
                id: 1
            },{
                name: 'Статья 2',
                text: 'Nam molestie mi tellus, vel scelerisque est fringilla sit amet. Mauris lacinia ex sit amet justo rhoncus, vitae euismod turpis venenatis. Aliquam iaculis in metus a placerat. Mauris et aliquet ex, vitae luctus lacus. Mauris vehicula rhoncus tempus. Integer feugiat sagittis sollicitudin. Aliquam a metus lobortis, auctor quam sit amet, porta lectus. Cras hendrerit auctor mi id interdum. Fusce finibus at tellus a rutrum. Fusce sit amet diam massa.',
                id: 2
            },{
                name: 'Статья 3',
                text: 'Proin lacinia nisl id mi hendrerit gravida. Donec vestibulum mauris ac tortor tincidunt, in dapibus ante commodo. Fusce mattis sem ac mollis tincidunt. Sed hendrerit congue lacus, ac dignissim lorem porta et. In mauris nibh, pharetra sed efficitur ut, convallis sit amet ante. Donec pretium dui vel eros interdum convallis. Phasellus mollis ex nec sem dictum, vel rhoncus erat lobortis. Vestibulum nec mattis augue.',
                id: 3
            }],
            edit: false
        } 
    },
    methods: {
        startEdit(id) {
            let editTextElem = document.querySelectorAll('.editText')[id - 1];
  
            let target = event.target;

            this.edit = id;
            setTimeout(()=>{editTextElem.focus()}, 0);
    
            let span = document.createElement('span');

            span.innerHTML = target.innerHTML;
            target.replaceChildren(span);

            let width = span.offsetWidth;
            let height = span.offsetHeight;

            if (width < 100) width = 100;

            target.innerHTML = span.innerHTML;
            editTextElem.style.width = `${width + 10}px`;
            editTextElem.style.height = `${height + 2}px`;
        },
        endEdit(id) {
            let target = event.target;

            target.style.backgroundColor = "#aaffaa";

            setTimeout(()=> {
                target.style.backgroundColor = "#b3b6f552";

                if (this.edit == id) {
                    this.edit = '';
                }
            }, 250);
        }

    }
});

app.mount('#app');