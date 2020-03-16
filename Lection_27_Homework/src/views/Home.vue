<template>
  <div class="main">
    <header>
      <slot name="header"><h3>Welcome To The Main Page!</h3></slot>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Home',
    
}

</script>

<style lang="scss">
.main {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: 400px;
  border: 2px dashed 	#C71585;
}
</style>