<template>
    <div class="container bg-white">
        <h2 class="text-danger mt-3">Testimonials</h2>
    </div>

 <div class="row">
    <div class="card mx-5    mb-5 mt-4 " v-for="testimonials in Testimonials" :key="testimonials" id="ProjectCard">
                <img :src="testimonials.profile" class="home2 rounded-al       mt-4 mx-0" alt="...">
                <div class="card-body">
                  <h2 class="card-title text-center text-danger ">{{ testimonials.name }} {{ testimonials.surname }} </h2>
                  <h4 class="card-text text-center">{{ testimonials.quotes }}
                  </h4>
               
              </div>
            </div>
 </div>
</template>
  




<script>
export default {
    computed: {
        Testimonials() {
            return this.$store.state.testimonials
        },

    },
    mounted() {
        this.$store.dispatch("fetchTestimonials")
    }
}

</script>



<style></style>