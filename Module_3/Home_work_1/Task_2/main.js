let app = Vue.createApp({
    data() {
        return {
            name: 'Василий',
            sername: 'Обломов',
            login: 'vasya01',
            email: 'vasyaoblom@yandex.ru',
            img: './img/foto.jpg'
        }
    }
});

app.mount('#app');