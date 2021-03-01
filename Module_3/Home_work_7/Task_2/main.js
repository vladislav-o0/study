
let app = Vue.createApp({
    template: `
    <transition mode="out-in">
    <transition-group v-if="life != 0 && gameProcess != 101" @mousedown.prevent tag="div" class="field">
        <div @click="selectElem(n)" v-for="n in getArr" class="field-item" :key="n">{{n}}</div>
     </transition-group>
     <img v-else-if="life == 0" src="./img/end.png" alt="end">
     <img v-else-if="gameProcess == 101" src="./img/win.png" alt="win">
     </transition>
    <div class="btn-box">
    <button @click="mixArr">Перемешать</button>
    <button @click="newGame">Новая игра</button>
    </div>
    `,
    data() {
        return {
            arr: [],
            gameProcess: 1,
            life: 5
        }
    },
    computed: {
        getArr() {
            if (!this.arr.length) {
                for (let i = 1; i <= 100; i++) {
                    this.arr.push(i);
                }
            }

            return this.arr;
        }
    },
    methods: {
        mixArr() {
            this.arr.sort(()=>{return rand(2) - 1});
            this.mixStyles();
        },
        mixStyles() {
            let items = document.querySelectorAll('.field-item');

            for (let j = 0; j < items.length; j++) {
                items[j].style.backgroundColor = `rgb(${rand(255)},${rand(255)},${rand(255)})`;
                items[j].style.color = `rgb(${rand(255)},${rand(255)},${rand(255)})`;
                items[j].style.fontSize = `${rand(32, 15)}px`;
            }
        },
        selectElem(n) {
            let elem = event.target;
            if (n != this.gameProcess) {

                if (this.life > 0) this.life--;

                elem.classList.add('fail');

                setTimeout(()=>elem.classList.remove('fail'), 300);

                return;
            }
            elem.classList.add('success');
            if (this.gameProcess < 101) {
                this.gameProcess++;
            }
        },
        newGame() {
            let items = document.querySelectorAll('.success');

            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('success');
            }

            if (!this.life ||  this.gameProcess == 100) {
                setTimeout(()=>this.mixStyles(), 1000);
            }

            this.gameProcess = 1;
            this.life = 5;  
        }
    },
    mounted() {
        this.mixStyles();
    }
});

app.mount('#app');

function rand(to, from = 0) {
    let randNum =  Math.floor(Math.random() * (to + 1));
    if (from) {
        if (randNum < from) {
            return from;
        }
    }
    return randNum;
}