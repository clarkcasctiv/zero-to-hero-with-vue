<template>
<div>

    <!-- <span v-bind:title="vue">{{ message }}</span> -->
    <span v-if="hasMessage" :title="vue">{{ message }}</span>
    <!-- <button v-on:click="logMessage">Click Me!</button> -->
    <button @click="logMessage">Click Me!</button>
    <button @click="toggleMessage">Toggle Message!</button>

    <form>
        <input v-model="message" type="text">
        <input v-model="hasMessage" type="checkbox">

    </form>

    <div>
        <select v-model.lazy="selected">
            <option disabled value="">What's your favorite coffee?</option>
            <option>Cafe Latte</option>
            <option>Cappuchino</option>
            <option>Mocha Latte</option>
        </select>

        <span>Selected: {{ selected }}</span>
    </div>

    <ul>
        <li v-for="message in messages" :key="message.key">
            {{ message.text }}
        </li>
    </ul>

</div>
</template>

<script>
export default {
  name: 'Message',
   data: {
             message: 'From Zero To Hero With Vue!',
             hasMessage: true,
             vue: 'Vue.js is an open source JavaScript Framework.',
             selected: '',
             messages: [{
                     id: 1,
                     text: 'Hello World'
                 },
                 {
                     id: 2,
                     text: 'Hello Nepal'
                 },
                 {
                     id: 3,
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
};
</script>

