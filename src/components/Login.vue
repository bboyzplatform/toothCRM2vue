<template>
  <section class="is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Вход в систему</h3>
                    <p class="subtitle has-text-grey">Пожалуйста залогинтесь для продолжения.</p>
                    <div class="box">
                        <figure class="avatar">
                            <!-- <img src="../assets/app-icon-grid-lg.png"> -->
                            <img src="../assets/dental_img.png">
                        </figure>
                       <!--  <p>{{ msg }}</p>; -->
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Ваш E-mail\Логин" autofocus=""
                                    v-model="email">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Ваш пароль"
                                    v-model="password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                  <input type="checkbox">
                                  Запомнить меня
                                </label>
                            </div>
                            <vs-button vs-color="primary" vs-type="border"
                              v-on:click="signIn"
                              >Войти</vs-button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                      <!-- <router-link to="/sign_up" class="button is-link is-rounded"></router-link> -->
                      <vs-button vs-color="primary" vs-type="border" v-on:click="goToSignUp">Регистрация</vs-button>
                    </p>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
import firebase from 'firebase'
import Vuesax from 'vuesax'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToSignUp: function(){
      this.$router.replace('sign_up')
    },
    signIn: function() {

      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('tooth_crm')
        },
        (error) => {
          alert('Ошибка! ' + error.message)
        }
      )
    }
  }
}
</script>
<style>
  .avatar > img{
    width: 5rem;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 3rem;
    border: 2px solid #2196F3;
  }
</style>

