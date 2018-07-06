<template>
  <section class="is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Вход в систему</h3>
                    <p class="subtitle has-text-grey">Пожалуйста залогинтесь для продолжения.</p>
                    <p>{{ msg }}</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="../assets/app-icon-grid-lg.png">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Ваш Email" autofocus="">
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
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Регистрация</a> &nbsp;·&nbsp;
                        <a href="../">Забыли пароль</a> &nbsp;·&nbsp;
                        <a href="../">Помощь?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login page'
    }
  }
}
</script>
<style>

</style>

