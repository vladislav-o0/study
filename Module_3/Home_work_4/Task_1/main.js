let app = Vue.createApp({
    data() {
        return {
            list: [{
                name: 'Стрижка',
                price: 800
            },{
                name: 'Окрашивание',
                price: 1000
            },{
                name: 'Укладка',
                price: 300
            },{
                name: 'Создание причесок',
                price: 1500
            },{
                name: 'Детская стрижка',
                price: 500
            },{
                name: 'Массаж головы',
                price: 300
            },{
                name: 'Лечение волос',
                price: 1000
            },{
                name: 'Ламинирование',
                price: 600
            }],
            fullPrice: 0
        }    
    },
    methods: {
        setFullPrice(price) {
            if (event.target.checked) this.fullPrice+=price;
            else this.fullPrice-=price;
        }
    }
});

 app.mount('#app');