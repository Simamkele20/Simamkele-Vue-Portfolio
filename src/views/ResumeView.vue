<template>
    <div class="resume">
        <div class="container " id="Education">
            <div class="heading3 text-center p-5">
                <h1 class="text-danger">Education</h1>
            </div>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col" v-for="education in Education" :key="education">
                        <h1 class="text-danger"><i class="bi bi-mortarboard"></i></h1>
                        <h1>{{ education.place }}</h1>
                        <h2> {{ education.year }} </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="justify-content-center">
            <h1 class="mt-5 text-danger"> Skills</h1>
        </div>
        <div class="">
            <div class="row">
                <div class="card w-25 mx-auto  mb-3 " v-for="skills in Skills" :key="skills">
                    <div class="card-body">
                        <h1 class="card-title ">{{ skills.title }}</h1>
                        <h4 class="card-text">{{ skills.experience }}</h4>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        Education() {
            return this.$store.state.education
        },
        Skills() {
            return this.$store.state.skills
        },


    },
    mounted() {
        this.$store.dispatch("fetchEducation"),
            this.$store.dispatch("fetchSkills")

    }
}

</script>


<style></style>
  

