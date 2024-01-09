<template>
    <div class="about">
        <h1 class="text-danger">My Projects</h1>
    </div>
<div class="row">
    <div class="card-group w-25 mx-auto mt-5 mb-5" v-for="projects in Projects" :key="projects">
        <div class="card bg-transparent  ">
            <img :src="projects.image" class="card-img w-50 mx-auto  " alt="Pro">
            <div class="card-body">
                <h1 class="card-title  text-center ">{{ projects.name }}</h1>
                <h3 class="card-text  text-center">{{ projects.description }}</h3>
                <div class="card-body text-center ">
                    <a :href="projects.gitHub" target="_blank"><button type="button"
                            class="btn btn-primary m-4">GitHub</button></a>
                    <a :href="projects.netlify" target="_blank"><button type="button"
                            class="btn btn-primary">Vercel</button></a>
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