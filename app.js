 const navbar = Vue.component('navbar', {
     template: `
    <header>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </header>
    `,

 });

 const counter = Vue.component('counter', {
     template: `
<span>
    <button @click="this.increment">+</button>
    <span>{{ sum }}</span>
    <button @click="this.decrement">-</button>
</span>
`,
     // each data must be a function , so separate instances can have their own 
     data: () => {
         return {
             sum: 0
         }
     },
     methods: {
         increment() {
             this.sum += 1;
         },
         decrement() {
             this.sum -= 1;
         }
     }
 });

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
         },
         components: {
             navbar,
             counter
         }



     },

 );