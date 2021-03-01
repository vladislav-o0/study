let app = Vue.createApp({
    data() {
        return {
            tabActive: 1
        }
    },
    methods: {
        setActiveTab() {
            if (event.target.nodeName != 'LI') return;

            let activeTab = document.querySelector('.tab-active');

            activeTab.classList.remove('tab-active');
            event.target.classList.add('tab-active');

            console.log(event.target.dataset.id);

            this.tabActive = event.target.dataset.id;
            console.log(this.tabActive);
        }
    }
});

app.mount('#app');