<template>
  <div class="main">
    <button @click="onClick" class="main__button">Петя</button>
    {{getName}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Main',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['getName'])
  },
  methods: {
    onClick() {
      console.log('click');
    }
  }
}
</script>

<style lang="scss">
.main {
  position:relative;
  margin:5px;
  width:300px;
  height:200px;
  border:2px solid red;
  color:red;
  
  &__button {
    position:absolute;
    color:red;
    width:70px;
    height:30px;
    bottom:10px; 
    right:10px;
    padding: 10px;
    border: 2px solid red;
  }
}
</style>