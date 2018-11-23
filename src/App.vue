<template>
  <div id="app">
  
      <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Contenido from './components/Contenido'
import Libreria from './components/Libreria'

export default {
  name: 'App',
  components: {
    Contenido,
    Libreria
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
