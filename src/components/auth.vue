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
    </div>
  </div>
</template>

<script>
import{ mapGetters, mapActions } from 'vuex';

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
    }
  },

  methods: {
    ...mapActions("account", ["login", "register"]),

    
    async toLogin() {
      if(this.loginId.email != '' && this.loginId.password != ''){
        await this.login(this.loginId);
      }
    },
    async toRegister() {
      if(this.signUp.name != '' && this.signUp.email != '' && this.signUp.password != ''){
        await this.register(this.signUp);
      }
    }
  },

  computed: {
    ...mapGetters('account', ["getToken"]),
  }
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
</style>