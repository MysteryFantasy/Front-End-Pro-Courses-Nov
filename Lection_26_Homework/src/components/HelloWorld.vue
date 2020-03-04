<template>
<div class="hello">
    <Main />
    <Second />
    <Third />
</div>
</template>

<script>
import Main from './Main'
import Second from './Second'
import Third from './Third'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Main: Main,
    Second: Second,
    Third: Third
  }
}
</script>


<style scoped lang="scss">
.hello {
  display: flex;
}

</style>