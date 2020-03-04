<template>
  <div class="hello">
    <h1><strong>Welcome to my Project!</strong></h1>

    <button type="button" class="button" @click="openModal" :visible="showModalWindow"> Show Modal Window </button>
    
    <Modal v-if="showModalWindow" @close="closeModal">
    
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
  data () {
    return {
      showModalWindow: false,
    }
  },
  methods: {
    openModal() {
      this.showModalWindow = true;
    },
    closeModal() {
      this.showModalWindow = false;
    }
  }
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