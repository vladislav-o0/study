let app = Vue.createApp({
    data() {
        return {
           articles: [{
               name: 'Ошибки на высоте: почему наши биатлонисты слабо выступили на ЧМ',
               url: 'https://iz.ru/1128096/timur-ganeev/oshibki-na-vysote-pochemu-nashi-biatlonisty-slabo-vystupili-na-chm',
               src: 'https://cdn.iz.ru/sites/default/files/styles/1300x600/public/article-2021-02/20210220_gaf_u12_186%205.jpg?itok=DFS6kgl1'
            },{
                name: 'Природа и кукловоды: выставочные залы ждут семейную аудиторию',
                url: 'https://iz.ru/1128059/iana-abu-zeid/priroda-i-kuklovody-vystavochnye-zaly-zhdut-semeinuiu-auditoriiu',
                src: 'https://cdn.iz.ru/sites/default/files/styles/640x335/public/article-2021-02/566822.jpg?itok=sBfrD78v'
            },{
                name: 'Сломанная мечта: Медведев дал бой Джоковичу, но силы пока неравны',
                url: 'https://iz.ru/1128008/oleg-shamonaev/slomannaia-mechta-medvedev-dal-boi-dzhokovichu-no-sily-poka-ne-ravny',
                src: 'https://cdn.iz.ru/sites/default/files/styles/640x335/public/article-2021-02/2021-02-21T120009Z_1456629480_UP1EH2L0XC9LU_RTRMADP_3_TENNIS-AUSOPEN.JPG.jpg?itok=ZMO8e-kH'
            },{
                name: 'Что ищет он в стране далекой: земляне продолжают настойчиво штурмовать Марс',
                url: 'https://iz.ru/1127727/mikhail-kotov/chto-ishchet-v-strane-dalekoi-zemliane-prodolzhaiut-nastoichivo-shturmovat-mars',
                src: 'https://cdn.iz.ru/sites/default/files/styles/640x335/public/article-2021-02/20210219_gaf_x99_003_1.jpg?itok=3qtGwEsc'
            }],
            mode: 'grid'
        } 
    },
    methods: {
       toggleMode() {
           if (this.mode == 'grid') this.mode = 'column';
           else this.mode = 'grid';
       }
    }
});

app.mount('#app');