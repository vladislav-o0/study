
let app = Vue.createApp({
    data() {
        return {
            newItem: {
                name: '',
                img: ''
            },
            items: [{
                name: 'Picture1',
                img: 'https://i.picsum.photos/id/381/200/300.jpg?hmac=DHcGsLBoQPJC-_rudxS4AdZuSE9UoOFP2U2v2veUAok'
            },{
                name: 'Picture2',
                img: 'https://i.picsum.photos/id/231/200/300.jpg?hmac=n_7Og264LcJKH8Pq2zs5UWIgqEwwgx4pTuhRUEOWWpg'
            },{
                name: 'Picture3',
                img: 'https://i.picsum.photos/id/451/200/300.jpg?hmac=I8NLrhKLa1kmeJm2G28UsnA6fiV7Hg5LpGPHpLgde-M'
            },{
                name: 'Picture4',
                img: 'https://i.picsum.photos/id/408/200/300.jpg?hmac=WHLCqIpd4lzmPZlRRMknXp1aOoOr7_qdtEUwozDmIWQ'
            }],
            error: false
        }
    },
    methods: {
        deleteItem(i) {
            this.items.splice(i, 1);
        },
        addItem() {
            if (!(this.newItem.name && this.newItem.img)) {
                this.error = true;
                setTimeout(() => this.error = false, 1000);
                return;
            }

            let newObj = {
                ...this.newItem
            };

            this.items.push(newObj);
        }
    },
    components: {
        'gallery-card': {
            template: `
                <div class="gallery-card">
                    <h3>{{name}}</h3>
                    <img :src="img" alt="Picture">
                    <button class="btn" @click="deleteCard">Удалить</button>
                </div>
            `,
            props: ['name', 'img', 'index'],
            methods: {
                deleteCard() {
                    this.$emit('delete-card', this.index);
                }
            }
        }
    }
});




app.mount('#app');