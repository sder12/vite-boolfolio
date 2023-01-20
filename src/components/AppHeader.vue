<script>
export default {
    name: "AppHeader"
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{ name: 'projects' }">
                                Projects
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" :to="{ name: 'about' }">
                                About us
                            </router-link>
                        </li>
                    </ul>
                    <div>
                        <a class="nav-link" href="http://127.0.0.1:8000/admin/projects">Admin</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>

</style>