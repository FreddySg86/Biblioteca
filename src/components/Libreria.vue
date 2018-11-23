<template>


 <div class='container'>
   <h1>Biblioteca</h1>
   <!--formulario-->
     <form v-on:submit="agregarLibro(libros.length)" onsubmit="event.preventDefault()" >
       <input type = "text" v-model = libros.title placeholder = "Nombre del libro">
       <!--<input type = "text" v-model = libros.body placeholder = "Contenido del libro">-->
       <button type = "submit" class="btn btn-success">
          agregar
       </button>
     </form>
   <!--tabla-->
  <table class="table">
    <thead>
      <tr>
        <th>Id del libro</th>
        <th>Nombre del libro</th>
        <th>Borrar</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for = "(libro, index) in libros" v-show="(pag - 1) * NUM_RESULTS <= index  && pag * NUM_RESULTS > index">
           <td>
                {{libro.id}}
           </td>
           <td>
             <router-link :to="{ name: 'contenido', params: { id: libro.id}}">{{libro.title}}</router-link>

           </td>

           <td>
             <button v-on:click="eliminarLibro(libro)" class = "btn btn-danger">
               eliminar
             </button>
           </td>
        </tr>
    </tbody>

  </table>
  <!--paginador-->
  <nav aria-label="Page navigation" class="text-center">
      <ul class="pagination text-center">
          <li>
              <a href="#" aria-label="Previous" v-show="pag != 1" @click.prevent="pag -= 1">
                  <span aria-hidden="true">Anterior</span>
              </a>
          </li>
          <li>
              <a href="#" aria-label="Next" v-show="pag * NUM_RESULTS / libros.length < 1" @click.prevent="pag += 1">
                  <span aria-hidden="true">Siguiente</span>
              </a>
          </li>
      </ul>
  </nav>

 </div>


</template>

<script>
export default{
  data(){
    return{
      NUM_RESULTS: 20, // Libros por página
      pag: 1, // Primer página
      libros: [ //arreglo de libros

      ]
    }

  },
  methods:{
    eliminarLibro: function(libro){
      this.libros.splice(this.libros.indexOf(libro),1)
    },
    agregarLibro: function(value){
  console.log(value);
        this.libros.push({
          id: value+1,
          title: this.libros.title,
          body: this.libros.body,

        });
        this.libros.title = '';
        this.libros.body = '';

    }

  },
  created(){

    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => this.libros = res.body);
  }

}

</script>
