<template>
<div>
  <vs-topbar vs-color="primary" style="justify-content:space-between">
  <vs-button vs-type="dark-flat" vs-color="primary" vs-icon="true"><i class="material-icons">menu</i></vs-button>
  <h3>Зубы CRM v0.1</h3>
  <div>
  <vs-button
    vs-color="white" vs-type="line" vs-icon="directions_run"
    v-on:click="logout">Выход
  </vs-button>
  <vs-button vs-type="dark-flat" vs-icon="more_vert"></vs-button>
  </div>

</vs-topbar>
  hello!
  {{ msg }}

<div class="centerx">
    <vs-card vs-color="dark" id="div-with-loading">
      <vs-card-header vs-background-color="dark" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="account_circle"></vs-card-header>
      <vs-card-body class="vs-con-loading__container">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button @click="noty" vs-color="dark" vs-type="flat"> Notify</vs-button>
        <vs-button id="button-with-loading" class="vs-con-loading__container" @click="openLoadingInDiv" vs-type="filled" vs-color="primary">Открыть</vs-button>
      </vs-card-actions>
    </vs-card>
  </div>
</div>
</template>
<script>
import firebase from 'firebase'


export default {
  name: 'ToothCrm',
  data : function(){
    return {
      msg: 'Tooth CRM page',
      CRMConfig: {
        language: 'ru',
        themeUI: 'material', // 'ios', 'bootstrap-standart'
        viewType: 'web-page' // 'web-view', 'iframe', 'desktop windows' - влияет на layoutGrid
            /* Добавить настройки отображения и свойство functionalScaling: full, custom , lite (ограничивает кол-во компонентов в зщависимости от версии или требований) */
      },
      backgroundLoading:'primary',
      colorLoading:'#fff'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    },
    noty: function (){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
      this.$vs.notify({
        title:'Color',
        text:'Lorem ipsum dolor sit amet, consectetur',
        color:color
      })
    },
    openLoadingContained: function() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-with-loading',
        scale: 0.3
      })
      setTimeout( ()=> {
        this.$vs.loading.close({
          container: '#button-with-loading > .vs-con-loading'
        })
      }, 2000);
    },
    openLoadingInDiv: function() {
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout( ()=> {
        this.$vs.loading.close({
          container: '#div-with-loading > .vs-con-loading.vs-con-loading'
        })
      }, 2000);
    }
  }
}</script>
<style>
vs-topbar{
  justify-content: space-between;
}


</style>
