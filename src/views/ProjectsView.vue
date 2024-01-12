<template>
    <div class="container bg-white">
        <h2 class="text-danger pb-1 mt-3">My Projects</h2>
    </div>

    <div class="col">
        <div class="row  d-grid d-md-flex ">
        <div class="card    mt-4 mb-5" v-for="projects in Projects" :key="projects" id="ProjectCard">
            <img :src="projects.image" class="card-img-top w-50 mx-auto mt-4  " alt="Pro">
            <div class="card-body">
                <h2 class="card-title  text-center text-danger">{{ projects.name }}</h2>
                <h3 class="card-text  text-center">{{ projects.description }}</h3>
                <div class="card-body text-center ">
                    <a :href="projects.gitHub" target="_blank"><button type="button"
                            class="btn btn-danger m-4">GitHub</button></a>
                    <a :href="projects.netlify" target="_blank"><button type="button"
                            class="btn btn-danger">Vercel</button></a>
                </div>

            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    computed: {
        Projects() {
            return this.$store.state.projects
        },

    },
    mounted() {
        this.$store.dispatch("fetchProjects")

    }

}
</script>
  
<style></style>