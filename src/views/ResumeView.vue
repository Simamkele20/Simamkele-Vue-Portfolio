<template>
    <div class="container bg-black ">
        <div class="container " id="Education">
            <div class="heading3 text-center p-4">
                <h2 class="hea text-danger mt-3 border-3 border-danger" >Education</h2>
            </div>
            <div class=" text-center ">
                <div class="row align-items-center mt-1">
                    <div class="col" v-for="education in Education" :key="education" >
                        <h2 class="hea text-danger"><i class="bi bi-mortarboard"></i></h2>
                        <h3 class="hea text-danger">{{ education.place }}</h3>
                        <h2 class="text-white"> {{ education.year }} </h2>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2 class="hea mt-5 text-danger mb-3"> Skills</h2>
        </div>
        <div>
            <div class="row bg-black">
                <div class="card bg-black  d-flex d-md-grid mx-auto mt-5 border border-3 border-danger mb-5 " v-for="skills in Skills" :key="skills" id="SkillCard">
                    <div class="card-body ">
                        <h2 class="hea card-title mt-3 text-danger">{{ skills.title }}</h2>
                        <h4 class="card-text text-white ">{{ skills.experience }}</h4>

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
  

