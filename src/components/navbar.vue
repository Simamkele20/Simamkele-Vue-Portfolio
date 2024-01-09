<template>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-black bg-gradient sticky-top">
        <div class="container-fluid">
            <route-link to="/" class="nav-link">
             <img src="https://drive.google.com/uc?id=1GU4_KQIaIkHh9UZVm_n9GM3p1dfh7wQQ"    class="img-fluid img-thumbnail w-25" loading="lazy" alt="Logo">   
            </route-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto  mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/resume" class="nav-link">Resume |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/project" class="nav-link">Project  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/testimonials" class="nav-link">Testimonials  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact  |</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'navBarComp',
}
</script>

<style scoped></style>