<template>
    <div>
      <p>Original Message: {{ message }}</p>
      <p>Reversed Message: {{ reversedMessage }}</p>
      <strong>{{ count }}</strong>
      <!-- <small>{{ counter }}</small> -->
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        message: 'Hello World',
        count:0,
      }
    },
    methods: {
      reverseMessage() {
        console.log("function is called");
        // This method is called every time the button is clicked
        this.message = this.message.split('').reverse().join('')
        this.count=this.count+1;
      }
    },
    computed: {
      reversedMessage() {
        console.log("computed is called");
        // This computed property is only re-computed when the message data property changes
        return this.message.split('').reverse().join('')
      },
      counter(){
        console.log("counter computed");
        return this.count*2;
      }
    }
  }
  </script>
