<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Editar Coche</h1>
        
        <form v-if="idCoche" @submit.prevent="UpdateCoche" class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="idCoche">ID del Coche</label>
                <input 
                    v-model="idCoche" 
                    type="number" 
                    class="form-control" 
                    id="idCoche" 
                    placeholder="Introduzca el ID del coche"
                    required
                    disabled
                >
            </div>
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
            <button type="submit" class="btn btn-primary btn-block mt-3">Editar Coche</button>
        </form>
    </div>
</template>

<script>
import CochesService from '@/services/CochesService';
import Swal from 'sweetalert2';

const cochesService = new CochesService();

export default {
    name: 'CochesUpdate',
    data() {
        return {
            idCoche: null,
            marca: '',
            modelo: '',
            conductor: '',
            imagen: '',
        };
    },
    methods: {
        async UpdateCoche() {
            let data = {
                idCoche: parseInt(this.idCoche),
                marca: this.marca,
                modelo: this.modelo,
                conductor: this.conductor,
                imagen: this.imagen,
            };

            try {
                const response = await cochesService.updateCoche(data);
                if (response) {
                    Swal.fire(
                        'Editado',
                        'El coche ha sido editado exitosamente.',
                        'success'
                    );
                    console.log(response);
                    this.$router.push('/');
                }
            } catch (error) {
                Swal.fire(
                    'Error',
                    'No se pudo editar el coche. Intente nuevamente.',
                    'error'
                );
                console.error(error);
            }
        },
        async getCoche() {
            try {
                const response = await cochesService.getCoche(this.$route.params.id);
                this.idCoche = response.idCoche;
                this.marca = response.marca;
                this.modelo = response.modelo;
                this.conductor = response.conductor;
                this.imagen = response.imagen;
            } catch (error) {
                Swal.fire(
                    'Error',
                    'No se pudo obtener la información del coche. Intente nuevamente.',
                    'error'
                );
                console.error(error);
            }
        }
    },
    mounted() {
        this.getCoche();
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
}

h1 {
    color: #2c3e50;
    font-size: 26px;
    font-weight: 700;
}

.btn-primary {
    color: #fff;
}
</style>
