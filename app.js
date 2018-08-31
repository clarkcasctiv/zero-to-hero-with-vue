const app = new Vue({
    el: '#app',
    data: {
        message: 'From Zero To Hero With Vue!',
        hasMessage: true,
        vue: 'Vue.js is an open source JavaScript Framework.',
        selected: '',
        messages: [{
                text: 'Hello World'
            },
            {
                text: 'Hello Nepal'
            },
            {
                text: 'Hello Kathmandu'
            },

        ]
    },
    methods: {
        logMessage() {
            console.log(this.message);
        },
        toggleMessage() {
            this.hasMessage = !this.hasMessage;
        }
    }
});

