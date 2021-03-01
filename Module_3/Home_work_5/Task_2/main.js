
let timerId;

let app = Vue.createApp({
    data() {
        return {
            time: 3000,
            slides: ['А вы, друзья, как ни садитесь, Всё в музыканты не годитесь', 'А он, мятежный, просит бури, Как будто в бурях есть покой!', 'А счастье было так возможно, Так близко!', 'В карете прошлого никуда не уедешь']
        }
    }
});

app.component('slider', {
    template: `<p class="slide">{{activeSlide}}</p>`,
    props: ['slides', 'time'],
    data() {
        return {
            currentIndex: 0,
            currentSlide: ''
        }
    },
    computed: {
        activeSlide() {
            this.currentSlide = this.slides[this.currentIndex];

            timerId = setTimeout(()=>{
                if (this.currentIndex >= this.slides.length - 1) {
                    this.currentIndex = 0;
                    return;
                }
                this.currentIndex++;
            }, this.time);
            setTimeout(() => {
                let slideElem = document.querySelector('.slide');
                slideElem.classList.add('disappearance');
            }, 0);
            setTimeout(() => {
                let slideElem = document.querySelector('.slide');
                slideElem.classList.remove('disappearance');
            }, this.time - 500);
            return this.currentSlide;
        }
    }
});

app.mount('#app');