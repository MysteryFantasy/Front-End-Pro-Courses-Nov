<template>
  <div class="second">
    <button @click="onClick" class="second__button">Ирина</button>
    {{$store.state.name}}
  </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onClick() {
      console.log('click2');
    }
  }
}
</script>

<style lang="scss">
.second {
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