<template>
  <section>
    <h3>Ejemplo de Conexion</h3>
    <button class="btn btn-primary" @click="agregarPartida">
      Agregar Partida
    </button>
  </section>
</template>
<script lang="js">

import {db} from '@/config/_firebase'
export default {
    name:'DB',
    components:{},
    data(){
        return{
            partidas: [],
            partida: {
                completed: false,
                created_at: Date.now(),
                created_by:'',
                ganador_id:'',
                ganador_name: "",
                nombre: [],
                opciones: [],
                participantes: []
            }
        }
    },
    computed:{

    },
    watch:{

    },
    mounted(){

    },
    created(){

    },
    updated(){

    },
    destroyed(){

    },
    firestore: {
        partidas: db.collection('partidas')
    },
    methods:{
        agregarPartida(){
            db.collection('partidas').add(this.partida)
        }
    },
};
</script>
