<template>
 
  <div class="logIn">
    <header>
      <slot name="logIn_header"><h3>Авторизация</h3></slot>
    </header>
    
    <div class="logIn_content">
      <slot name="logIn_content"></slot>
        
      <input type='text' name='login' placeholder="Input your login" v-model="obj.login">
      <br>
      <input type='password' name='password' placeholder="Input your password" v-model="obj.password">  

    </div>
  
    <div class='logIn_button'>
      <button @click='receiveData'>Submit</button>
    </div>

    <div class='logIn_footer'>
      <p><h3><slot name="logIn_footer">Sign Up</slot></h3></p>
      
      <SignIn :bool="bool">
      </SignIn>

    </div>
  </div>

</template>

<script>

import SignIn from '../components/SignIn'
import sendAjax from '../database/Database'

export default {
  name: 'LogIn',
  components: {
    SignIn: SignIn,
    sendAjax: sendAjax,
  },
  data() {
    return {
      obj: {
        login: '',
        password: '',
      },
      bool: false
    }
  },
  methods: {
    receiveData(){
      sendAjax('post', 'http://localhost:3000/', JSON.stringify(this.obj))
        .then((resolve) => {
          this.$router.push('/main');
        },
        (reject) => {
          this.bool = true;
        });
    },
  }

}
</script>

<style scoped lang="scss">
.logIn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: 400px;
  border: 2px dashed blue;
}
.logIn_content {
  padding: 10px;
}
.logIn_footer {
  padding: 10px;
}
</style>