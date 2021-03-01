let app = Vue.createApp({
    data() {
        return {
            posts: [{
                title: 'Статья первая',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 1
            },{
                title: 'Статья вторая',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 2
            },{
                title: 'Статья третья',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 3
            },{
                title: 'Статья четвертая',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 4
            },{
                title: 'Статья пятая',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 5
            },{
                title: 'Статья шестая',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 6
            },{
                title: 'Статья седьмая',
                text: 'Много много много много много много много много много много много много много много много много много много текста...',
                id: 7
            }],
            inputValue: ''
        }
    },
    methods: {
        filter() {
            let lowerCaseValue = this.inputValue.toLowerCase();
            return this.posts.filter(post => {
                return post.title.search(lowerCaseValue) != -1;
            });
        }
    }
    
});

 app.mount('#app');