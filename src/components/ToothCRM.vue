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
    <vs-card vs-color="dark">
      <vs-card-header vs-background-color="dark" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="account_circle"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button vs-color="dark">One action</vs-button>
        <vs-button vs-color="dark">Another action</vs-button>
      </vs-card-actions>
    </vs-card>
    <vs-card vs-color="dark">
      <vs-card-header vs-background-color="dark" vs-title="A nice title" vs-subtitle="A nice subtitle" vs-icon="account_circle"></vs-card-header>
      <vs-card-body>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </vs-card-body>
      <vs-card-actions>
        <vs-button vs-color="dark">One action</vs-button>
        <vs-button vs-color="dark">Another action</vs-button>
      </vs-card-actions>
    </vs-card>
  </div>
</div>
</template>
<script>
import firebase from 'firebase'

/* CRM components import */
import ActionList from '@/components/ToothCRMComponents/ActionList'


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
      }
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  }
}
</script>
<style>
vs-topbar{
  justify-content: space-between;
}


</style>
