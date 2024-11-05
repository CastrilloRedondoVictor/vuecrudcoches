<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Información de Coche</h1>
        <div v-if="coche" class="card">
            <div class="card-body">
                <h5 class="card-title">Detalles del Coche</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: {{ coche.idCoche }}</h6>
                <p class="card-text"><strong>Marca y Modelo:</strong> {{ coche.marca }} {{ coche.modelo }}</p>
                <p class="card-text"><strong>Conductor:</strong> {{ coche.conductor }}</p>
                <img :src="coche.imagen" style="width: 80%;" :alt="coche.idCoche">
            </div>
        </div>
        <div v-else>
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
import CochesService from '@/services/CochesService'

var cochesService = new CochesService();
export default {
    name: 'CochesGet',
    data() {
        return {
            coche: null
        }
    },
    methods: {
        getCoche() {
            cochesService.getCoche(this.$route.params.id).then(response => {
                this.coche = response;
            })
        }
    },
    mounted() {
        this.getCoche();
    }
}
</script>

<style scoped>
.container {
    max-width: 600px;
}

.card {
    border: 1px solid #007bff;
}

.card-title {
    color: #007bff;
}

.alert {
    text-align: center;
}
</style>
<style>
    @import url(../assets/css/loader.css);
</style>
