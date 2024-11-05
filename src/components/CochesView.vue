<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Coches</h1>
        
        <table v-if="coches.length > 0" class="table table-bordered table-hover">
            <thead class="thead-light">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Conductor</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coche in coches" :key="coche.idCoche">
                    <th>{{ coche.idCoche }}</th>
                    <td>{{ coche.marca }}</td>
                    <td>{{ coche.modelo }}</td>
                    <td>{{ coche.conductor }}</td>
                    <td><img style="width: 100px;" :src="coche.imagen" :alt="coche.idCoche"></td>
                    <td>
                        <router-link :to="`/update/${coche.idCoche}`" class="btn btn-sm btn-outline-primary m-2">Editar</router-link>
                        <router-link :to="`/get/${coche.idCoche}`" class="btn btn-sm btn-outline-info m-2">Ver</router-link>
                        <router-link :to="`/delete/${coche.idCoche}`" class="btn btn-sm btn-outline-danger m-2">Borrar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
import CochesService from '@/services/CochesService'

var cochesService = new CochesService();

    export default {
        name: 'CochesView',
        data() {
            return {
                coches: []
            }
        },
        methods: {
            getCoches() {
                cochesService.getCoches().then(response => {
                    this.coches = response
                })
            },
        },
        mounted() {
            this.getCoches()
        },
    }
</script>

<style scoped>
.container {
    max-width: 800px;
}

h1 {
    color: #2c3e50;
    font-size: 26px;
    font-weight: 700;
}

.table {
    margin-top: 20px;
}

.btn-outline-primary {
    color: #007bff;
}

.btn-outline-danger {
    color: #dc3545;
}

.btn:hover {
    color: #fff;
}
</style>

<style>
    @import url(../assets/css/loader.css);
</style>