<template>
  <div id="app" class="login">
    <div id="login">
      <h1>CONNEXION</h1>
      <div>
        <label for="email">Email :</label>
        <br>
        <input type="email" name="email" v-model="loginId.email">
        <br>
        <label for="password">Mot de passe : </label> 
        <br>
        <input type="password" name="password" v-model="loginId.password">
      </div>
      <div class="btn login-btn" @click="toLogin">
        <label>Se connecter</label>
      </div>
      <div class="error">
        {{ this.logError }}
      </div>
    </div>    

    <div id="sign-up">
      <h1>INSCRIPTION</h1>
      <div>
        <label for="name">Nom :</label>
        <br>
        <input type="text" name="name" v-model="signUp.name">
        <br>
        <label for="email">Email :</label>
        <br>
        <input type="email" name="email" v-model="signUp.email">
        <br>
        <label for="password">Mot de passe : </label> 
        <br>
        <input type="password" name="password" v-model="signUp.password">
      </div>
      <div class="btn login-btn" @click="toRegister">
        <label>S'inscrire</label>
      </div>
      <div class="error">
        {{ this.regError }}
      </div>
    </div>
  </div>

</template>

<script>
import{ mapActions } from 'vuex';

export default {
  name: 'Auth',

  data () {
    return {
      loginId: {
        email: '',
        password: '',
      },

      signUp: {
        name: '',
        email: '',
        password: '',
      },

      logError: null,
      regError: null,
    }
  },

  methods: {
    // recupere action login register from store/account.actions.js
    ...mapActions("account", ["login", "register"]),

    
    async toLogin() {
      if(this.loginId.email != '' && this.loginId.password != ''){
        const msg = await this.login(this.loginId);
        this.logError = msg;        
      }
    },
    async toRegister() {
      if(this.signUp.name != '' && this.signUp.email != '' && this.signUp.password != ''){
        const msg = await this.register(this.signUp);
        this.regError = msg;
      }
    }
  },
}
</script>

<style>
  .login {
    display: flex;
  }

  #login {
    width: 100%;
  }

  #sign-up {
    width: 100%;
    border-left: 1px black solid;
  }

  #login input, #sign-up input {
    border: none;
    border-bottom: 1px rgb(207, 207, 207) solid;
    margin-bottom: 10px;
  }

  .login-btn {
    background: rgb(236, 236, 236);
    width: 200px;
    margin-left: 50%;
    transform: translate(-50%);

    transition-property: background;
    transition-duration: .2s;
  }

  .login-btn:hover {
    background: rgb(202, 202, 202);
  }

  .error {
    color: red;
  }
</style>