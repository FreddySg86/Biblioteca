<template>
<div class='container'>
  <h1>Contenido</h1>
  <h3>{{libros}}</h3>
  <h2>{{blog.body}}</h2>
  <router-link to = "/">
    Regresar al menu
  </router-link>
</div>


</template>

<script>
export default {
  name: 'Contenido',
  data () {
    return {
      id: this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
      console.log(data);
      this.blog = data.body;
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
