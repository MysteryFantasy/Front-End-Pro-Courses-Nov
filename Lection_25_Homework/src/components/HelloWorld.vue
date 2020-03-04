<template>
  <div class="hello">
    <h1><strong>Welcome to my Project!</strong></h1>

    <Modal>
    
    <template v-slot:header>
      <div>
        Header
      </div>
    </template>
    
    <template v-slot:content>
      <div>
        Content
      </div>
    </template>

    <template v-slot:footer>
      <div>
        Footer
      </div>
    </template>

    </Modal>
  
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