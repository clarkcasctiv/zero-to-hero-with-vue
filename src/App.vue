<template>
    <div id="app">
        <Navbar></Navbar>
        <Counter></Counter>
    </div>
</template>

<script>
import Counter from './Counter.vue';
import Navbar from './Navbar.vue';
import Message from './Message.vue';

export default {
  name: 'App',
  components: { Counter, Navbar, Message }
};
</script>
