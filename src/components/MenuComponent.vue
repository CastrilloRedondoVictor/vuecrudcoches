<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          COCHES
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" activeclass="active" exact to="/">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" activeclass="active" exact to="/post">
                Añadir
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

