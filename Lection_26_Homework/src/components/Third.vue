<template>
  <div class="third">
    <button @click="onClick" class="third__button">Коля</button>
    {{getName}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Third',
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
      console.log('click3');
    }
  }
}
</script>

<style lang="scss">
.third {
  position:relative;
  margin: 5px;
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