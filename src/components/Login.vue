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
                        <p>{{ msg }}</p>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Ваш E-mail\Логин" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Ваш пароль">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                  <input type="checkbox">
                                  Запомнить меня
                                </label>
                            </div>
                            <button
                              class="button is-block is-info is-large is-fullwidth"
                              v-on:click="login"
                              >Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                      <a class="button is-link is-rounded" v-on:click="signUp">Регистрация</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    login: function() {
      console.log(this)
      this.$router.replace('tooth_crm')
    },
    signUp: function() {
      this.$router.replace('sign_up')
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

