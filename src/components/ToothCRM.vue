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
 <vs-divider vs-color="primary">Пациенты</vs-divider>
<div class="cards-container line">
  <div class="centerx" v-for="customer of customers" v-bind:key="customer['.key']">
    <vs-card vs-color="dark" id="div-with-loading"
      >
      <vs-card-header
        vs-background-color="dark"
        vs-subtitle="Пациент"
        vs-icon="account_circle"
        :vs-title="customer.fullname">
      </vs-card-header>
      <vs-card-body class="vs-con-loading__container">
        <ul>
          <li>adress: {{customer.adress}}</li>
          <li>birthday: {{customer.birthday}}</li>
          <li>gender: {{customer.gender}}</li>
          <li>mail: {{customer.mail}}</li>
          <li>phone: {{customer.phone}}</li>
          <li>adress: {{customer.adress}}</li>
        </ul>
      </vs-card-body>
      <vs-card-actions>
        <vs-button @click="noty" vs-color="dark" vs-type="flat"> Notify</vs-button>
        <vs-button id="button-with-loading" class="vs-con-loading__container" @click="openLoadingInDiv" vs-type="filled" vs-color="primary">Открыть</vs-button>
      </vs-card-actions>
    </vs-card>
  </div>
</div>
      <!-- anamnesis data -->
      <vs-divider vs-color="primary"><b>Анамнезы из БД:</b></vs-divider>
      <vs-row
        vs-align="flex-start"
        vs-type="flex" vs-justify="center" vs-w="12">

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <ul>
            <li v-for="item in anamnesis" v-bind:key="item['.key']">{{ item.text }}</li>
          </ul>
        </vs-col>
      </vs-row>

</div>
</template>
<script>
import { customersRef, anamnesisRef } from '../firebase'


export default {
  name: 'ToothCrm',
  data: function(){
    return {
      customers: [],
      anamnesis: [],
      cname: 'Paul',
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
  firebase: {
    customers: customersRef,
    anamnesis: anamnesisRef
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
.cards-container.line{

}

</style>
