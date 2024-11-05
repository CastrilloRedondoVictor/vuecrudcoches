<script>
    import Swal from 'sweetalert2';
    import CochesService from '@/services/CochesService'

    var cochesService = new CochesService();

    export default {
        name: 'CochesDelete',
        methods: {
            deleteCoche(id) {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: 'No podrás revertir esto una vez eliminado.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        cochesService.deleteCoche(id)
                            .then(() => {
                                Swal.fire(
                                    'Eliminado',
                                    'El coche ha sido eliminado.',
                                    'success'
                                );
                                this.$router.push('/')
                            })
                            .catch((error) => {
                                console.error("Error eliminando el coche:", error);
                                Swal.fire(
                                    'Error',
                                    'Hubo un problema eliminando el coche.',
                                    'error'
                                );
                            });
                    } else{
                        this.$router.push('/')
                    }
                });
            }
        },
        mounted() {
            this.deleteCoche(this.$route.params.id)
        }
    }
</script>
