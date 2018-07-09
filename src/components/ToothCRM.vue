<template>
<div>
  hello!
  {{ msg }}
  <button v-on:click="signOut">Выход</button>
</div>
</template>
<script>
export default {
  name: 'ToothCrm',
  data () {
    return {
      msg: 'Tooth CRM page',
      CRMConfig: {
        language: 'ru',
        themeUI: 'material', // 'ios', 'bootstrap-standart'
        viewType: 'web-page' // 'web-view', 'iframe', 'desktop windows' - влияет на layoutGrid
            /* Добавить настройки отображения и свойство functionalScaling: full, custom , lite (ограничивает кол-во компонентов в зщависимости от версии или требований) */
      }

    }
  }
}
</script>
<style lang="scss">

//@import '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
