<template>


 <div class="row bg-black">
    <h2 class="hea bg-black text-danger mt-3">Testimonials</h2>
    <div class="card mx-5 bg-black border border-3 border-danger  mb-5 mt-4 " v-for="testimonials in Testimonials" :key="testimonials" id="ProjectCard">
                <img :src="testimonials.profile" class="home2 rounded-al rounded-danger  bg-white    mt-4 mx-0" alt="...">
                <div class="card-body">
                  <h2 class="hea card-title text-center text-danger ">{{ testimonials.name }} {{ testimonials.surname }} </h2>
                  <h4 class="card-text text-center text-white">{{ testimonials.quotes }}
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