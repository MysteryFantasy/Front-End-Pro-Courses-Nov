<template>
    <div class="signIn">

    <p><button @click='signUp' :visible="showModalWindow" :class="{'sign_up': !bool, 'sign_up_color': bool}">Sign Up</button></p>

      <Modal v-if="showModalWindow" @close="closeModal">
      
        <template v-slot:header>
          <div>
            <h3>Регистрация</h3>
          </div>
        </template>
        
        <template v-slot:content>
            <div class='signIn_content'>
              <input type='text' name='login' placeholder="Create your login" v-model="obj.login">
              <br>
              <input type='password' name='password' placeholder="Create a password" v-model="obj.password">
              <br>
              <p><button @click="register" class='register'>Register</button></p>
          </div>
        </template> 

      </Modal>
       
    </div>

</template>

<script>
import Modal from './Modal'
import sendNewAjax from '../database/NewDatabase'

export default {
  name: 'SignIn', 
  components: {
    Modal: Modal,
    sendNewAjax: sendNewAjax
  },
  data() {
    return {
      obj: {
        login: '',
        password: '',
      },
      showModalWindow: false,
    }
  },
  props: {
    bool: Boolean
  },
  methods: {
    register(){
      // console.log(this.obj);
      sendNewAjax('post', 'http://localhost:3000/newUser', JSON.stringify(this.obj))
        .then((resolve) => {
          // console.log('registrated');
          this.showModalWindow = false;
        },
        (reject) => {
          console.log('not registrated');
        });
    },
    signUp(){
      this.showModalWindow = true;
    },
    closeModal() {
      this.showModalWindow = false;
    }
  }

}
</script>

<style scoped lang="scss">
.signIn_content {
  display: absolute;
  padding: 10px;
}
.sign_up_color {
  border: 2px solid green;
}
</style>