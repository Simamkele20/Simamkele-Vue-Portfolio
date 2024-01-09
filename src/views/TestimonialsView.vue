<template>
    <div class="about">
        <h1 class="text-danger">Testimonials</h1>
    </div>

 <div class="row">
    <div class="card bg-transparent w-25" v-for="testimonials in Testimonials" :key="testimonials">
                <img :src="testimonials.profile" class="card-img-top rounded-bottom-circle " alt="...">
                <div class="card-body">
                  <h5 class="card-title text-center">{{ testimonials.name }} {{ testimonials.surname }} </h5>
                  <p class="card-text text-center">{{ testimonials.quotes }}
                  </p>
               
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