<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Nuevo Coche</h1>
        
        <form @submit.prevent="postCoche" class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="marca">Marca del Coche</label>
                <input 
                    v-model="marca" 
                    type="text" 
                    class="form-control" 
                    id="marca" 
                    placeholder="Introduzca la MARCA del coche"
                    required
                >
            </div>
            <div class="form-group">
                <label for="modelo">Modelo del Coche</label>
                <input 
                    v-model="modelo" 
                    type="text" 
                    class="form-control" 
                    id="modelo" 
                    placeholder="Introduzca el MODELO del coche"
                    required
                >
            </div>
            <div class="form-group">
                <label for="conductor">Conductor del Coche</label>
                <input 
                    v-model="conductor" 
                    type="text" 
                    class="form-control" 
                    id="conductor" 
                    placeholder="Introduzca el CONDUCTOR del coche"
                    required
                >
            </div>
            <div class="form-group">
                <label for="imagen">Imagen del Coche</label>
                <input 
                    v-model="imagen" 
                    type="text" 
                    class="form-control" 
                    id="imagen" 
                    placeholder="Introduzca el link de la IMAGEN del coche"
                    required
                >
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Añadir Coche</button>
        </form>
    </div>
</template>
<script>
import CochesService from '@/services/CochesService'
import Swal from 'sweetalert2';

var cochesService = new CochesService();
    export default {
        name: 'CochesPost',
        data() {
            return {
                idCoche: 0,
                marca: '',
                modelo: '',
                conductor: '',
                imagen: '',
            }
        },
        methods: {
            postCoche() {
                let data = {
                    idCoche: parseInt(this.idCoche),
                    marca: this.marca,
                    modelo: this.modelo,
                    conductor: this.conductor,
                    imagen: this.imagen,
                }
                cochesService.postCoche(data).then( response => {
                    Swal.fire(
                        'Añadido',
                        'El coche ha sido añadido.',
                        'success'
                    );
                    console.log(response)
                    this.$router.push('/');
                }
                )
            }
        }
    }
</script>
<style>
    @import url(../assets/css/loader.css);
</style>