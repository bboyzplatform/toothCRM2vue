<template>
  <section class="is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Регистрация</h3>
                    <p class="subtitle has-text-grey">Введите регистрационные данные</p>
                    <div class="box">
                        <figure class="avatar">
                            <!-- <img src="../assets/app-icon-grid-lg.png"> -->
                            <img src="../assets/dental_img.png">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input
                                    class="input is-large" type="email" placeholder="Ваш E-mail\Логин" autofocus=""
                                    v-model="email">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Ваш пароль"
                                    v-model="password">
                                </div>
                            </div>
                            <button
                              class="button is-block is-info is-large is-fullwidth"
                              v-on:click="signUp"
                              >Зарегистрировать</button>
                        </form>
                    </div>
                    <p class="has-text-grey">Вернуться на
                      <router-link to="/login">страницу входа</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user){
            alert('Аккаунт успешно создан - перейдите на страницу входа и войдите в систему')
          },
          function(error){
            alert('Ошибка '+ error.message)
          }
        )
    },
    backToLogin: function() {
      this.$router.replace('login')
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

