<template>
<div>
  <!-- <Header :class="sumClass">The sum is {{ sum }}</Header> -->

  <Header>
    <h2 slot="title">The sum is:</h2>
    <h2 slot="sum" :class="sumClass">{{ sum }}</h2>
  </Header>
  
    <div>
    <button @click="this.increment">+</button>
    <!-- <span :class="sumClass">{{ sum }}</span> -->
    <button @click="this.decrement">-</button>
    </div>
  
</div>    
 <!-- Parent Child Relationsip

Pass Props from Parent -> Children
Emit Events from Child -> Parent -->
</template>


<script>
import Header from './Header.vue';
export default {
  components: { Header },
  name: 'Counter',
  data() {
    return {
      sum: 0,
      sumClassName: 'grey'
    };
  },
  methods: {
    increment() {
      this.sum += 1;
    },
    decrement() {
      this.sum -= 1;
    }
  },
  // Computed Property
  computed: {
    sumClass() {
      if (this.sum === 0) return (this.sumClassName = 'grey');
      if (this.sum > 0) return (this.sumClassName = 'green');
      if (this.sum < 0) return (this.sumClassName = 'red');
    }
  }
};
</script>

<style>
.red {
  color: red;
}

.green {
  color: green;
}

.grey {
  color: grey;
}
</style>





