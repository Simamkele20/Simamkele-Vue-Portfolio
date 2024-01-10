<template>
    <div class="container bg-white">
        <h1 class="text-danger">Testimonials</h1>
    </div>

 <div class="row">
    <div class="card mx-5 w-25 mb-5 mt-4" v-for="testimonials in Testimonials" :key="testimonials">
                <img :src="testimonials.profile" class="card-img-top rounded-bottom-circle mt-4 " alt="...">
                <div class="card-body">
                  <h2 class="card-title text-center text-danger">{{ testimonials.name }} {{ testimonials.surname }} </h2>
                  <h5 class="card-text text-center">{{ testimonials.quotes }}
                  </h5>
               
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