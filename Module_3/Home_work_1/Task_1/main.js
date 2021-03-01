let app = Vue.createApp({
    data() {
        return {
            title: 'Магазин электроники',
            copyright: `©Copyright ${new Date().getFullYear()}`,
            products: {
                laptop: {
                    name: 'Ноутбук ASUS VivoBook 14 K413JA-EB312T',
                    price: '47 990',
                    img: './img/laptop.jpg',
                    descr: 'ASUS VivoBook 14 K413JA – это яркий ноутбук, который добавит динамизма и стиля в твою повседневную жизнь. Современная конфигурация с процессором Intel Core i7 обеспечит всю необходимую для дел вычислительную мощность, а инновационный тачпад NumberPad 2.0 еще больше облегчит работу с числами.'
                }
            }
        }
    }
});

app.mount('#app');