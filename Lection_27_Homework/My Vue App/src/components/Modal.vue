<template>
 
  <div class="modal_background">
    <div class="modal">

      <div class="modal_header">
        <slot name="header"></slot>
      </div>
    
      <div class="modal_content">
        <slot name="content"></slot>
      </div>

      <button type="button" class="close_button" @click="close">X</button>
      
    </div>
  </div>

</template>

<script>

export default {
  name: 'Modal',
  props:{
    visible: Boolean,
  },
  methods: {
    close() {
      this.$emit('close', this.visible);
    }
  }

}
</script>

<style scoped lang="scss">
  .modal {
    position:relative;
    flex-direction: column;
    background: white;
    width: 500px;
    height: 300px;
    box-shadow: 2px 2px 20px 1px;
  }
  .modal_background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal_header,
  .modal_content {
    padding: 20px;
    color: darkBlue;
    display: flex;
    justify-content: space-around;
  }
  .close_button {
    position:absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    color: black;
    background: red;
    border: 1px solid black;
    font-size: 15px;
    padding: 10px;
  }
</style>