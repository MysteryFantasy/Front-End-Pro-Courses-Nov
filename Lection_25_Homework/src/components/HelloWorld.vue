<template>
  <div class="hello">
    <h1><strong>Welcome to my Project!</strong></h1>
    
    <Modal />
  
  </div>

</template>

<script>
import Modal from './Modal'

export default {
  name: 'HelloWorld',
  components: {
    Modal: Modal
  },
}
</script>

<style scoped lang="scss">
.hello {
  text-align: center;
}
.button {
  display:inline;
}
</style>